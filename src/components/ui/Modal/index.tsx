import * as S from './styles';
import React from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
    children: React.ReactNode;
    title?: string;
    onClose: () => void;
	isOpen: boolean;
}

export default function Modal({children, title, onClose, isOpen }: ModalProps) {
	const modalRoot = document.getElementById('modal-root');
	if (!modalRoot) return null;
	if (!isOpen) return null;

	return ReactDOM.createPortal(
		<S.ModalScreen>
			<S.ModalContainer>
				<S.ModalHeader>
					<S.ModalTitle>{title}</S.ModalTitle>
					<S.CloseButton onClick={onClose}>x</S.CloseButton>
				</S.ModalHeader>
				{children}
			</S.ModalContainer>
		</S.ModalScreen>,
		modalRoot
	);
}