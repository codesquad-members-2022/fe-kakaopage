import { Main, NotFound, Novel, Webtoon } from './category.js';
import { $get } from './utils.js';
import { ERR_MSG } from './constant.js';

const { NOT_FOUND } = ERR_MSG;

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
      // history.pushState(null, null, '/');
      location.reload();
    }
  }
}

const $nav = $get('main__nav');
const $mainLayout = $get('main-layout');

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
