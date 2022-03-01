import { $, $$, removeAndInsertHTML, getToday } from './utility.js';
import { getPageData } from './data.js';
import { getPageTemplate, getNewDayTopContentTemplate, getNewMainBannerTemplate } from './view.js';
import { addClickEvent } from './eventListener.js';

export const MAIN_BANNER_INFO = {
  mainBannerTimer: 0,
  currentIdx: 1,
  viewIdx: 1,
  subtractIdx: function (slideLength) {
    this.currentIdx--;
    this.viewIdx--;
    if (this.currentIdx <= 0) this.currentIdx = slideLength;
    if (this.viewIdx <= 0) this.viewIdx = slideLength;
  },
  addIdx: function (slideLength) {
    this.currentIdx++;
    this.viewIdx++;
    if (this.currentIdx >= slideLength - 1) this.currentIdx = -1;
    if (this.viewIdx > slideLength) this.viewIdx = 1;
    // console.log(slideLength);
  },
  slideTime: 3000,
  throttling: null
};

const activateDayTopTabButton = (gnbTarget, today) => {
  if (gnbTarget !== '웹툰' && gnbTarget !== '웹소설') return;
  $$('.day-top-tab__button')[today].classList.add('day-top-tab__button--active');
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

const renderMainBanner = (newMainBannerData, newSlideClassName, insertPosition) => {
  const newMainBannerTemplate = getNewMainBannerTemplate(newMainBannerData, newSlideClassName);
  $('.main-banners__contents').insertAdjacentHTML(insertPosition, newMainBannerTemplate);
};

const moveSlide = (slideName, [oldSlide, newSlide]) => {
  $(`.${slideName} .${oldSlide}`).remove();
  $(`.${slideName} .current-slide`).classList.add(oldSlide);
  $(`.${slideName} .current-slide`).classList.remove('current-slide');
  $(`.${slideName} .${newSlide}`).classList.add('current-slide');
  $(`.${slideName} .${newSlide}`).classList.remove(newSlide);
};

const updateMainBannerIdx = currentIdx => {
  $('.main-banners .slide-paging-number__current').textContent = currentIdx;
};

export const moveMainBanner = (newMainBannerData, parmToMoveMainBanner) => {
  MAIN_BANNER_INFO[parmToMoveMainBanner.idxFun](parmToMoveMainBanner.slideLength);
  moveSlide('main-banners', parmToMoveMainBanner['moveSlide']);
  renderMainBanner(newMainBannerData, parmToMoveMainBanner.newSlideClassName, parmToMoveMainBanner.insertPosition);
  updateMainBannerIdx(MAIN_BANNER_INFO.viewIdx);
};

export const mainBannerTimer = (mainBannersData, parmToMoveMainBanner) => {
  setTimeout(() => {
    moveMainBanner(mainBannersData[MAIN_BANNER_INFO.currentIdx + 1], parmToMoveMainBanner);
    mainBannerTimer(mainBannersData, parmToMoveMainBanner);
  }, MAIN_BANNER_INFO.slideTime);
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
