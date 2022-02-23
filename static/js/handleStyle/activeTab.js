import { ELEMENT_ID } from '../constants/variable.js';

const { MAIN_CATEGORY, SUB_CATEGORY } = ELEMENT_ID;

function paintTab($ul, targetId, isSub) {
  const dateAttr = isSub ? 'subcategory' : 'category';
  const activeClass = isSub ? 'sub-category-active' : 'category-active';
  const $targetTab = $ul.querySelector(`[data-${dateAttr}='${targetId}']`);
  const $targetLi = $targetTab.closest('li');
  const $liElements = $targetTab.closest('ul').querySelectorAll('li');
  $liElements.forEach((li) => li.classList.remove(activeClass));
  $targetLi.classList.add(activeClass);
}

export function handleTabActive({ categoryUid, subCategoryUid }) {
  const $mainCategory = document
    .getElementById(MAIN_CATEGORY)
    .querySelector('ul');
  const $subCateogry = document
    .getElementById(SUB_CATEGORY)
    .querySelector('ul');

  paintTab($mainCategory, categoryUid, false);
  paintTab($subCateogry, subCategoryUid, true);
  return true;
}
