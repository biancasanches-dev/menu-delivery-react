import { styled } from 'styled-components';

export const ModalScreen = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    display: flex;
    flex-direction: column;
`;

export const ModalContainer = styled.div`
    color: ${props => props.theme.colors.dark};
    background: white;
    width: 40%;
    height: auto;
    margin: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;
`;

export const ModalHeader = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
`;

export const ModalTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: semi-bold;
    text-align: center;
`;

export const CloseButton = styled.button`
        margin-bottom: .5rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        font-weight: semi-bold;
        align-self: flex-end;
        cursor: pointer;
`;