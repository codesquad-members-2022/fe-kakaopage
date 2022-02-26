import { renderer } from './renderer.js';
import { loaderMap } from './loaderMap.js';
import { dataMap } from '../data/dataMap.js';

const addHandlerOnGnb = () =>
  select(`.gnb__list`).addEventListener('click', (event) => handleNav(event, 'gnb'));

const addHandlerOnSnb = () =>
  select(`.snb__list`).addEventListener('click', (event) => handleNav(event, 'snb'));

const handleNav = (event, nav) => {
  if (!event.target.dataset.category || isAlreadyClicked(event.target)) return;

  nav === 'gnb' && handleGnb(event);
  nav === 'snb' && handleSnb(event);
};

const handleGnb = (event) => {
  const globalCategory = event.target.dataset.category;
  const defaultSubCategory = '홈';

  loadMain(globalCategory, defaultSubCategory);
};

const handleSnb = (event) => {
  const globalCategory = getCurrentCategory('gnb');
  const subCategory = event.target.dataset.category;

  loadCategoryContent(globalCategory, subCategory);
};

const loadMain = (globalCategory, subCategory) => {
  updateNavStyle('gnb', globalCategory);
  initElement('.main');
  renderer.categoryContentWrap();

  const data = getData(globalCategory);

  if (data.subCategory) {
    loadSnb(globalCategory);
    loadCategoryContent(globalCategory, subCategory);
    return;
  }
  loadCategoryContent(globalCategory, subCategory);
};

const loadSnb = (globalCategory) => {
  const data = getData(globalCategory);
  renderer.snb(data.subCategory);
  addHandlerOnSnb();
};

const loadCategoryContent = (globalCategory, subCategory) => {
  initElement('.category-content');
  const data = getData(globalCategory);

  if (data.subCategory) {
    updateNavStyle('snb', subCategory);
    loaderMap[globalCategory][subCategory](data[subCategory]);
    updateDocumentTitle();
    return;
  }

  loaderMap[globalCategory]();
  updateDocumentTitle();
};

const select = (selector) => document.querySelector(selector);

const initElement = (selector) => (select(selector).innerHTML = '');

const isAlreadyClicked = (eventTarget) => eventTarget.dataset.active == 'on';

const getData = (globalCategory) => dataMap[globalCategory];

const getCurrentCategory = (nav) =>
  select(`.${nav}__item--active`) ? select(`.${nav}__item--active`).dataset.category : null;

const updateDocumentTitle = () => {
  const globalCategory = getCurrentCategory('gnb');
  const subCategory = getCurrentCategory('snb');
  const title = `${subCategory ? subCategory + ' - ' : ''}${globalCategory}`;
  document.title = `${title} | 카카오페이지`;
};

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
