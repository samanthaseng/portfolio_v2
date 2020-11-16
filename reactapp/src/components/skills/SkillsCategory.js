import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import PackagesItem from './PackagesItem';
import SkillItem from './SkillItem';
import {
    CategoryItemsWrapper,
    CategoryTitle,
    CategoryTitleWrapper,
    CategoryWrapper
} from './Skills.style';

export default function SkillsCategory(props) {
    const { name, icon, items } = props;

    const itemsList = items.map(item => {
        if (name === 'Librairies') {
            return (
                <PackagesItem 
                    name={item.name} 
                    link={item.link} 
                    key={item.name}
                />
            )
        } 

        return (
            <SkillItem 
                name={item.name} 
                image={item.image} 
                link={item.link} 
                key={item.name}
            />
        )        
    })
    
    return (
        <CategoryWrapper>
            <CategoryTitleWrapper>
                <FontAwesomeIcon icon={icon} className='category-icon' />
                <CategoryTitle>{name}</CategoryTitle>
            </CategoryTitleWrapper>
            <CategoryItemsWrapper>
                {itemsList}
            </CategoryItemsWrapper>
        </CategoryWrapper>
    )
}

SkillsCategory.propTypes = {
    name: PropTypes.string,
    icon: PropTypes.object,
    items: PropTypes.array
}