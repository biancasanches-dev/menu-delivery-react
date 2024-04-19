import { FaBurger, FaWineGlass, FaBowlRice } from 'react-icons/fa6';
import { ICategory } from '../../hooks/useData';
import * as S from './styles';

interface CategoryLinkProps extends ICategory { }

const ICONS = {
	'hamburguer': FaBurger,
	'bebidas': FaWineGlass,
	'acompanhamentos': FaBowlRice
};

export default function CategoryLink({ category, iconName }: CategoryLinkProps) {
	const IconComponent = ICONS[iconName as keyof typeof ICONS] || FaBurger;

	return(
		<>
			<S.CategoryLink href={`#${category}`}>
				<i>
					<IconComponent />
				</i>
				<span>{category}</span>
			</S.CategoryLink>     
		</>
	);
}