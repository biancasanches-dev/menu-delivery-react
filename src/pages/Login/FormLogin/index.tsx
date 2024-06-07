import { SubmitHandler, useForm } from 'react-hook-form';
import FormField from '../../../components/ui/FormField';
import { zodResolver } from '@hookform/resolvers/zod';

import * as S from './styles';
import Registration from 'src/pages/Registration';
import FormButton from 'src/components/ui/FormButton';
import { UserSchemaLogin, UserSchemaLoginType } from 'src/utils/UserSchema';
import { useContext, useState } from 'react';
import { AuthContext } from 'src/contexts/AuthContext';

export default function FormLogin({ onLoginSuccess }: { onLoginSuccess: () => void }) {

	const { handleLogin } = useContext(AuthContext);
	const [islogged, setIsLogged] = useState(false);
    
	const {
		register,
		handleSubmit,
		// trigger,
		formState: { errors },
	} = useForm<UserSchemaLoginType>({ resolver: zodResolver(UserSchemaLogin) });

	const onSubmit: SubmitHandler<UserSchemaLoginType> = async (data) => {
		try {
			handleLogin(data.email, data.password);
			setIsLogged(true);
			onLoginSuccess();
			console.log('dados enviados: ', data);
		} catch (error) {
			console.error(error);
		}
	};

	return(
		<form onSubmit={handleSubmit(onSubmit)}>
			<S.FormLogin>
				<FormField
					label="Email"
					type="email"
					placeholder="Digite seu email"
					name="email"
					register={register}
					error={errors.email}
					// onChange={() => trigger('email')}
				/>

				<FormField
					label="Senha"
					type="password"
					placeholder="Digite sua Senha"
					name="password"
					register={register}
					error={errors.password}
					// onChange={() => trigger('password')}
				/>

				<S.FormFooter>
					<Registration />
					<FormButton>Entrar</FormButton>
				</S.FormFooter>
			</S.FormLogin>
		</form>        
	);
}
