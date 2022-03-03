import { getMainBannerTemplate } from "../system/mainBanner.js"

const componentsListDic = {
    "home": ['mainBanner']//, 'categoryGrid', 'eventBanner', 'newTop', 'dailyRankingTop', 'recommendEventTop'],
}

const componentMakeFunctionDic = {
    "mainBanner": getMainBannerTemplate,
}

export const getWebtoonPageTemplate = (genre, pageData) => {
    const componentsList = componentsListDic[genre];
    const pageTemplate = componentsList.reduce((template, componentName) => {
        console.log(componentName)
        const componentData = pageData[componentName];
        const componentTemplate = componentMakeFunctionDic[componentName](componentData);
        return template + componentTemplate;
    },'');
    return pageTemplate;
}