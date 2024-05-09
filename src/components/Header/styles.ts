import styled from 'styled-components';
import { Link } from 'react-router-dom';
import background from './assets/background.jpg';
import { theme } from '../../styles/theme';

export const Header = styled.header`
    display: grid;
    position: relative;
    ul {
        display: flex;
        list-style: none;
        justify-content: end;
        align-items: center;
        padding: 1rem 3rem;
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
        justify-content: space-around;
        background-image: url(${background});
        background-size: cover;
        background-position: center;
        img {
            position: absolute;
            width: 13rem;
            height: 13rem;
            border-radius: 50%;
            border: .2px solid #000;
            bottom: 4rem;
        }
    }
`;

export const CustomLink = styled(Link)`
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    color: ${theme.colors.light};
    font-size: 1.2rem;
    margin-right: 20px;
    cursor: pointer;
    background-color: transparent;

    &:hover {
        .react-icons {
            scale: 1.1;
        }
    }
    
    .react-icons {
        color: ${theme.colors.primary};
    }
`;