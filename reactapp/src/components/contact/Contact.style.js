import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

export const ContactContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.17);
    padding: 60px 10% 60px 10%;
`;

export const ContactText = styled.p`
    margin: 0;
    margin-bottom: 30px;

    @media screen and (max-width: 862px) {
        display: none;
    }
`;

export const ContactUpWrapper = styled.div`
    background-image: url('./top-contact.png');
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 100px;

    @media screen and (max-width: 1003px) {
        height: 10vw;
    }
`;

export const ContactWrapper = styled.div`
    width: 100%;
    background-image: url('./header-background.jpg');
    background-size: 100% auto;
    background-position: top;

    @media screen and (max-width: 768px) {
        background-size: cover;
    }
`;

export const ContactTitle = styled.h3`
    font-family: 'Dancing Script', cursive;
    font-size: 64px;
    font-weight: 400;
    margin: 0;

    @media screen and (max-width: 576px) {
        font-size: 40px;
    }
`;

export const ContactTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;

    @media screen and (max-width: 862px) {
        margin-bottom: 30px;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    & input, textarea {
        min-width: 400px;
        max-width: 400px;
        margin: 5px 0;
        padding: 8px 15px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        border: none;

        :focus {
            outline: 2px solid #98CDD8;
        }
    }

    & textarea {
        min-height: 150px;
    }

    @media screen and (max-width: 1137px) {
        & input {
            min-width: 200px;
            max-width: 200px;
            margin-right: 10px;
        }
    }

    @media screen and (max-width: 1003px) {
        & input {
            min-width: 180px;
            max-width: 180px;
        }

        & textarea {
            min-height: 70px;
            max-height: 70px;
        }
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }

    @media screen and (max-width: 576px) {
        & input, textarea {
            min-width: 220px;
            max-width: 220px;
        }
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1003px) {
        justify-content: space-between;
    }

    @media screen and (max-width: 768px) {
        flex-direction: row;
    }

    @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`;

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1137px) {
        display: flex;
        flex-direction: row;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;
