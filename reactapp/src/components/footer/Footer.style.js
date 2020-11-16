import styled from 'styled-components';

export const ContactDetailsArea = styled.p`
    color: #ffffff;
    margin: 0;

    @media screen and (max-width: 576px) {
        text-align: center;
    }
`;

export const ContactDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    a:hover {
        color: #CEE7EC;
        text-decoration: underline;
    }

    @media screen and (max-width: 576px) {
        text-align: center;
    }
`;

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 50px 0;
    background-color: #5B5B5B;

    @media screen and (max-width: 576px) {
        flex-direction: column;
    }
`;

export const InformationsWrapper = styled.div`
    padding: 0 10%;
`;

export const NameArea = styled.h3`
    color: #ffffff;
    font-family: 'Dancing Script', cursive;
    font-size: 30px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 10px;

    @media screen and (max-width: 576px) {
        text-align: center;
    }
`;

export const SocialNetworkIconWrapper = styled.div`
    color: #ffffff;
    font-size: 50px;
    margin-left: 20px;

    &:hover {
        color: #CEE7EC;
    }

    @media screen and (max-width: 576px) {
        margin: 0 10px;
    }
`;

export const SocialNetworksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10%;

    @media screen and (max-width: 576px) {
        margin-top: 20px;
    }
`;
