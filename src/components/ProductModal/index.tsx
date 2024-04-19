import { BsCartFill } from 'react-icons/bs';
import { IProduct } from '../../hooks/useData';
import * as S from './styles';
import Modal from 'src/components/ui/Modal';

interface ProductModalProps {
    product: IProduct | null;
    onClose: () => void;
	isOpen: boolean;
}

export default function ProductModal({ product, onClose, isOpen }: ProductModalProps) {
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
						<button>
							<BsCartFill />
						</button>
					</div>
				</S.ProductInfo>
			</Modal>
		</>

	);
}