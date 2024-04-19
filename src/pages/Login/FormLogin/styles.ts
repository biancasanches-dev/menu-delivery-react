import { theme } from "src/styles/theme";
import styled from "styled-components";

export const FormLogin = styled.div`
    padding: 1rem;    
`;

export const FormFooter = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    margin-top: 2rem;

    a {
        text-decoration: none;
        font-size: 1rem;
        color: ${theme.colors.dark};
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
`;
