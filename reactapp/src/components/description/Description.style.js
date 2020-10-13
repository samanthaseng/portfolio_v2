import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
    background-color: #ffffff;
    width: 100%;
    padding: 40px 0 60px 0;
`;

export const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 100px;
    padding: 0 10%;
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
`;

export const TitleArea = styled.h2`
    color: #5B5B5B;
    font-family: 'Lora', serif;
    font-size: 35px;
    font-weight: 400;
    margin: 0;
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 60px 0 40px 0;
    padding: 0 10%;
`;

export const MainImageWrapper = styled.div`
    width: 25%;
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
`;

export const TextWrapper = styled.div`
    width: 75%;
`;

export const TextArea = styled.p`
`;

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`;