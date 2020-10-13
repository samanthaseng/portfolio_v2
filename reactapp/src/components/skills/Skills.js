import React from 'react';
import { 
    faCode,
    faCodeBranch,
    faCommentDots, 
    faDatabase,
    faDesktop,
    faPaintBrush,
    faQuestion,
    faUserFriends
} from '@fortawesome/free-solid-svg-icons';
import SkillsCategory from './SkillsCategory';
import {
    CategoryWrapperLeft,
    CategoryWrapperRight,
    SkillsCategoriesContainer,
    SkillsTitle,
    SkillsTitleWrapper,
    SkillsWrapper
} from './Skills.style';
import skillsData from '../../data/skills.json';

export default function Skills() {
    const { categories } = skillsData;

    const categoriesList = categories.map(category => {
        let icon;
        switch (category.icon) {
            case 'faCode':
                icon = faCode;
                break;
            case 'faCodeBranch':
                icon = faCodeBranch;
                break;
            case 'faCommentDots':
                icon = faCommentDots;
                break;
            case 'faDatabase':
                icon = faDatabase;
                break;
            case 'faDesktop':
                icon = faDesktop;
                break;
            case 'faPaintBrush':
                icon = faPaintBrush;
                break;
            case 'faUserFriends':
                icon = faUserFriends;
                break;
            default:
                icon = faQuestion;
                break;
        }

        return (
            <SkillsCategory 
                name={category.name} 
                icon={icon}
                items={category.items}
                key={category.name}
            />
        )
    })

    return (
        <SkillsWrapper id="skills">
            <SkillsTitleWrapper>
                <SkillsTitle>Compétences</SkillsTitle>
            </SkillsTitleWrapper>
            <SkillsCategoriesContainer>
                <CategoryWrapperLeft>
                    {categoriesList[0]}
                    {categoriesList[1]}
                    {categoriesList[2]}
                    {categoriesList[3]}
                </CategoryWrapperLeft>
                <CategoryWrapperRight>
                    {categoriesList[4]}
                    {categoriesList[5]}
                    {categoriesList[6]}
                </CategoryWrapperRight>
            </SkillsCategoriesContainer>
        </SkillsWrapper>
    )
}