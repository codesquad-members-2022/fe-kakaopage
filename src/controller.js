import { $$, removeAndInsertHTML, getToday } from "./utility.js";
import { getPageData } from "./data.js";
import { getPageTemplete, getNewDayTopContent } from "./view.js";
import { clickEvent } from "./eventListener.js";

const activateDayTopTabButton = (gnbTarget, today) => {
    if(gnbTarget !== '웹툰' && gnbTarget !== '웹소설') return;
    $$('.day-top-tab__button')[today].classList.add('day-top-tab__button--active');
}

const renderPage = async (gnbTarget) => {
    const today = getToday();
    const dataUrl = getPageData(gnbTarget);
    const response = await fetch(dataUrl);
    const currentPageData = await response.json();
    const PageTemplete = getPageTemplete(gnbTarget, currentPageData, today);
    removeAndInsertHTML('.contents', 'afterbegin', PageTemplete);
    activateDayTopTabButton(gnbTarget, today);
    return currentPageData;
}

const renderDayTop = (currentPageData, currentTabIdx) => {
    const newDayTopContentTemp = getNewDayTopContent(currentPageData["dayTop"], currentTabIdx);
    const newDayTopContent = newDayTopContentTemp.rankList + newDayTopContentTemp.gradeList;
    removeAndInsertHTML('.day-top-conntent', 'afterbegin', newDayTopContent);
}

const addEvent = (currentPageData) => {
    clickEvent({ renderPage, renderDayTop, currentPageData });
}

export { renderPage, renderDayTop, addEvent };