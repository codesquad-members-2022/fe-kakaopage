import Main from './category/Main.js';
import Webtoon from './category/Webtoon.js';
import Novel from './category/Novel.js';
import { render } from './render.js';
import { handleTabActive } from './handleStyle/activeTab.js';

// 나머지 카테고리는 반복이어서 생략
export const routes = [
  { categoryUid: 0, Category: Main },
  { categoryUid: 1, Category: Webtoon },
  { categoryUid: 2, Category: Novel },
];

export function navigateTo(url) {
  history.pushState(null, null, url);
  render();
}

export function handleClickNavigation(event, dataAttr, isSub = false) {
  event.preventDefault();
  if (event.target.matches(`[data-${dataAttr}]`)) {
    const { href } = event.target;
    // const targetLi = event.target.closest('li');
    // handleTabActive(targetLi, isSub);
    navigateTo(href);
  }
}
