import { ELEMENT_ID } from './constants/variable.js';
import { handleTabActive } from './handleStyle/activeTab.js';
import { render } from './render.js';
import { navigateTo } from './router.js';
import { $get } from './utils.js';

const { MAIN_CATEGORY } = ELEMENT_ID;

function init() {
  const $nav = $get(MAIN_CATEGORY);

  const urlParams = window.location.search;
  const params = new URLSearchParams(urlParams);
  let targetCategoryUid = params.get('categoryUid');
  if (targetCategoryUid) {
    targetCategoryUid = 0;
  }
  render(targetCategoryUid);

  $nav.addEventListener('click', (event) => {
    event.preventDefault();
    const {
      href,
      dataset: { category },
    } = event.target;
    if (event.target.matches(`[data-category]`)) {
      const targetLi = event.target.closest('li');
      handleTabActive(targetLi);
      navigateTo(href, category);
    }
  });
}

window.addEventListener('DOMContentLoaded', init);
