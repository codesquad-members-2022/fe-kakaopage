import { ELEMENT_ID } from './constants/variable.js';
import { handleTabActive } from './handleStyle/activeTab.js';
import { render } from './render.js';
import { handleClickNavigation, navigateTo } from './router.js';
import { $get, getParams } from './utils.js';

const { MAIN_CATEGORY } = ELEMENT_ID;

function init() {
  const $nav = $get(MAIN_CATEGORY);

  const { categoryUid, subCategoryUid } = getParams();
  render(categoryUid, subCategoryUid);

  $nav.addEventListener('click', (event) =>
    handleClickNavigation(event, 'category')
  );
}

window.addEventListener('DOMContentLoaded', init);
