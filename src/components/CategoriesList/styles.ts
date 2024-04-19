import { styled } from 'styled-components';

export const CategoryList = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    gap: 10px;
    color: ${props => props.theme.colors.primary};
    
    h1 {
        text-align: center;
        
    }
`;