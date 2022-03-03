import { renderer } from '../view/renderer.js';
import { categoryLoader } from '../view/categoryLoader.js';
import { select, initElement, updateDocumentTitle, getData } from '../utility/util.js';

const addHandlerOnGnb = () => select('.gnb__list').addEventListener('click', handleNav);

const addHandlerOnSnb = () => select('.snb__list').addEventListener('click', handleNav);

const handleNav = (event) => {
  if (!isCorrectTarget(event.target) || isAlreadyClicked(event.target)) return;

  const nav = event.currentTarget.dataset.navtype;
  const category = event.target.dataset.category;

  updateNavStyle(nav, category);

  nav === 'gnb' && loadMain(category);
  nav === 'snb' && loadCategoryContent(getCurrentCategory('gnb'), category);
};

const loadMain = (globalCategory) => {
  select('.snb') && removeElement('.snb');

  getData('data', globalCategory).then((response) => {
    const DATA = response;
    if (DATA.subCategory) renderer.snb(DATA.subCategory);

    loadCategoryContent(globalCategory, '홈', DATA.홈);
  });
};

const loadCategoryContent = (globalCategory, subCategory, DATA = null) => {
  initElement('.category-content');
  select('.snb') && updateNavStyle('snb', subCategory);
  updateDocumentTitle();

  if (DATA) {
    categoryLoader[globalCategory][subCategory](DATA);
    return;
  }

  getData('data', globalCategory).then((response) => {
    const DATA = response[subCategory];
    categoryLoader[globalCategory][subCategory](DATA);
  });
};

const isCorrectTarget = (eventTarget) => (eventTarget.dataset.category ? true : false);

const isAlreadyClicked = (eventTarget) => {
  if (eventTarget.dataset.active === 'on') {
    window.scrollTo(0, 0);
    return true;
  }
};

const getCurrentCategory = (nav) => {
  const currentEl = select(`.${nav}__item--active`);
  return currentEl ? currentEl.dataset.category : null;
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
