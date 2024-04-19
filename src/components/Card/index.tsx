import * as S from './styles';
import { BsCartFill } from 'react-icons/bs';
import { IProduct } from '../../hooks/useData';

interface CardProps extends IProduct {
    onClick: () => void; 
}

export default function Card({ image, name, ingredients, price, onClick }: CardProps) {

	return(
		<S.CardContainer onClick={onClick}>
			<img src={image} alt="imagem do produto" />
			<S.CardContent>
				<h2>{name}</h2>
				<p>{ingredients.join(', ')}</p>
			</S.CardContent>
			<S.CardPrice>
				<p>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
				<button>
					<BsCartFill />
				</button>
			</S.CardPrice>
		</S.CardContainer>
	);
}