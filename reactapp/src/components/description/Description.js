import React from 'react';
import { 
    DescriptionWrapper,
    TitleWrapper,
    NameArea,
    TitleArea,
    ContentWrapper,
    MainImageWrapper,
    ImageWrapper,
    TextWrapper,
    TextArea,
    ButtonWrapper
} from './Description.style.js';
import Button from '../UI/Button/Button';
import data from '../../data/description.json';

export default function Description() {
    const { descriptions, resume_link } = data;

    const descriptionToDisplay = descriptions.map((description, i) => <TextArea key={i}>{description.paragraph}</TextArea>);

    const image = "./description-illustration.jpg"

    return (  
        <DescriptionWrapper>
            <TitleWrapper>
                <NameArea>Samantha Seng</NameArea>
                <TitleArea>Développeuse web Full-Stack</TitleArea>
            </TitleWrapper>
            <ContentWrapper>
                <MainImageWrapper>
                    <ImageWrapper>
                        <img src={image} className="illustration" alt="illustration plante" />
                    </ImageWrapper>
                </MainImageWrapper>
                <TextWrapper>
                    {descriptionToDisplay}
                    <ButtonWrapper>
                        <Button component="resume" link={resume_link}>Télécharger mon CV</Button>
                    </ButtonWrapper>
                </TextWrapper>
            </ContentWrapper>
        </DescriptionWrapper>
    )
}
