import { Main } from './category/Main.js';
import { Webtoon } from './category/Webtoon.js';
import { Novel } from './category/Novel.js';
import { render } from './render.js';
import { handleTabActive } from './handleStyle/activeTab.js';
import { getParams } from './utils.js';

// 나머지 카테고리는 반복이어서 생략
export const routes = [
  { categoryUid: 0, getContent: Main },
  { categoryUid: 1, getContent: Webtoon },
  { categoryUid: 2, getContent: Novel },
];

export function navigateTo(url, categoryUid, subCategoryUid) {
  history.pushState(null, null, url);
  render(categoryUid, subCategoryUid);
}

export function handleClickNavigation(event, dataAttr, isSub = false) {
  event.preventDefault();
  const { categoryUid, subCategoryUid } = getParams();
  if (event.target.matches(`[data-${dataAttr}]`)) {
    const {
      href,
      dataset: { category, subCategory },
    } = event.target;
    const targetLi = event.target.closest('li');
    handleTabActive(targetLi, isSub);
    navigateTo(href, category || categoryUid, subCategory || subCategoryUid);
  }
}
