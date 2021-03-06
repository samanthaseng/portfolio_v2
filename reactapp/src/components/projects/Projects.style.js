import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    padding-bottom: 20px;
`;

export const CloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    & .close-icon {
        font-size: 30px;
        color: #5B5B5B;
        cursor: pointer;
        transition-property: color;
        transition-duration: 0.2s;

        :hover {
            color: #CEE7EC;
        }
    }
`;

export const Content = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    margin: 0;
    margin-bottom: 5px;
`;

export const Project = styled.div`
    height: 400px;
    background-image: ${props => `url(${props.background})`};
    background-size: cover;
    background-position: center;
    transition: ease all 0.5s;

    &.default {
        width: 25vw;
    }

    &.open {
        width: 55vw;
        background-color: #ffffff;
        background-image: none; 
    }

    &.reduced {
        width: 15vw;
    }

    :hover {
        transform: scale(1.02);
    }

    @media screen and (max-width: 768px) {
        height: 300px;

        &.default, &.reduced {
            width: 50vw;
        }

        &.open {
            width: 80vw;
        }

        &.reduced &.neighbour {
            width: 20vw;
        }
    }

    @media screen and (max-width: 576px) {
        &.default, &.open, &.reduced, &.neighbour {
            width: 100vw;
        }

        &.open {
            height: 400px;
        }
    }
`;

export const ProjectActive = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    overflow-y: auto;
`;

export const ProjectActiveContent = styled.div`
    padding: 20px 20px 0 20px;
`;

export const ProjectsContainer = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ProjectsContainerLineOne = styled.div`
    display: flex;

    @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`;

export const ProjectsContainerLineTwo = styled.div`
    display: flex;

    @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`;

export const ProjectHoverContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const ProjectMainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    

    :hover {
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

        &.default, &.reduced {
            background-color: rgba(0, 0, 0, 0.4);

            .project-content {
                width: calc(100% - 20px);
                height: calc(100% - 20px);
                border: 1px solid #ffffff;
            }
        }

        &.open {
            background-color: #ffffff;
        }
        
    }
`;

export const ProjectsTitle = styled.h3`
    font-family: 'Dancing Script', cursive;
    font-size: 64px;
    font-weight: 400;
    color: #ffffff;
    margin: 0;

    @media screen and (max-width: 576px) {
        font-size: 40px;
    }
`;

export const ProjectsTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;

export const ProjectsWrapper = styled.div`
    width: 100%;
    max-width: 100vw;
    padding: 60px 0 60px 0;
    background-color: #CEE7EC;
`;

export const Subtitle = styled.h5`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: bold;
    margin: 0;
    margin-bottom: 20px;
    text-align: center;
`;

export const Technologies = styled.p`
    .technologies-title {
        font-weight: bold;
    }
`;

export const Title = styled.h4`
    font-family: 'Lora', serif;
    font-size: 24px;
    font-weight: bold;
    color: #92BFC8;
    margin: 0;
    margin-bottom: 10px;
    text-align: center;
`;
