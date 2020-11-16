import React from 'react';
import PropTypes from 'prop-types';
import {
    PackageWrapper
} from './Skills.style';

export default function PackagesItem(props) {
    const { name, link } = props;

    return (
        <PackageWrapper className={link ? 'withClass' : null}>
            <a href={link ? link : null} target="_blank">
                {name}
            </a>
        </PackageWrapper>
    )
}

PackagesItem.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string
}