import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { createGnb } from './components/gnb.js';
import { createSnb } from './components/snb.js';
import { createGridMenu } from './components/gridMenu.js';
import { createMainBanner } from './components/mainBanner.js';
import { createPromotionBanner } from './components/promotionBanner.js';

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

  renderSnb(subCategorys) {
    const mainEl = document.querySelector('.main');
    const snbEl = createSnb(subCategorys);
    mainEl.insertAdjacentHTML('beforeend', snbEl);
  },

  renderGridMenu(menuItemLabels) {
    const mainEl = document.querySelector('.main');
    const gridMenuEl = createGridMenu(menuItemLabels);
    mainEl.insertAdjacentHTML('beforeend', gridMenuEl);
  },

  renderMainBanner(bannerItems) {
    const mainEl = document.querySelector('.main');
    const mainBannerEl = createMainBanner(bannerItems);
    mainEl.insertAdjacentHTML('beforeend', mainBannerEl);
  },

  renderPromotionBanner(bannerImgUrls) {
    const mainEl = document.querySelector('.main');
    const promotionBannerEl = createPromotionBanner(bannerImgUrls);
    mainEl.insertAdjacentHTML('beforeend', promotionBannerEl);
  },
};

export { renderSet };
