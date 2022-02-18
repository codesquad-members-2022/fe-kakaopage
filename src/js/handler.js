import { renderSet } from './view.js';
import { webtoonData } from '../data/data.js';

/* Gnb 관련 */
const addHandlerOnGnb = () => {
  const gnbEl = document.querySelector('.gnb');
  gnbEl.addEventListener('click', HandleGnb);
};

const HandleGnb = (event) => {
  const tabName = event.target.dataset.category;
  if (!tabName) return;

  loadGnbTab(tabName);
};

const loadGnbTab = (tabName) => {
  toggleGnbTabStyle(tabName);
  loadGnbTabContents(tabName);
};

const toggleGnbTabStyle = (tabName) => {
  const currTab = document.querySelector('.gnb__item--active');
  if (currTab) currTab.classList.remove('gnb__item--active');

  const newTab = document.querySelector(`.gnb__item[data-category="${tabName}"]`);
  newTab.classList.add('gnb__item--active');
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
  renderSet.renderSnb(webtoonData.category);
  renderSet.renderCategoryContentWrap();
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
  renderSet.renderMainBanner(categoryData.mainBanner);

  if (!(category === '0')) {
    categoryContentEl.innerHTML = `
    <div style="text-align:center;padding:80px 0;font-size:1.25rem">준비 중입니다.</div>`;
    return;
  }

  renderSet.renderGridMenu(categoryData.gridMenu);
  renderSet.renderPromotionBanner(categoryData.promotionBanner);
  renderSet.renderSectionBasic('기대신작 TOP');
  renderSet.renderSectionBasic('로맨스 TOP');
  renderSet.renderSectionBasic('로판 TOP');
  renderSet.renderSectionBasic('드라마 TOP');
  renderSet.renderSectionBasic('BL TOP');
  renderSet.renderSectionBasic('소년 TOP');
  renderSet.renderSectionBasic('액션무협 TOP');
  renderSet.renderSectionBasic('일간 랭킹 TOP');
  renderSet.renderSectionBasic('추천 이벤트 TOP');
};

export { addHandlerOnGnb, loadGnbTab };
