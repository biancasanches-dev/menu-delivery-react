import { useCart } from 'src/contexts/CartContext';
import * as S from './styles';
import CustomNavButton from '../ui/IconButton';
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa6';

export default function CartModal() {
	const { cartItems, addItem, removeItem, clearCart } = useCart();

	const totalValue = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

	return (
		<S.CartContent>
			<h2>Itens: {cartItems.length}</h2>
			<ul>
				{cartItems.map((item) => (
					<li key={item.id}>
						<S.ProductItem>
							<S.ProductInfo>
								<img src={item.image} alt="imagem do produto" />
								<div>
									<p>{item.name}</p>
									<span>R$ {item.price.toFixed(2)}</span>
								</div>
							</S.ProductInfo>
							<S.ProductPrice>
								<CustomNavButton onClick={() => removeItem(item)}>
									<FaMinus />
								</CustomNavButton>
								<span>{item.quantity}</span>
								<CustomNavButton onClick={() => addItem(item)}>
									<FaPlus />
								</CustomNavButton>
							</S.ProductPrice>
						</S.ProductItem>
					</li>
				))}
			</ul>
			<S.CartValue>
				<span>Total: R$ {totalValue.toFixed(2)}</span>
				<CustomNavButton onClick={clearCart}>
					<FaTrash />
				</CustomNavButton>
			</S.CartValue>
			<S.CartButton>Concluir</S.CartButton>
		</S.CartContent>
	);
}