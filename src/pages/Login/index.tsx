import { useContext, useState } from 'react';
import { FaUser } from "react-icons/fa6";
import Modal from 'src/components/ui/Modal';
import * as S from './styles';
import FormLogin from 'src/pages/Login/FormLogin';
import { AuthContext } from 'src/contexts/AuthContext';

export default function Login() {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const { isLoggedIn, handleLogout } = useContext(AuthContext);
    
    function handleOpen() {
        setModalOpen(true);
    }

    function onClose() {
        setModalOpen(false);
    }

    function openDropdown() {
        setDropdownOpen(!isDropdownOpen);
    };

	return(
		<>
            {isLoggedIn ? 
                <S.CustomButton onClick={openDropdown}>
                    <FaUser />
                    <S.Dropdown isDropdownOpen={isDropdownOpen}>
                        <button>Meus pedidos</button>
                        <button onClick={handleLogout}>Sair</button>
                    </S.Dropdown>
                </S.CustomButton>
                :
                <S.CustomButton onClick={handleOpen}>
                    <FaUser />
                </S.CustomButton>
            }

			<Modal title="Login" onClose={onClose} isOpen={isModalOpen}>
                <FormLogin onLoginSuccess={onClose} />
			</Modal>
		</>
	);
}	