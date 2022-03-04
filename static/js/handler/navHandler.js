import { renderer } from '../view/renderer.js';
import { categoryLoader } from '../view/categoryLoader.js';
import {
  select,
  initElement,
  removeElement,
  updateDocumentTitle,
  getCurrentCategory,
  getData,
} from '../utility/util.js';

const addHandlerOnGnb = () => select('.gnb__list').addEventListener('click', handleNav);

const addHandlerOnSnb = () => select('.snb__list').addEventListener('click', handleNav);

const handleNav = (event) => {
  if (!isCorrectTarget(event.target) || isAlreadyClicked(event.target)) return;

  const nav = event.currentTarget.dataset.navtype;
  const category = event.target.dataset.category;

  nav === 'gnb' && loadMain(category);
  nav === 'snb' && loadCategoryContent(getCurrentCategory('gnb'), category);
};

const loadMain = (globalCategory) => {
  select('.snb') && removeElement('.snb');
  updateNavStyle('gnb', globalCategory);

  getData('data', globalCategory)
    .then((response) => {
      const DATA = response;
      if (DATA.subCategory) renderer.snb(DATA.subCategory);
      loadCategoryContent(globalCategory, '홈', DATA.홈);
    })
    .catch((err) => {
      console.error(err);
      initElement('.category-content');
      renderer.noticeBox('콘텐츠를 불러오지 못했습니다. 탭을 다시 클릭해주세요.');
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

  getData('data', globalCategory)
    .then((response) => {
      const DATA = response[subCategory];
      categoryLoader[globalCategory][subCategory](DATA);
    })
    .catch((err) => {
      console.error(err);
      renderer.noticeBox('콘텐츠를 불러오지 못했습니다. 탭을 다시 클릭해주세요.');
    });
};

const isCorrectTarget = (eventTarget) => (eventTarget.dataset.category ? true : false);

const isAlreadyClicked = (eventTarget) => {
  if (eventTarget.dataset.active === 'on') {
    window.scrollTo(0, 0);
    return true;
  }
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
