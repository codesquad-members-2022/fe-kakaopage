import { select } from '../utility/util.js';

import { addHandlerOnGnb, addHandlerOnSnb } from '../handler/navHandler.js';
import { addHandlerOnBanner } from '../handler/bannerHandler.js';

import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { createGnb } from './components/gnb.js';
import { createSnb } from './components/snb.js';
import { createGridMenu } from './components/gridMenu.js';
import { createMainBanner } from './components/mainBanner.js';
import { createPromotionBanner } from './components/promotionBanner.js';
import { createSectionBasic } from './components/sectionBasic.js';

const renderer = {
  header: () => {
    select('.header').insertAdjacentHTML('afterbegin', createHeader());
  },

  footer: () => {
    select('.footer').insertAdjacentHTML('afterbegin', createFooter());
  },

  gnb: () => {
    select('.gnb').insertAdjacentHTML('afterbegin', createGnb());
    addHandlerOnGnb();
  },

  snb: (subCategorys) => {
    select('.main').insertAdjacentHTML('afterbegin', createSnb(subCategorys));
    addHandlerOnSnb();
  },

  gridMenu: (menuItemLabels) => {
    select('.category-content').insertAdjacentHTML('beforeend', createGridMenu(menuItemLabels));
  },

  mainBanner: (bannerItems) => {
    select('.category-content').insertAdjacentHTML('beforeend', createMainBanner(bannerItems));
    addHandlerOnBanner('main-banner');
  },

  promotionBanner: (bannerImgUrls) => {
    select('.category-content').insertAdjacentHTML(
      'beforeend',
      createPromotionBanner(bannerImgUrls)
    );
  },

  sectionBasic: (title, content) => {
    select('.category-content').insertAdjacentHTML('beforeend', createSectionBasic(title, content));
  },

  preparing: () => {
    select('.category-content').textContent = `이 탭은 준비 중입니다.`;
  },

  categoryContentWrap: () => {
    const categoryContentEl = document.createElement('div');
    categoryContentEl.classList.add('category-content');
    select('.main').append(categoryContentEl);
  },
};

export { renderer };
