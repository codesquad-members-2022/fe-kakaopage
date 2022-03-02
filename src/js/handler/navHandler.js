import { select, initElement, updateDocumentTitle } from '../util.js';

import { renderer } from '../renderer.js';
import { loaderMap } from '../loaderMap.js';
import { dataMap } from '../../data/dataMap.js';

const addHandlerOnGnb = () => select(`.gnb__list`).addEventListener('click', handleNav);

const addHandlerOnSnb = () => select(`.snb__list`).addEventListener('click', handleNav);

const handleNav = (event) => {
  if (!event.target.dataset.category || isAlreadyClicked(event.target)) return;
  const nav = event.currentTarget.dataset.navtype;
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
  updateNavStyle('gnb', globalCategory);
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

const loadCategoryContent = (globalCategory, subCategory) => {
  initElement('.category-content');
  const data = getData(globalCategory);

  if (data.subCategory) {
    updateNavStyle('snb', subCategory);
    loaderMap[globalCategory][subCategory](data[subCategory]);
    updateDocumentTitle(`${subCategory} - ${globalCategory}`);
    return;
  }

  loaderMap[globalCategory]();
  updateDocumentTitle(globalCategory);
};

const getSubCategoryList = (globalCategory) => dataMap[globalCategory].subCategory;

const getSubCategoryData = (globalCategory, subCategory) => dataMap[globalCategory][subCategory];

const isAlreadyClicked = (eventTarget) => {
  if (eventTarget.dataset.active === 'on') {
    window.scrollTo(0, 0);
    return true;
  }
};

const getData = (globalCategory) => dataMap[globalCategory];

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
