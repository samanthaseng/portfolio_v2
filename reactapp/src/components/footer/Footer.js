import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { 
    FooterWrapper,
    InformationsWrapper,
    ContactDetailsWrapper,
    NameArea,
    ContactDetailsArea,
    SocialNetworksWrapper,
    SocialNetworkIconWrapper,
} from './Footer.style.js';

export default function Footer() {
    return (
        <FooterWrapper>
            <InformationsWrapper>
                <NameArea>Samantha Seng</NameArea>
                <ContactDetailsWrapper>
                    <ContactDetailsArea>Noisy-le-Grand, France</ContactDetailsArea>
                    <ContactDetailsArea><a href="mailto:seng.samanthas@gmail.com">seng.samanthas@gmail.com</a></ContactDetailsArea>                   
                </ContactDetailsWrapper>
            </InformationsWrapper>
            <SocialNetworksWrapper>
                <SocialNetworkIconWrapper>
                    <a href="https://www.linkedin.com/in/samanthaseng/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </SocialNetworkIconWrapper>
                <SocialNetworkIconWrapper>
                    <a href="https://github.com/samanthaseng" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithubSquare} />
                    </a>
                </SocialNetworkIconWrapper>
            </SocialNetworksWrapper>
        </FooterWrapper>
    )
}
