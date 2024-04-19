import { theme } from "src/styles/theme";
import styled from "styled-components";

export const Button = styled.button`

    font-size: 1.5rem;
    background-color: #000;
    color: ${theme.colors.light};
    padding: .5rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    width: fit-content;
    align-self: flex-end;

    &:hover {
        background-color: ${theme.colors.primary};
        scale: 1.05;
        transition: all .2s ease-in-out;

    }

`;