import styled from 'styled-components';

export const BackToTopBottom = styled.button`
    display: ${props => props.display};
    position: fixed;
    bottom: 40px;
    right: 40px; 
    z-index: 99; 
    border: none; 
    outline: none;
    background-color: #94B366; 
    color: white; 
    cursor: pointer; 
    padding: 15px; 
    border-radius: 10px; 
    font-size: 18px; 
    width: 50px;
    height: 50px;
    transition-property: background-color;
    transition-duration: 0.5s;

    &:hover {
        background-color: #7D9D4F;
    }
`;
