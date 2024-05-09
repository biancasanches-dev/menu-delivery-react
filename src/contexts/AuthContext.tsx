import axios from 'axios';
import { createContext, useState } from 'react';
import { IUser } from 'src/utils/types';

const BASE_URL = 'http://localhost:8888';

export interface IAuthContextData {
    isLoggedIn: boolean;
    isLoading: boolean;
    user?: IUser | null;
    handleLogin: (email: string, password: string) => Promise<void>;
    handleRegister: (name: string, email: string, password: string) => Promise<void>;
    handleLogout: () => void;
}

const AuthContext = createContext<IAuthContextData>({
    isLoggedIn: false,
    isLoading: false,
    handleLogin: async () => {},
    handleRegister: async () => {},
    handleLogout: () => {},
});


const AuthProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [isLoggedIn, setIsLogged] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    function tokenGenerate(): string {
        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let token = '';
        for (let i = 0; i < 32; i++) { // Generate a 32-character token
          token += chars[Math.floor(Math.random() * chars.length)];
        }
        return token;
    }

    const handleLogin = async (email: string, password: string) => {
        setIsLoading(true);

        try {
            const response = await axios.get(`${BASE_URL}/users`);
            const users = await response.data;

            console.log(users);

            const validUser = users.find((user: { email: string; password: string; }) => {
                return user.email === email && user.password === password;
            });

            if (validUser) {
                localStorage.setItem('token', tokenGenerate());
                setIsLogged(true);
                alert('Login efetuado com sucesso');
            } else {
                alert('Credenciais inválidas');
            }

        } catch (err: string | any) {
            console.error('Erro no login:', err.message);
        } finally {
            setIsLoading(false);
        }
    };
    
    const handleRegister = async (username: string, email: string, password: string) => {
        setIsLoading(true);
   
        try {
            const response = await axios.post(`${BASE_URL}/users`, { 
                username, 
                email, 
                password
            });

            return response.data;
        } catch (err: string | any) {
            console.error('Erro no cadastro:', err.message);
            return false;
        } finally {
            setIsLoading(false);
        }
      };
  
    const handleLogout = () => {
        localStorage.removeItem('token');
        setIsLogged(false);
        setUser(null);
        console.log('Logout efetuado com sucesso');
    };
  
    return (
        <AuthContext.Provider value={{ 
            user, 
            handleLogin, 
            handleRegister, 
            handleLogout, 
            isLoading, 
            isLoggedIn
        }}>
            {children}
        </AuthContext.Provider>
    );
  };
  
export { AuthProvider, AuthContext };

