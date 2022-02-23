import { $, $$, getToday } from "./utility.js";
import { getPageData } from "./data.js";
import { getPageTemplete, getNewDayTopContent } from "./view.js";
import { clickEvent } from "./eventListener.js";

const renderPage = async (gnbTarget) => {
    const today = getToday();
    const jsonUrl = getPageData(gnbTarget);
    const response = await fetch(jsonUrl);
    const currentPageData = await response.json();
    const PageTemplete = getPageTemplete(gnbTarget, currentPageData, today);
    $(".contents").innerHTML = '';
    $(".contents").insertAdjacentHTML('afterbegin', PageTemplete);
    if(gnbTarget === '웹툰' || gnbTarget === '웹소설') {
        $$('.section__day-top-tab')[today].children[0].classList.add('day-top-tab__button--active');
    }
    return currentPageData;
}

const renderDayTop = (currentPageData, currentTabIdx) => {
    const newDayTopContentTemp = getNewDayTopContent(currentPageData["dayTop"], currentTabIdx);
    const newDayTopContent = newDayTopContentTemp.rankList + newDayTopContentTemp.gradeList;
    $('.day-top-conntent').innerHTML = '';
    $('.day-top-conntent').insertAdjacentHTML('afterbegin', newDayTopContent);
}

const addEvent = (currentPageData) => {
    clickEvent({ renderPage, renderDayTop, currentPageData });
}

export { renderPage, renderDayTop, addEvent };