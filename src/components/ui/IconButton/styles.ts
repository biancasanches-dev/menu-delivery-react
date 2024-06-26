import { theme } from 'src/styles/theme';
import styled from 'styled-components';

export const CustomButton = styled.button`
    text-decoration: none;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: ${theme.colors.light};
    font-size: 1.2rem;
    margin-right: 20px;
    background-color: transparent;
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