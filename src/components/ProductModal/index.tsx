import { BsCartFill } from 'react-icons/bs';
import { IProduct } from 'src/utils/types';
import * as S from './styles';
import Modal from 'src/components/ui/Modal';
interface ProductModalProps {
    product: IProduct | null;
	isOpen: boolean;
    onClose: () => void;
	addToCart: () => void;
}

export default function ProductModal({ product, onClose, isOpen, addToCart }: ProductModalProps) {
	
	return(
		<>
			<Modal onClose={onClose} isOpen={isOpen}>
				<S.ProductInfo>
					<img src={product?.image} alt="" />
					<h2>{product?.name}</h2>
					<p>{product?.ingredients.join(', ')}</p>
					<p><b>Observação</b> (opcional)</p>
					<textarea name="Observação" id="" placeholder="Digite sua observação"></textarea>
					<div>
						<p>{product?.price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}</p>
						<button onClick={addToCart}>
							<BsCartFill />
						</button>
					</div>
				</S.ProductInfo>
			</Modal>
		</>

	);
}