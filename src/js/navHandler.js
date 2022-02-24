import { renderer } from './renderer.js';
import { loader } from './loader.js';
import { loaderMap } from './loaderMap.js';
import {
  DATA_WEBTOON,
  DATA_WEBNOVEL,
  DATA_MOVIE,
  DATA_BROADCAST,
  DATA_BOOK,
} from '../data/data.js';

const addHandlerOnNav = (nav) => {
  const navEl = document.querySelector(`.${nav}`);
  navEl.addEventListener('click', handleNav);
};

const handleNav = (event) => {
  const navtype = event.target.parentNode.dataset.navtype;
  const category = event.target.dataset.category;

  if (!category) return;

  if (isAlreadyClicked(event.target)) {
    window.scrollTo(0, 0);
    return;
  }

  if (navtype === 'gnb') loadContentFromGnb(category);
  if (navtype === 'snb') loadContentFromSnb(category);
};

const isAlreadyClicked = (eventTarget) => eventTarget.className.includes('--active');

const updateDocumentTitle = (title) => (document.title = `${title} | 카카오페이지`);

const updateNavStyle = (navtype, category) => {
  const classActive = `${navtype}__item--active`;
  const currentTab = document.querySelector(`.${classActive}`);
  const clickedTab = document.querySelector(`.${navtype}__item[data-category="${category}"]`);

  if (currentTab) currentTab.classList.remove(classActive);
  clickedTab.classList.add(classActive);
};

const loadContentFromGnb = (category) => {
  const mainEl = document.querySelector('.main');
  mainEl.innerHTML = '';

  updateDocumentTitle(category);
  updateNavStyle('gnb', category);

  if (category === '홈') {
    mainEl.innerHTML = `<p style="text-align:center;padding:100px 0;">홈 탭은 준비 중입니다.</p>`;
    return;
  }

  loadContent(category, '홈');
};

const loadContent = (globalCategory, subCategory) => {
  const DATA = getData(globalCategory);

  renderer.snb(DATA.category);
  renderer.categoryContentWrap();

  addHandlerOnNav('snb');
  loadContentFromSnb(subCategory);
};

const getData = (globalCategory) => {
  if (globalCategory === '웹툰') return DATA_WEBTOON;
  if (globalCategory === '웹소설') return DATA_WEBNOVEL;
  if (globalCategory === '영화') return DATA_MOVIE;
  if (globalCategory === '방송') return DATA_BROADCAST;
  if (globalCategory === '책') return DATA_BOOK;
};

const loadContentFromSnb = (subCategory) => {
  const categoryContentEl = document.querySelector('.category-content');
  categoryContentEl.innerHTML = '';

  updateNavStyle('snb', subCategory);

  const gnbLabel = document.querySelector('.gnb__item--active').dataset.category;

  const DATA = getData(gnbLabel)[subCategory];
  loaderMap[gnbLabel][subCategory](DATA);
};

export { addHandlerOnNav, loadContentFromGnb };
