import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    
    & button {
        min-width: ${props => props.withMinWidth ? '150px' : null };
        background-color: ${props => props.backgroundColor};
        color: ${props => props.textColor};
        border: none;
        cursor: pointer;
        margin-right: 5px;
        margin-left: 5px;

        :hover {
            background-color: ${props => props.backgroundColorOnHover};
        }
    
        :focus {
            outline: 0;
        }
    }
`;

export const InnerBorder = styled.div`
    padding: 8px 20px;
    margin: 3px -2px;
    border: ${props => props.borderColor} 1px solid;
`;

export const ButtonText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0;
`;