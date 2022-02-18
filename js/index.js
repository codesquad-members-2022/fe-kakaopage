import { routes } from './constants/router.js';
import { ERROR } from './constants/message.js';
import { ELEMENT_CLASS, ELEMENT_ID } from './constants/variable.js';
import { $get } from './utils.js';

const { NOT_FOUND } = ERROR;
const { MAIN_CATEGORY, MAIN_LAYOUT } = ELEMENT_ID;
const { MAIN_LAYOUT_CHILDREN } = ELEMENT_CLASS;

const navigateTo = (url, categoryUid) => {
  history.pushState(null, null, url);
  render(Number(categoryUid));
};

async function render(categoryUid) {
  try {
    const match = routes.find((route) => route.categoryUid === categoryUid);
    if (!match) {
      throw new Error(NOT_FOUND);
    }
    const contentObj = await match.getContent();
    $mainChildLayout.forEach(($child) => {
      $child.innerHTML = contentObj[$child.id];
    });
  } catch (error) {
    if (error.message === NOT_FOUND) {
      history.pushState(null, null, '/');
      location.reload();
    }
  }
}

const $nav = $get(MAIN_CATEGORY);
const $mainLayout = $get(MAIN_LAYOUT);
const $mainChildLayout = $mainLayout.querySelectorAll(MAIN_LAYOUT_CHILDREN);

$nav.addEventListener('click', (event) => {
  event.preventDefault();
  const {
    href,
    dataset: { category },
  } = event.target;
  if (event.target.matches(`[data-category]`)) {
    navigateTo(href, category);
  }
});
