import { BsPersonFill, BsCartFill, BsChatRightDotsFill, BsGeoAltFill, BsBookFill } from "react-icons/bs";
import logo from "../../assets/logo.svg";
import * as S from "./styles";

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
                <S.CustomLink to="/">
                    <BsPersonFill />
                </S.CustomLink>
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
    </S.Header>
  );
}