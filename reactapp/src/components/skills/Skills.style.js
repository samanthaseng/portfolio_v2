import styled from 'styled-components';

export const CategoryItemsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 25px;

    @media screen and (max-width: 992px) {
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const CategoryTitle = styled.h2`
    margin: 0;

    @media screen and (max-width: 992px) {
        font-size: 20px;
    }
`;

export const CategoryTitleWrapper = styled.div`
    display: flex;
    align-items: center;

    .category-icon {
        font-size: 25px;
        margin-right: 15px;
        color: #92BFC8;
    }

    @media screen and (max-width: 992px) {
        justify-content: center;

        .category-icon {
            font-size: 20px;
        }
    }
`;

export const CategoryWrapper = styled.div`
`;

export const CategoryWrapperLeft = styled.div`
    display: flex;
    flex-direction: column;
    width: 55%;

    @media screen and (max-width: 992px) {
        width: 100%;
    }
`;

export const CategoryWrapperRight = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;

    @media screen and (max-width: 992px) {
        width: 100%;
    }
`;

export const ItemWrapper = styled.div`
    margin-top: 10px;
    padding-top: 4px;

    img {
        height: 60px;
        margin-right: 10px;
        margin-left: 10px;
        transition: ease all 0.5s;

        @media screen and (max-width: 992px) {
            height: 50px;
        }
    }

    &.withClass:hover {
        img {
            transform: scale(1.3);
        }
    }
`;

export const PackageWrapper = styled.div`
    background-color: #ffffff;
    border: #92BFC8 solid 1px;
    border-radius: 20px;
    padding: 3px 10px;
    margin: 10px 5px 0 0;
    transition-property: background-color;
    transition-duration: 0.5s;

    &:hover {
        background-color: #CBDFE4; 
    }
`;

export const SkillsCategoriesContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 0 10%;

    @media screen and (max-width: 992px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const SkillsTitle = styled.h3`
    font-family: 'Dancing Script', cursive;
    font-size: 64px;
    font-weight: 400;
    color: #92BFC8;
    margin: 0;

    @media screen and (max-width: 576px) {
        font-size: 40px;
    }
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
