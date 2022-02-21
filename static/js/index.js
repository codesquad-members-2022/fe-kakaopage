import { routes } from './router.js';
import { ERROR } from './constants/message.js';
import { ELEMENT_CLASS, ELEMENT_ID } from './constants/variable.js';
import { $get } from './utils.js';

const { NOT_FOUND } = ERROR;
const { MAIN_CATEGORY, MAIN_LAYOUT } = ELEMENT_ID;
const { MAIN_LAYOUT_CHILDREN } = ELEMENT_CLASS;

const navigateTo = (url, categoryUid) => {
  history.pushState(null, null, url);
  render(categoryUid);
};

async function preRender(uid) {
  const body = { uid };
  const data = await fetch('/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((response) => response.json());
  return data;
}

async function render(uid) {
  const categoryUid = Number(uid);
  const uidContent = await preRender(categoryUid);
  // preRender함수 작동확인
  console.log(uidContent);
  try {
    const selectedCategory = routes.find(
      (route) => route.categoryUid === categoryUid
    );
    if (!selectedCategory) {
      throw new Error(NOT_FOUND);
    }
    const contentObj = await selectedCategory.getContent();
    $mainChildLayout.forEach(($child) => {
      $child.innerHTML = contentObj[$child.id];
    });
  } catch (error) {
    console.log(error);
    if (error.message === NOT_FOUND) {
      history.pushState(null, null, '/');
      location.reload();
    }
  }
}

const $nav = $get(MAIN_CATEGORY);
const $mainLayout = $get(MAIN_LAYOUT);
const $mainChildLayout = $mainLayout.querySelectorAll(MAIN_LAYOUT_CHILDREN);

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
    navigateTo(href, category);
  }
});
