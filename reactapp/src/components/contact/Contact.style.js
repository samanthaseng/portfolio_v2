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
`;

export const ContactUpWrapper = styled.div`
    background-image: url('./top-contact.png');
    background-size: 100% 100%;
    background-position: center;
    width: 100%;
    height: 100px;
`;

export const ContactWrapper = styled.div`
    width: 100%;
    background-image: url('./header-background.jpg');
    background-size: 100% auto;
    background-position: top;
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
`;

export const InputContainer = styled.div`
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

`;
