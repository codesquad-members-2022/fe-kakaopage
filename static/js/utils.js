import { ELEMENT_ID } from './constants/variable.js';

const { SUB_CATEGORY, CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT } =
  ELEMENT_ID;

export function $get(id) {
  return document.getElementById(id);
}

export function getParams() {
  const urlParams = window.location.search;
  const params = new URLSearchParams(urlParams);
  const categoryUid = Number(params.get('categoryUid'));
  const subCategoryUid = Number(params.get('subCategoryUid'));
  return { categoryUid, subCategoryUid };
}
