import { selectorAll } from '../../util/util.js';
const CATEGORY_ITEM_SELECTOR = '.page-main-category__item';
const today = new Date().getDay();

const initCategoryCurDay = (categoriesWithDayFilter) => {
  const $$category = selectorAll(CATEGORY_ITEM_SELECTOR);
  $$category.forEach(($category) => {
    const categoryName = $category.textContent;
    if (!categoriesWithDayFilter.includes(categoryName)) return;
    $category.dataset.curday = today;
  });
};

export default initCategoryCurDay;
