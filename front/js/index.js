import { ELEMENT_ID } from './constants/variable.js';
import { render } from './render.js';
import { handleClickNavigation } from './router.js';
import { $get } from './utils.js';

const { MAIN_CATEGORY } = ELEMENT_ID;

function init() {
  const $nav = $get(MAIN_CATEGORY);

  render();

  $nav.addEventListener('click', (event) =>
    handleClickNavigation(event, 'category')
  );
}

window.addEventListener('DOMContentLoaded', init);
