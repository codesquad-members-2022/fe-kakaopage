import { getMainBannerTemplate } from "../system/mainBanner.js"
import { getCategoryGridTemplate } from "../system/categoryGrid.js"
import { getEventBannerTemplate } from "../system/eventBanner.js";
import { getWorkSectionTemplate } from "../system/workSection.js";

const componentsListDic = {
    "home": ['mainBanner', 'categoryGrid', 'eventBanner','newTop'], //'daySeriesTop','dailyRankingTop', 'recommendEventTop'],
    "daily": ['mainBanner'],
    "webtoon": ['mainBanner'],
    "boy": ['mainBanner', 'categoryGrid', 'eventBanner'],
    "drama": ['mainBanner', 'categoryGrid'],
    "romance": ['mainBanner', 'categoryGrid', 'eventBanner'],
    "rofan": ['mainBanner', 'categoryGrid', 'eventBanner'],
    "action": ['mainBanner', 'categoryGrid', 'eventBanner'],
    "BL": ['mainBanner', 'categoryGrid']
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