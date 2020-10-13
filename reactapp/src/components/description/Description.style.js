import styled from 'styled-components';

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 60px 0 40px 0;
    padding: 0 10%;

    @media screen and (max-width: 992px) {
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin-top: 30px;
    }
`;

export const DescriptionWrapper = styled.div`
    background-color: #ffffff;
    width: 100%;
    padding: 40px 0 60px 0;

    @media screen and (max-width: 992px) {
        
        padding-bottom: 10px;
    }
`;

export const ImageWrapper = styled.div`
    width: 14vw;
    height: 18vw;
    position: relative;
    border: #5B5B5B solid 1px;

    img {
        width: 14vw;
        height: 18vw;
        position: absolute;
        top: 30px;
        left: 30px;
    }

    @media screen and (max-width: 992px) {
        width: 200px;
        height: 250px;
        margin-bottom: 40px;

        img {
            width: 200px;
            height: 250px;
        }
    }
`;

export const MainImageWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 25%;

    @media screen and (max-width: 992px) {
        width: auto;
    }
`;

export const MainWrapper = styled.div`
    width: 100%;
`;

export const NameArea = styled.h1`
    color: #92BFC8;
    font-family: 'Dancing Script', cursive;
    font-size: 80px;
    font-weight: 400;
    margin: 0 0 15px 0;

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    @media screen and (max-width: 576px) {
        font-size: 40px;
    }
`;

export const TextArea = styled.p`
`;

export const TextWrapper = styled.div`
    width: 75%;

    @media screen and (max-width: 992px) {
        width: 85%;
    }
`;

export const TitleArea = styled.h2`
    color: #5B5B5B;
    font-family: 'Lora', serif;
    font-size: 35px;
    font-weight: 400;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }

    @media screen and (max-width: 576px) {
        font-size: 22px;
    }
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 100px;
    padding: 0 10%;

    @media screen and (max-width: 992px) {
        margin-bottom: 10px;
    }
`;
