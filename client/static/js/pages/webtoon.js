import { getMainBannerTemplate } from "../system/mainBanner.js"
import { getCategoryGridTemplate } from "../system/categoryGrid.js"
import { getEventBannerTemplate } from "../system/eventBanner.js";
import { getWorkSectionTemplate } from "../system/workSection.js";

const componentsListDic = {
    "home": ['mainBanner', 'categoryGrid', 'eventBanner','newTop'] //'daySeriesTop','dailyRankingTop', 'recommendEventTop'],
}

const componentMakeFunctionDic = {
    "mainBanner": getMainBannerTemplate,
    "categoryGrid": getCategoryGridTemplate,
    "eventBanner": getEventBannerTemplate,
    "daySeriesTop": getWorkSectionTemplate.bind(null, 'small', 'daySeriesTop'),
    "newTop": getWorkSectionTemplate.bind(null, 'banner', 'newTop')
}

export const getWebtoonPageTemplate = (genre, pageData) => {
    const componentsList = componentsListDic[genre];
    const pageTemplate = componentsList.reduce((template, componentName) => {
        const componentData = pageData[componentName];
        const componentTemplate = componentMakeFunctionDic[componentName](componentData);
        return template + componentTemplate;
    },'');
    return pageTemplate;
}