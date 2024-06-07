import { FaBookOpen, FaLocationDot, FaPhone } from 'react-icons/fa6';
import logo from './assets/logo.jpg';
import * as S from './styles';
import Login from 'src/pages/Login';
import Cart from 'src/pages/Cart';

export default function Header() {

	return (
		<S.Header>
			<ul>
				<li>
					<S.CustomLink to="/">
						<FaBookOpen />
                    Cardápio
					</S.CustomLink>
				</li>
				<li>
					<S.CustomLink to="/">
						<FaLocationDot />
                    Áreas de entrega
					</S.CustomLink>
				</li>
				<li>
					<S.CustomLink to="/">
						<FaPhone />
                    Fale conosco
					</S.CustomLink>
				</li>
				<li>
					<Login />
				</li>
				<li>
					<Cart />
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