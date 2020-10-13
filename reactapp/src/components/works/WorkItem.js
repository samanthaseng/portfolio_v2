import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import {
    TooltipContent,
    TooltipTitle,
    Work,
    WorkImage
} from './Works.style';

export default function WorkItem(props) {
    const { name, description, image, id, tooltipPlace } = props;

    return (
        <>
        <Work data-tip data-for={id}>
            <WorkImage image={image} />
        </Work>
        
        <ReactTooltip id={id} place={tooltipPlace} type="dark" effect="solid">
            <TooltipTitle>
                {name}
            </TooltipTitle>
            <TooltipContent>
                {description}
            </TooltipContent>
        </ReactTooltip>
      </>
    )
}

WorkItem.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    id: PropTypes.string,
    tooltipPlace: PropTypes.string
}