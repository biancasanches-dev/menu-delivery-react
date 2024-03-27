import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../../assets/background.jpg";
import { theme } from "../../styles/theme";

export const Header = styled.header`
    display: grid;
    ul {
        display: flex;
        list-style: none;
        justify-content: end;
        align-items: center;
        padding: 1rem
        /* li {
            font-size: 1.5rem;
            margin-right: 20px;
            cursor: pointer;
        } */
    }
    div {
        position: relative;
        width: 100%;
        height: 22rem;
        display: flex;
        justify-content: center;
        background-image: url(${background});
        background-size: cover;
        background-position: center;
        img {
            position: absolute;
            padding: 1rem;
            background-color: #fff;
            width: 12rem;
            height: 12rem;
            border-radius: 50%;
            bottom: 2rem;
        }
    }
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${theme.colors.light};
    font-size: 1.5rem;
    margin-right: 20px;
    cursor: pointer;

    &:hover {
        .react-icons {
            scale: 1.1;
        }
    }
    
    .react-icons {
        color: ${theme.colors.primary};
    }
`;