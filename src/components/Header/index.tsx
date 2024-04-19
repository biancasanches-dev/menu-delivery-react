import { BsCartFill, BsChatRightDotsFill, BsGeoAltFill, BsBookFill } from 'react-icons/bs';
import logo from './assets/logo.jpg';
import * as S from './styles';
import Login from 'src/pages/Login';

export default function Header() {

	return (
		<S.Header>
			<ul>
				<li>
					<S.CustomLink to="/">
						<BsBookFill />
                    Cardápio
					</S.CustomLink>
				</li>
				<li>
					<S.CustomLink to="/">
						<BsGeoAltFill />
                    Áreas de entrega
					</S.CustomLink>
				</li>
				<li>
					<S.CustomLink to="/">
						<BsChatRightDotsFill />
                    Fale conosco
					</S.CustomLink>
				</li>
				<li>
					<Login />
				</li>
				<li>
					<S.CustomLink to="/">
						<BsCartFill />
					</S.CustomLink>
				</li>
			</ul>
			<div>
				<a href="/">
					<img src={logo} alt="Logo do menu" />
				</a>
			</div>
			<hr />
		</S.Header>
	);
}