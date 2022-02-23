import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { createGnb } from './components/gnb.js';
import { createSnb } from './components/snb.js';
import { createGridMenu } from './components/gridMenu.js';
import { createMainBanner } from './components/mainBanner.js';
import { createPromotionBanner } from './components/promotionBanner.js';
import { createSectionBasic } from './components/sectionBasic.js';

const renderer = {
  header() {
    const headerEl = document.querySelector('.header');
    headerEl.insertAdjacentHTML('afterbegin', createHeader());
  },

  footer() {
    const footerEl = document.querySelector('.footer');
    footerEl.insertAdjacentHTML('afterbegin', createFooter());
  },

  gnb() {
    const gnbEl = document.querySelector('.gnb');
    gnbEl.insertAdjacentHTML('afterbegin', createGnb());
  },

  snb(subCategorys) {
    const mainEl = document.querySelector('.main');
    const snbEl = createSnb(subCategorys);
    mainEl.insertAdjacentHTML('afterbegin', snbEl);
  },

  categoryContentWrap() {
    const mainEl = document.querySelector('.main');
    const categoryContentEl = document.createElement('div');
    categoryContentEl.classList.add('category-content');
    mainEl.append(categoryContentEl);
  },

  gridMenu(menuItemLabels) {
    const categoryContentEl = document.querySelector('.category-content');
    const gridMenuEl = createGridMenu(menuItemLabels);
    categoryContentEl.insertAdjacentHTML('beforeend', gridMenuEl);
  },

  mainBanner(bannerItems) {
    const categoryContentEl = document.querySelector('.category-content');
    const mainBannerEl = createMainBanner(bannerItems);
    categoryContentEl.insertAdjacentHTML('beforeend', mainBannerEl);
  },

  promotionBanner(bannerImgUrls) {
    const categoryContentEl = document.querySelector('.category-content');
    const promotionBannerEl = createPromotionBanner(bannerImgUrls);
    categoryContentEl.insertAdjacentHTML('beforeend', promotionBannerEl);
  },

  sectionBasic(title, content) {
    const categoryContentEl = document.querySelector('.category-content');
    const sectionBasicEl = createSectionBasic(title, content);
    categoryContentEl.insertAdjacentHTML('beforeend', sectionBasicEl);
  },
};

export { renderer };
