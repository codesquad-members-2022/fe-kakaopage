import { $ } from '../util/utility.js';

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
  },
  slideTime: 3000,
  throttling: null
};

export const moveMainBanner = (newMainBannerData, parmToMoveMainBanner) => {
  MAIN_BANNER_INFO[parmToMoveMainBanner.idxFun](parmToMoveMainBanner.slideLength);
  moveSlide('main-banners', parmToMoveMainBanner['moveSlide']);
  renderMainBanner(newMainBannerData, parmToMoveMainBanner.newSlideClassName, parmToMoveMainBanner.insertPosition);
  updateMainBannerIdx(MAIN_BANNER_INFO.viewIdx);
};

import { getNewMainBannerTemplate } from '../views/view.js.js';

export const mainBannerTimer = (mainBannersData, parmToMoveMainBanner) => {
  setTimeout(() => {
    moveMainBanner(mainBannersData[MAIN_BANNER_INFO.currentIdx + 1], parmToMoveMainBanner);
    mainBannerTimer(mainBannersData, parmToMoveMainBanner);
  }, MAIN_BANNER_INFO.slideTime);
};
