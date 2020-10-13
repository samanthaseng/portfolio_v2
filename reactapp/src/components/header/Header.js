import React from 'react';
import {
    HeaderWrapper,
    HeaderSubWrapper
} from './Header.style';
import Navbar from './Navbar';

export default function Header() {
    return (
        <HeaderWrapper>
            <HeaderSubWrapper>
                <Navbar />
            </HeaderSubWrapper>
        </HeaderWrapper>
    )
}
