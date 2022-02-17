import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { createGnb } from './components/gnb.js';
import { createPromotionBanner } from './components/promotionBanner.js';
import { createGridMenu } from './components/gridMenu.js';

const renderSet = {
  renderHeader() {
    const headerEl = document.querySelector('.header');
    headerEl.insertAdjacentHTML('afterbegin', createHeader());
  },

  renderFooter() {
    const footerEl = document.querySelector('.footer');
    footerEl.insertAdjacentHTML('afterbegin', createFooter());
  },

  renderGnb() {
    const gnbEl = document.querySelector('.gnb');
    gnbEl.insertAdjacentHTML('afterbegin', createGnb());
  },

  renderPromotionBanner(bannerImgUrls) {
    const mainEl = document.querySelector('.main');
    const promotionBannerEl = createPromotionBanner(bannerImgUrls);
    mainEl.insertAdjacentHTML('afterbegin', promotionBannerEl);
  },

  renderGridMenu(menuItemLabels) {
    const mainEl = document.querySelector('.main');
    const gridMenuEl = createGridMenu(menuItemLabels);
    mainEl.insertAdjacentHTML('beforeend', gridMenuEl);
  },
};

export { renderSet };
