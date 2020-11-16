import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import {
    BackToTopBottom
} from './BackToTop.style';

export default function BackToTop() {
    const [ buttonDisplay, setButtonDisplay ] = useState('none');

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            setButtonDisplay('block');
        } else {
            setButtonDisplay('none');
        }
    }
    console.log(buttonDisplay)

    function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
    }

    return (
        <BackToTopBottom onClick={topFunction} display={buttonDisplay}>
            <FontAwesomeIcon icon={faChevronUp} />
        </BackToTopBottom>
    )
}
