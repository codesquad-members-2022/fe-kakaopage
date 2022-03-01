import { $, activateButton } from './utility.js';
import { renderPage, renderDayTop , MAIN_BANNER_INFO, moveMainBanner } from './controller.js';

const renderAccordingGnb = (target) => {
    const targetIdx = target.dataset.target;
    activateButton($('.gnb__link--active'), target, 'gnb__link--active');
    renderPage(targetIdx);
}

const renderAccordingDayTopTap = (target, dayTopData) => {
    const currentTabIdx = target.dataset.index;
    activateButton($('.day-top-tab__button--active'), target, 'day-top-tab__button--active');
    renderDayTop(dayTopData, currentTabIdx);
}

const renderAccordingMainBannerButton = (targetClass, mainBannersData) => {
    let parmToMoveMainBanner;
    if(targetClass.contains('slide-button--prev')) {
        parmToMoveMainBanner = {
            idxFun: 'subtractIdx',
            moveSlide: ['next-slide', 'prev-slide'],
            newMainBannerData: mainBannersData[MAIN_BANNER_INFO.currentIdx - 1],
            parmToRenderFun: ['prev-slide', 'afterbegin']
        };
    }
    else {
        parmToMoveMainBanner = {
            idxFun: 'addIdx',
            moveSlide: ['prev-slide', 'next-slide'],
            newMainBannerData: mainBannersData[MAIN_BANNER_INFO.currentIdx + 1],
            parmToRenderFun: ['next-slide', 'beforeend']
        };
    }
    moveMainBanner(parmToMoveMainBanner.newMainBannerData, parmToMoveMainBanner);
    setInterval(() => {
        moveMainBanner(mainBannersData[MAIN_BANNER_INFO.currentIdx + 1], parmToMoveMainBanner);
    }, MAIN_BANNER_INFO.slideTime);
}

const throttleMainBannerEvent = () => {
    MAIN_BANNER_INFO.throttling = setTimeout(() => {
        MAIN_BANNER_INFO.throttling = null;
    }, MAIN_BANNER_INFO.slideTime);
}

export const addClickEvent = (currentPageData) => {
    document.body.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        const targetClass = target.classList;

        if(targetClass.contains('gnb__link')) {
            renderAccordingGnb(target);
        }
        if(targetClass.contains('day-top-tab__button')) {
            renderAccordingDayTopTap(target, currentPageData["dayTop"]);
        }
        if(targetClass.contains('main-banners__slide-button')) {
            if(MAIN_BANNER_INFO.throttling) return false;
            clearInterval(MAIN_BANNER_INFO.mainBannerTimer);
            // throttleMainBannerEvent();
            renderAccordingMainBannerButton(targetClass, currentPageData["mainBanner"]);
        }
    });
}