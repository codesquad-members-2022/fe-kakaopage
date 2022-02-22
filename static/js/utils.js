import { ELEMENT_ID } from './constants/variable.js';

const { SUB_CATEGORY, CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT } =
  ELEMENT_ID;

export function $get(id) {
  return document.getElementById(id);
}

export function getParams() {
  const urlParams = window.location.search;
  const params = new URLSearchParams(urlParams);
  const categoryUid = params.get('categoryUid');
  const subCategoryUid = params.get('subCategoryUid');
  return { categoryUid, subCategoryUid };
}

// 레이아웃은 그대로 두고 안에 내용만 article별로 변경
export function renderMainChildDOM({
  subCategory,
  carousel,
  eventBox,
  evenCarouel,
  mainContent,
}) {
  const returnObj = {};
  returnObj[SUB_CATEGORY] = subCategory;
  returnObj[CAROUSEL] = carousel;
  returnObj[EVENT_BOX] = eventBox;
  returnObj[EVENT_CAROUSEL] = evenCarouel;
  returnObj[MAIN_CONTENT] = mainContent;
  return returnObj;
}
