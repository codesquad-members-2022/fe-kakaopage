import { select, initElement, updateDocumentTitle } from '../utility/util.js';

import { renderer } from '../view/renderer.js';
import { categoryLoader } from '../view/categoryLoader.js';
import { dataMap } from '../../data/dataMap.js';

const addHandlerOnGnb = () => select(`.gnb__list`).addEventListener('click', handleNav);

const addHandlerOnSnb = () => select(`.snb__list`).addEventListener('click', handleNav);

const handleNav = (event) => {
  if (!event.target.dataset.category || isAlreadyClicked(event.target)) return;

  const nav = event.currentTarget.dataset.navtype;
  const category = event.target.dataset.category;

  updateNavStyle(nav, category);

  nav === 'gnb' && handleGnb(event);
  nav === 'snb' && handleSnb(event);
};

const handleGnb = (event) => {
  const globalCategory = event.target.dataset.category;

  loadMain(globalCategory);
};

const handleSnb = (event) => {
  const globalCategory = getCurrentCategory('gnb');
  const subCategory = event.target.dataset.category;

  loadCategoryContent(globalCategory, subCategory);
};

const loadMain = (globalCategory) => {
  initElement('.main');
  renderer.categoryContentWrap();

  const subCategoryList = getSubCategoryList(globalCategory);

  if (!subCategoryList) {
    loadCategoryContent(globalCategory);
    return;
  }
  renderer.snb(subCategoryList);
  loadCategoryContent(globalCategory, '홈');
};

const loadCategoryContent = (globalCategory, subCategory = null) => {
  initElement('.category-content');

  if (!subCategory) {
    updateDocumentTitle(globalCategory);
    categoryLoader[globalCategory]();
    return;
  }

  const subCategoryData = getSubCategoryData(globalCategory, subCategory);

  updateDocumentTitle(`${subCategory} - ${globalCategory}`);
  categoryLoader[globalCategory][subCategory](subCategoryData);
};

const getSubCategoryList = (globalCategory) => dataMap[globalCategory].subCategory;

const getSubCategoryData = (globalCategory, subCategory) => dataMap[globalCategory][subCategory];

const isAlreadyClicked = (eventTarget) => {
  if (eventTarget.dataset.active === 'on') {
    window.scrollTo(0, 0);
    return true;
  }
};

const getCurrentCategory = (nav) =>
  select(`.${nav}__item--active`) ? select(`.${nav}__item--active`).dataset.category : null;

const updateNavStyle = (navtype, category) => {
  const classNameForActive = `${navtype}__item--active`;
  const currentTab = select(`.${classNameForActive}`);
  const clickedTab = select(`.${navtype}__item[data-category="${category}"]`);

  if (currentTab) {
    currentTab.dataset.active = 'off';
    currentTab.classList.remove(classNameForActive);
  }
  clickedTab.classList.add(classNameForActive);
  clickedTab.dataset.active = 'on';
};

export { addHandlerOnGnb, addHandlerOnSnb, loadMain };
