import styled from 'styled-components';

export const HeaderSubWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    background-color: rgba(255, 255, 255, 0.17);
    width: 100%;
    height: 100%;
    transform: scaleX(-1);
`;

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-image: url('./header-background.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 30vw;
    transform: scaleX(-1);

    @media screen and (max-width: 700px) {
        // height: 100px; if button for hamburger menu
        height: 0px;
    }
`;

export const InitialsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #D9F1F5;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    position: absolute;
    left: calc(50vw - 100px);
    bottom: -1vw;

    @media screen and (max-width: 992px) {
        display: none;
    }
`;

export const InitialsFirstName = styled.h2`
    font-family: 'Dancing Script', cursive;
    font-size: 110px;
    font-weight: 400;
    color: #ffffff;
    position: absolute;
    left: 35px;
    bottom: 43px;
`;

export const InitialsName = styled.h2`
    font-family: 'Dancing Script', cursive;
    font-size: 110px;
    font-weight: 400;
    color: #ffffff;
    position: absolute;
    right: 35px;
    top: 43px;
`;

export const InitialsSubContainer = styled.div`
    border: #ffffff solid 2px;
    border-radius: 50%;
    width: 90%;
    height: 90%;
    position: relative;
`;

export const NavbarGroup = styled.li`
    display: flex;
    justify-content: space-around;
    width: 100%;
    background-color: #ffffff;

    @media screen and (max-width: 992px) {
        &.navbar-center {
            display: none;
        }        
    }

    @media screen and (max-width: 700px) {
        display: none;
    }
`;

export const NavbarItem = styled.ul`
    font-family: 'Lora', serif;
    font-size: 24px;
    color: #5B5B5B;
    padding: 0;
    cursor: pointer;
    position: relative;

    &:hover {
        color: #92BFC8;
        font-weight: bold;

        &:after {
            content: '';
            position: absolute;
            left: -20px;
            right: -20px;
            bottom: -20px;
            height: 2px;
            background: #92BFC8
        }
    }
`;

export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
    width: 100%;
    position: relative;

    @media screen and (max-width: 700px) {
        justify-content: flex-end;
        padding: 30px 25px;
    }
`;