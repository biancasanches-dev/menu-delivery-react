import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        border: none;
    }

    body {
        font-family: 'Manrope', sans-serif;
        font-size: ${theme.font.sizes.xsmall};
        font-weight: ${theme.font.regular};
        background-color: ${theme.colors.dark};
    }
`;