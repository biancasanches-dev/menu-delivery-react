import { styled } from 'styled-components';

export const CardContainer = styled.div`
    display: grid;
    width: 25%;
    border-radius: 10px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.light};
    text-align: left;
    cursor: pointer;

    img {
        width: 100%;
        height: 281px;
        object-fit: cover;
    }

    &:hover {
        scale: 1.01;
    }
`;

export const CardContent = styled.div`
    display: grid;
    gap: 1rem;
    padding: .8rem;

    p {
        font-size: ${({ theme }) => theme.font.sizes.small};
    }
`;

export const CardPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: .8rem;

    p {
        font-size: ${({ theme }) => theme.font.sizes.small};
    }

    button {
        padding: .3rem .6rem;
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

