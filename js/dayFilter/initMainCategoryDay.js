import { selectorAll } from '../util/util.js';
const CATEGORY_ITEM_SELECTOR = '.page-main-category__item';

const initMainCategoryDay = () => {
  const $$category = selectorAll(CATEGORY_ITEM_SELECTOR);
  $$category.forEach(($category) => {
    if (!['홈', '웹툰', '요일연재'].includes($category.textContent)) return;
    $category.dataset.curday = new Date().getDay();
  });
};

export default initMainCategoryDay;
