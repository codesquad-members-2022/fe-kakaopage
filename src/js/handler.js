import { renderer } from './view.js';
import { webtoonData } from '../data/data.js';

const addHandlerOnNav = (nav) => {
  const navEl = document.querySelector(`.${nav}`);
  navEl.addEventListener('click', handleNav);
};

const handleNav = (event) => {
  const navtype = event.target.parentNode.dataset.navtype;
  const category = event.target.dataset.category;

  if (!navtype || !category) return;

  if (isAlreadyClicked(event.target)) {
    window.scrollTo(0, 0);
    return;
  }

  loadContent(navtype, category);
};

const isAlreadyClicked = (eventTarget) => eventTarget.className.includes('--active');

const changeNavStyle = (navtype, category) => {
  const classActive = `${navtype}__item--active`;
  const currTab = document.querySelector(`.${classActive}`);
  if (currTab) currTab.classList.remove(classActive);

  const newTab = document.querySelector(`.${navtype}__item[data-category="${category}"]`);
  newTab.classList.add(classActive);
};

const loadContent = (navtype, category) => {
  changeNavStyle(navtype, category);
  loadGnbTabContents(category);
};

const loadGnbTabContents = (tabName) => {
  const mainEl = document.querySelector('.main');
  mainEl.innerHTML = '';
  document.title = `${tabName} | 카카오페이지`;

  if (!(tabName === '웹툰')) {
    mainEl.innerHTML = `
    <div style="text-align:center;padding:80px 0;font-size:1.25rem">
      ${tabName} 탭은 준비 중입니다. <strong>웹툰</strong> 탭을 이용해주세요.
    </div>
    `;
    return;
  }

  loadWebToon('0');
};

const loadWebToon = (category) => {
  renderer.snb(webtoonData.category);
  renderer.categoryContentWrap();
  addHandlerOnSnb();
  toggleSnbTabStyle(category);
  loadSnbTabContents(category);
};

/* Snb 관련 */
const addHandlerOnSnb = () => {
  const snbEl = document.querySelector('.snb');
  snbEl.addEventListener('click', HandleSnb);
};

const HandleSnb = (event) => {
  const category = event.target.dataset.subcategory;
  if (!category) return;

  const currCategory = document.querySelector('.snb__item--active').dataset.subcategory;
  if (currCategory === category) return;

  toggleSnbTabStyle(category);
  loadSnbTabContents(category);
};

const toggleSnbTabStyle = (category) => {
  const currTab = document.querySelector('.snb__item--active');
  if (currTab) currTab.classList.remove('snb__item--active');

  const newTab = document.querySelector(`.snb__item[data-subcategory="${category}"]`);
  newTab.classList.add('snb__item--active');
};

const loadSnbTabContents = (category) => {
  const categoryContentEl = document.querySelector('.category-content');
  categoryContentEl.innerHTML = '';

  const categoryData = webtoonData[category];
  renderer.mainBanner(categoryData.mainBanner);

  switch (category) {
    case '0':
      loadWebtoonHome(categoryData);
      break;
    case '1':
      loadWebtoonDailySeries(categoryData);
      break;
    case '2':
      loadWebtoonBoy(categoryData);
      break;
    case '3':
      loadWebtoonDrama(categoryData);
      break;
    case '4':
      loadWebtoonRomance(categoryData);
      break;
    case '5':
      loadWebtoonRomanceFantasy(categoryData);
      break;
    case '6':
      loadWebtoonAction(categoryData);
      break;
    case '7':
      loadWebtoonBl(categoryData);
      break;
  }
};

const loadWebtoonHome = (categoryData) => {
  renderer.gridMenu(categoryData.gridMenu);
  renderer.promotionBanner(categoryData.promotionBanner);
  renderer.sectionBasic('기대신작 TOP');
  renderer.sectionBasic('로맨스 TOP');
  renderer.sectionBasic('로판 TOP');
  renderer.sectionBasic('드라마 TOP');
  renderer.sectionBasic('BL TOP');
  renderer.sectionBasic('소년 TOP');
  renderer.sectionBasic('액션무협 TOP');
  renderer.sectionBasic('일간 랭킹 TOP');
  renderer.sectionBasic('추천 이벤트 TOP');
};

const loadWebtoonDailySeries = (categoryData) => {};

const loadWebtoonBoy = (categoryData) => {
  renderer.gridMenu(categoryData.gridMenu);
};

const loadWebtoonDrama = (categoryData) => {
  renderer.gridMenu(categoryData.gridMenu);
};

const loadWebtoonRomance = (categoryData) => {
  renderer.gridMenu(categoryData.gridMenu);
};

const loadWebtoonRomanceFantasy = (categoryData) => {
  renderer.gridMenu(categoryData.gridMenu);
};

const loadWebtoonAction = (categoryData) => {
  renderer.gridMenu(categoryData.gridMenu);
};

const loadWebtoonBl = (categoryData) => {
  renderer.gridMenu(categoryData.gridMenu);
};

export { addHandlerOnNav, loadContent };
