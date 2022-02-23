import { $ } from './utility.js';

const clickEvent = ({ renderPage, renderDayTop, currentPageData }) => {
    document.body.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        const targetClass = target.classList;

        if(targetClass.contains('gnb__link')) {
            const targetIdx = target.dataset.target;
            $('.gnb__link--active').classList.remove('gnb__link--active');
            target.classList.add('gnb__link--active');
            renderPage(targetIdx);
        }
        if(targetClass.contains('day-top-tab__button')) {
            const currentTabIdx = target.dataset.index;
            $('.day-top-tab__button--active').classList.remove('day-top-tab__button--active');
            target.classList.add('day-top-tab__button--active');
            renderDayTop(currentPageData, currentTabIdx);
        }
    });
}

export { clickEvent };