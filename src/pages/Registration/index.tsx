import { useState } from 'react';
import Modal from 'src/components/ui/Modal';
import RegistrationForm from './FormRegister';

export default function Registration() {
	const [isModalOpen, setModalOpen] = useState(false);
    
	function handleOpen() {
		setModalOpen(true);
	}

	function onClose() {
		setModalOpen(false);
	}

	return(
		<>
			<a onClick={handleOpen}>Não tem conta? Cadastre-se</a>

			<Modal title="Cadastre-se" onClose={onClose} isOpen={isModalOpen}>
				<RegistrationForm />
			</Modal>
		</>
	);
}	