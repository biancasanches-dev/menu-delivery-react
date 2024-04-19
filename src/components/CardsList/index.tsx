import { useState } from 'react';
import { useData } from '../../hooks/useData';
import { IProduct } from '../../hooks/useData';
import Card from '../Card';
import ProductModal from '../ProductModal';
import * as S from './styles';

export default function Cardslist() {
	const { data } = useData();
	const [isModalOpen, setModalOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);

	function handleOpenModal(product: IProduct) {
		setModalOpen(true);
		setSelectedProduct(product);
	}

	function handleCloseModal() {
		setModalOpen(false);
	}

	return(
		<S.ProductsContainer>
			{data?.map((item) => (
				<div id={item.category} key={item.category}>
					<h1>{item.category}</h1>
					<S.ProductsList>
						{item.products?.map((product) => (   
							<Card key={product.id} image={product.image} name={product.name} ingredients={product.ingredients} price={product.price} id={product.id} quantity={product.quantity} onClick={() => handleOpenModal(product)} />
						))}
					</S.ProductsList>
				</div>
			))}
			<ProductModal product={selectedProduct} onClose={handleCloseModal} isOpen={isModalOpen} />
		</S.ProductsContainer>

	);
}

