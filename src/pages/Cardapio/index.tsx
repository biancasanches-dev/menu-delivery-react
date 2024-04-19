import Cardslist from '../../components/CardsList';
import CategoriesList from '../../components/CategoriesList';


export default function Cardapio() {
	return(
		<div style={{ display: 'flex', margin: '50px 150px', gap: '25px', scrollBehavior: 'smooth'}}>
			<CategoriesList />
			<Cardslist />
		</div>
        
	);
}