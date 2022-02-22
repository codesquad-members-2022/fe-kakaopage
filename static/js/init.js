import { ELEMENT_ID } from './constants/variable.js';
import { handleTabActive } from './handleStyle/activeTab.js';
import { render } from './render.js';
import { navigateTo } from './router.js';
import { $get, getParams } from './utils.js';

const { MAIN_CATEGORY } = ELEMENT_ID;

function init() {
  const $nav = $get(MAIN_CATEGORY);

  const { categoryUid, subCategoryUid } = getParams();
  render(categoryUid, subCategoryUid);

  $nav.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.matches(`[data-category]`)) {
      const {
        href,
        dataset: { category, subCategory },
      } = event.target;
      const targetLi = event.target.closest('li');
      handleTabActive(targetLi);
      navigateTo(href, category, subCategory);
    }
  });
}

window.addEventListener('DOMContentLoaded', init);
