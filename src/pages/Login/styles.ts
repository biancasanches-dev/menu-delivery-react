import { theme } from 'src/styles/theme';
import { styled } from 'styled-components';

export const Dropdown = styled.span<{ isDropdownOpen: boolean }>`
    position: absolute;
    top: 58px;
    right: 4%;
    background-color: ${theme.colors.light};
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    display: ${props => props.isDropdownOpen ? 'grid' : 'none'};
    z-index: 1;

    button {
        background: transparent;
        font-size: 1rem;
        padding: 1rem 1.5rem;
        cursor: pointer;

        &:hover {
            background-color: #e1e1e1;
        }
    }
`;