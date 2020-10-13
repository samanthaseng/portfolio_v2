import styled from 'styled-components';

export const CategoryItemsWrapper = styled.div`
    display: flex;
`;

export const CategoryTitle = styled.h2`
    margin: 0;
`;

export const CategoryTitleWrapper = styled.div`
    display: flex;
    align-items: center;

    .category-icon {
        font-size: 25px;
        margin-right: 15px;
        color: #92BFC8;
    }
`;

export const CategoryWrapper = styled.div`
`;

export const CategoryWrapperLeft = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CategoryWrapperRight = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemWrapper = styled.div`
    margin-top: 10px;
    margin-bottom: 25px;
    padding-top: 4px;

    img {
        height: 60px;
        margin-right: 10px;
        margin-left: 10px;
        transition: ease all 0.5s;
    }

    &.withClass:hover {
        img {
            transform: scale(1.3);
        }
    }
`;

export const SkillsCategoriesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 10%;
`;

export const SkillsTitle = styled.h3`
    font-family: 'Dancing Script', cursive;
    font-size: 64px;
    font-weight: 400;
    color: #92BFC8;
    margin: 0;
`;

export const SkillsTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`;

export const SkillsWrapper = styled.div`
    width: 100%;
    padding: 60px 0 60px 0;
    background-color: #F5F5F5;
`;
