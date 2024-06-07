import styled from 'styled-components';

export const CartContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    ul {
        list-style: none;
        display: grid;
        gap: 1rem;
    }
    
`;

export const CartButton = styled.button`
    padding: .3rem .6rem;
    font-size: 1.1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.light};
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        opacity: .8;
    }

`;

export const ProductItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;
    padding: .5rem;
    border-radius: 4px;
`;


export const ProductInfo = styled.div`
    display: flex; 

    img {
        width: 20%;
        border-radius: 2px;
    }

    div {
        display: grid;
        margin-left: 1rem;

        p {
            font-size: 1rem;
            font-weight: 600;
        }
    }

`;

export const ProductPrice = styled.div`
    display: flex;
    gap: 1rem;


`;

export const CartValue = styled.div`
    display: flex;
    align-self: flex-end;
    gap: 1rem;

    span {
        font-weight: 600;
        font-size: 1.1rem;
    }
`;