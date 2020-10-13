import styled from 'styled-components';

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 20px 0;
    background-color: #5B5B5B;
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
`;

export const ContactDetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    a:hover {
        color: #CEE7EC;
        text-decoration: underline;
    }
`;

export const ContactDetailsArea = styled.p`
    color: #ffffff;
    margin: 0;
`;

export const SocialNetworksWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10%;
`;

export const SocialNetworkIconWrapper = styled.div`
    color: #ffffff;
    font-size: 50px;
    margin-left: 20px;

    &:hover {
        color: #CEE7EC;
    }
`;