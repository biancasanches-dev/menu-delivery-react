import { FaCartShopping } from 'react-icons/fa6';
import CartModal from 'src/components/CartModal';
import IconButton from 'src/components/ui/IconButton';
import Modal from 'src/components/ui/Modal';
import { useCart } from 'src/contexts/CartContext';

export default function Cart() {
	const { openCart, closeCart, isCartOpen } = useCart();

	return(
		<>
			<IconButton onClick={openCart}>
				<FaCartShopping />
			</IconButton>

			{isCartOpen && (
				<Modal title="Carrinho" onClose={closeCart} isOpen={true}>
					<CartModal />
				</Modal>
			)}
		</>
	);
}