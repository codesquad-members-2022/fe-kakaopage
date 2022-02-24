import { $, activateButton } from './utility.js';

const renderAccordingGnb = (target, renderPage) => {
    const targetIdx = target.dataset.target;
    activateButton($('.gnb__link--active'), target, 'gnb__link--active');
    renderPage(targetIdx);
}

const renderAccordingDayTopTap = (target, renderDayTop, currentPageData) => {
    const currentTabIdx = target.dataset.index;
    activateButton($('.day-top-tab__button--active'), target, 'day-top-tab__button--active');
    renderDayTop(currentPageData, currentTabIdx);
}

export const addClickEvent = ({ renderPage, renderDayTop, currentPageData }) => {
    document.body.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        const targetClass = target.classList;

        if(targetClass.contains('gnb__link')) renderAccordingGnb(target, renderPage);
        if(targetClass.contains('day-top-tab__button')) renderAccordingDayTopTap(target, renderDayTop, currentPageData);
    });
}