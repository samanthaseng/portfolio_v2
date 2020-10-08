import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper, InnerBorder, ButtonText } from './Button.style';

export default function CustomedButton(props) {
    const { children, component, action } = props;

    let backgroundColor;
    let backgroundColorOnHover;
    let borderColor;
    let textColor;
    switch (component) {
        case 'resume':
            backgroundColor = '#95B467';
            backgroundColorOnHover = '#7D9D4F';
            borderColor = '#ffffff';
            textColor = '#ffffff'
            break;
        case 'website-link':
            backgroundColor = '#95B467';
            backgroundColorOnHover = '#7D9D4F';
            borderColor = '#ffffff';
            textColor = '#ffffff'
            break;
        case 'github-link':
            backgroundColor = '#95B467';
            backgroundColorOnHover = '#7D9D4F';
            borderColor = '#ffffff';
            textColor = '#ffffff'
            break;
        case 'contact-form':
            backgroundColor = '#95B467';
            backgroundColorOnHover = '#7D9D4F';
            borderColor = '#ffffff';
            textColor = '#ffffff'
            break;
        case 'projects':
            backgroundColor = '#ffffff';
            backgroundColorOnHover = '#E3F1F4';
            borderColor = '#CEE7EC';
            textColor = '#92BFC8';
            break;
        default:
            backgroundColor = '#000000';
            backgroundColorOnHover = '#000000';
            borderColor = '#000000';
            textColor = '#ffffff';
            break;
    }

    return (
        <ButtonWrapper
            backgroundColor={backgroundColor} 
            textColor={textColor}
            backgroundColorOnHover={backgroundColorOnHover}
        >
            <a href={props.link ? props.link : null} target="_blank">
                <button onClick={action ? action : null}>
                    <InnerBorder borderColor={borderColor}>
                        <ButtonText>
                            {children}
                        </ButtonText>
                    </InnerBorder>
                </button>
            </a>
        </ButtonWrapper>
    )
}

CustomedButton.propTypes = {
    children: PropTypes.any,
    component: PropTypes.string,
    action: PropTypes.func
}