import { FaCartShopping, FaBookOpen, FaLocationDot, FaPhone } from "react-icons/fa6";
import logo from './assets/logo.jpg';
import * as S from './styles';
import Login from 'src/pages/Login';

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
					<S.CustomLink to="/">
						<FaCartShopping />
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