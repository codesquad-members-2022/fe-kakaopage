import { $, activateButton } from './utility.js';

const clickEvent = ({ renderPage, renderDayTop, currentPageData }) => {
    document.body.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        const targetClass = target.classList;

        if(targetClass.contains('gnb__link')) {
            const targetIdx = target.dataset.target;
            activateButton($('.gnb__link--active'), target, 'gnb__link--active');
            renderPage(targetIdx);
        }
        if(targetClass.contains('day-top-tab__button')) {
            const currentTabIdx = target.dataset.index;
            activateButton($('.day-top-tab__button--active'), target, 'day-top-tab__button--active');
            renderDayTop(currentPageData, currentTabIdx);
        }
        if(targetClass.contains('day-top-tab__button')) {

        }
    });
}

export { clickEvent };