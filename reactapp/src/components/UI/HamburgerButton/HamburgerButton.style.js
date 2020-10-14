import styled from 'styled-components';

export const ButtonContainer = styled.div`
    display: none;
    min-width: 45px;
    max-width: 45px;
    cursor: pointer;

    & > div {
        width: 100%;
        padding-bottom: 100%;
        position: relative;
    }

    & > div > div {
        background-color: #92BFC8;
        position: absolute;
        width: 80%;
        height: 10%;
        border-radius: 1000px;
        left: 10%;
        top: 45%;
        transition: transform 0.1s linear,
            top 0.25s linear 0.1s,
            width 0s linear 0.1s;
    }

    & > div div:nth-child(1) {
        top: 20%;
    }
      
    & > div div:nth-child(3) {
        top: 70%;
    }

    &.close div > div {
        transition: transform 0.25s linear 0.1s,
        top 0.1s linear,
        width 0s linear 0.1s;
    }
      
    &.close > div div:nth-child(1) {
        top: 45% !important;
        transform: rotate(45deg);
    }

    &.close > div div:nth-child(2) {
        width: 0;
        
    }

    &.close > div div:nth-child(3) {
        top: 45% !important;
        transform: rotate(-45deg);
    }


    @media screen and (max-width: 700px) {
        display: block;
    }
`;
