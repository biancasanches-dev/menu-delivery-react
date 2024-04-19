import { styled } from 'styled-components';

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
        border-radius: 8px;
        height: 580px;
        object-fit: cover;
    }

    p {
        font-size: 1rem;
    }

    b {
        color: ${props => props.theme.colors.primary};
    }

    textarea {
        border: 1px solid ${props => props.theme.colors.dark};
        width: 100%;
        height: 100px;
        border-radius: 5px;
        padding: 10px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    button {
        padding: .5rem 3rem;
        font-size: 1.5rem;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.light};
        border: none;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
            scale: 1.1;
        }
    }
`;