import React from 'react';
import {
    NavbarGroup,
    NavbarItem,
    NavbarWrapper,
    InitialsContainer,
    InitialsFirstName,
    InitialsName,
    InitialsSubContainer
} from './Header.style';
import HamburgerButton from '../UI/HamburgerButton/HamburgerButton';

export default function Navbar() {    
    return (
        <NavbarWrapper>
            {/* <HamburgerButton className="hamburger-button" /> */}
            <InitialsContainer>
                <InitialsSubContainer>
                    <InitialsFirstName>S</InitialsFirstName>
                    <InitialsName>S</InitialsName>
                </InitialsSubContainer>
            </InitialsContainer>
            <NavbarGroup className="navbar-left">
                <NavbarItem>
                    <a href="#skills">Compétences</a>
                </NavbarItem>
                <NavbarItem>
                    <a href="#projects">Projets réalisés</a>
                </NavbarItem>
            </NavbarGroup>
            <NavbarGroup className="navbar-center">
            </NavbarGroup>
            <NavbarGroup className="navbar-right">
                <NavbarItem>
                    <a href="#works">Travaux divers</a>
                </NavbarItem>
                <NavbarItem>
                    <a href="#contact">Me contacter</a>
                </NavbarItem>
            </NavbarGroup>
        </NavbarWrapper>
    )
}
