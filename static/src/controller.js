import { $$, removeAndInsertHTML } from './util/utility.js';
import { getPageData } from './data/pageDataFinder.js';
import { getPageTemplate, getNewDayTopContentTemplate } from './views/view.js.js';
import { MAIN_BANNER_INFO, mainBannerTimer } from './slide/slide.js';
import { addClickEvent } from './eventListener.js';

const activateDayTopTabButton = (gnbTarget, today) => {
  if (gnbTarget !== '웹툰' && gnbTarget !== '웹소설') return;
  $$('.day-top-tab__button')[today].classList.add('day-top-tab__button--active');
};

export const getToday = () => {
  const date = new Date();
  let today = date.getDay() - 1;
  if (today === -1) today = 6;
  return today;
};

export const renderPage = async gnbTarget => {
  const today = getToday();
  const dataUrl = getPageData(gnbTarget);
  const response = await fetch(dataUrl);
  const currentPageData = await response.json();
  const pageTemplate = getPageTemplate(gnbTarget, currentPageData, today);
  MAIN_BANNER_INFO.currentIdx = 1;
  MAIN_BANNER_INFO.viewIdx = 1;
  removeAndInsertHTML('.contents', 'afterbegin', pageTemplate);
  activateDayTopTabButton(gnbTarget, today);
  return currentPageData;
};

export const renderDayTop = (dayTopData, currentTabIdx) => {
  const newDayTopContentTemplate = getNewDayTopContentTemplate(dayTopData, currentTabIdx);
  const newDayTopContent = newDayTopContentTemplate.rankList + newDayTopContentTemplate.gradeList;
  removeAndInsertHTML('.day-top-conntent', 'afterbegin', newDayTopContent);
};

export const startMainBanerTimer = mainBannersData => {
  if (mainBannersData.length < 2) return;
  const parmToMoveMainBanner = {
    idxFun: 'addIdx',
    moveSlide: ['prev-slide', 'next-slide'],
    newMainBannerData: mainBannersData[MAIN_BANNER_INFO.currentIdx + 1],
    newSlideClassName: 'next-slide',
    insertPosition: 'beforeend',
    slideLength: mainBannersData.length
  };
  mainBannerTimer(mainBannersData, parmToMoveMainBanner);
};

export const addEvent = currentPageData => {
  addClickEvent(currentPageData);
};
