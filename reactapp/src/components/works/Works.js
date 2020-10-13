import React from 'react';
import {
    WorksContainer,
    WorksContainerLineOne,
    WorksContainerLineTwo,
    WorksContainerSubLineOne,
    WorksTitle,
    WorksTitleWrapper,
    WorksWrapper
} from './Works.style';
import WorkItem from './WorkItem';
import worksData from '../../data/works.json';

export default function Works() {
    const { works } = worksData;

    const worksToDisplay = works.map(work => {
        return (
            <WorkItem
                name={work.name}
                description={work.description}
                image={work.image}
                id={work.id}
                tooltipPlace={work.position <= 3 ? "bottom": "top"}
            />
        )
    })

    return (
        <WorksWrapper id="works">
            <WorksTitleWrapper>
                <WorksTitle>Autres travaux</WorksTitle>
            </WorksTitleWrapper>

            <WorksContainer>
                <WorksContainerLineOne>
                    <WorksContainerSubLineOne>
                        {worksToDisplay[0]}
                        {worksToDisplay[1]}
                    </WorksContainerSubLineOne>
                    {worksToDisplay[2]}
                </WorksContainerLineOne>
                { worksToDisplay[3] && worksToDisplay[4]
                    ? <WorksContainerLineTwo>
                        {worksToDisplay[3]}
                        {worksToDisplay[4]}
                    </WorksContainerLineTwo>
                    : null
                }
            </WorksContainer>
        </WorksWrapper>
    )
}