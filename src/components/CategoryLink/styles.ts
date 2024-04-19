import { styled } from 'styled-components';
import { theme } from '../../styles/theme';

export const CategoryLink = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: .6rem;
    gap: 10px;
    color: ${theme.colors.light};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    width: 100%;
    border-radius: 20px;
    cursor: pointer;

    i {
        font-size: 1.5rem;
    }

    &:hover {
        background-color: ${theme.colors.primary};
    }
    
`;
