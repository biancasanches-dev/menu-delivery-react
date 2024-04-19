import { useData } from '../../hooks/useData';
import CategoryLink from '../CategoryLink';
import * as S from './styles';

export default function CategoriesList() {   
	const { isLoading, data } = useData();

	if (isLoading) return 'Loading...';

	return(
		<S.CategoryList>
			<h1>BIG Burguer</h1>
			{data?.map((item) => (
				<CategoryLink key={item.category} category={item.category} iconName={item.iconName} />
			))}
		</S.CategoryList>
        
	);
}