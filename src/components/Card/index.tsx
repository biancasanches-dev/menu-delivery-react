import * as S from './styles';
import { BsCartFill } from 'react-icons/bs';
import { IProduct } from 'src/utils/types';

interface CardProps extends IProduct {
    onClick: () => void; 
    addToCart: () => void; 
}

export default function Card({ image, name, ingredients, price, onClick, addToCart }: CardProps) {

	return(
		<S.CardContainer onClick={onClick}>
			<img src={image} alt="imagem do produto" />
			<S.CardContent>
				<h2>{name}</h2>
				<p>{ingredients.join(', ')}</p>
			</S.CardContent>
			<S.CardPrice>
				<p>{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
				<button type='button' onClick={addToCart}>
					<BsCartFill />
				</button>
			</S.CardPrice>
		</S.CardContainer>
	);
}