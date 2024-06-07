import { CustomButton } from './styles';

interface IconButtonProps {
    children: React.ReactNode;
    onClick: () => void;
}

export default function IconButton({children, onClick}: IconButtonProps) {
	return(
		<CustomButton onClick={onClick}>{children}</CustomButton>
	);
}