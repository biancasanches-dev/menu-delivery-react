import styled from 'styled-components';

export const ProductsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1 {
        color: ${({ theme }) => theme.colors.light};
        border-bottom: 4px solid ${({ theme }) => theme.colors.primary};
        width: fit-content;
        margin-bottom: 1.5rem;
        padding-right: 1.5rem;
    }
`;

export const ProductsList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1.5rem;

`;