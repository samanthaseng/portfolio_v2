import styled from 'styled-components';

export const TooltipContent = styled.p`
    width: 400px;
`;

export const TooltipTitle = styled.h3`
    text-align: center;
`;

export const Work = styled.div`
    width: 225px;
    height: 225px;
    min-width: 225px;
    min-height: 225px;
    margin-left: 60px;
    margin-right: 60px;
    transform: rotate(45deg); 
    overflow: hidden;

    :hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
`;

export const WorkImage = styled.div`
    width: 145%;
    height: 145%;
    background-image: ${props => `url(${props.image})`};
    background-position: center;
    background-size: cover;
    transform: rotate(-45deg) translate(0px, -70px);
`;

export const WorksContainer = styled.div`
    margin-bottom: 80px;
    padding: 0 10%;
`;

export const WorksContainerLineOne = styled.div`
    display: flex;
    justify-content: center;
`;

export const WorksContainerLineTwo = styled.div`
    display: flex;
    justify-content: center;
`;

export const WorksContainerSubLineOne = styled.div`
    display: flex;
`;

export const WorksWrapper = styled.div`
    width: 100%;
    padding: 60px 0;
    background-color: #FFFFFF;
`;

export const WorksTitle = styled.h3`
    font-family: 'Dancing Script', cursive;
    font-size: 64px;
    font-weight: 400;
    color: #92BFC8;
    margin: 0;

    @media screen and (max-width: 576px) {
        font-size: 40px;
    }
`;

export const WorksTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    padding: 0 10%;
`;
