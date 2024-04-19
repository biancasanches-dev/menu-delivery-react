import { useState } from 'react';
import { FaUser } from "react-icons/fa6";
import Modal from 'src/components/ui/Modal';
import * as S from './styles';
import FormLogin from 'src/pages/Login/FormLogin';

export default function Login() {
    const [isModalOpen, setModalOpen] = useState(false);
    
    function handleOpen() {
        setModalOpen(true);
    }

    function onClose() {
        setModalOpen(false);
    }

	return(
		<>
            <S.CustomButton onClick={handleOpen}>
                <FaUser />
            </S.CustomButton>

			<Modal title="Login" onClose={onClose} isOpen={isModalOpen}>
                <FormLogin />
			</Modal>
		</>
	);
}	