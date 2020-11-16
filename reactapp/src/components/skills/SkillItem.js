import React from 'react';
import PropTypes from 'prop-types';
import {
    ItemWrapper
} from './Skills.style';

export default function SkillItem(props) {
    const { name, image, link } = props;

    return (
        <ItemWrapper className={link ? 'withClass' : null}>
            <a href={link ? link : null} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={name} />
            </a>
        </ItemWrapper>
    )
}

SkillItem.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string,
    link: PropTypes.string
}