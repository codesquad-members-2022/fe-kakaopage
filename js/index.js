import { Main, NotFound, Novel, Webtoon } from './category.js';
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

const routes = [
  { categoryUid: 0, view: Main },
  { categoryUid: 1, view: Webtoon },
  { categoryUid: 2, view: Novel },
];

async function render(categoryUid) {
  try {
    const { view } = routes.find((route) => route.categoryUid === categoryUid);
    $mainLayout.innerHTML = await view();
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
