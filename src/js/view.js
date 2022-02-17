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
    mainEl.insertAdjacentHTML('afterbegin', snbEl);
  },

  renderCategoryContentWrap() {
    const mainEl = document.querySelector('.main');
    const categoryContentEl = document.createElement('div');
    categoryContentEl.classList.add('category-content');
    mainEl.append(categoryContentEl);
  },

  renderGridMenu(menuItemLabels) {
    const categoryContentEl = document.querySelector('.category-content');
    const gridMenuEl = createGridMenu(menuItemLabels);
    categoryContentEl.insertAdjacentHTML('beforeend', gridMenuEl);
  },

  renderMainBanner(bannerItems) {
    const categoryContentEl = document.querySelector('.category-content');
    const mainBannerEl = createMainBanner(bannerItems);
    categoryContentEl.insertAdjacentHTML('beforeend', mainBannerEl);
  },

  renderPromotionBanner(bannerImgUrls) {
    const categoryContentEl = document.querySelector('.category-content');
    const promotionBannerEl = createPromotionBanner(bannerImgUrls);
    categoryContentEl.insertAdjacentHTML('beforeend', promotionBannerEl);
  },
};

export { renderSet };
