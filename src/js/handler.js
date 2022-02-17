import { renderSet } from './view.js';

const addHandlerOnGnb = () => {
  const gnbEl = document.querySelector('.gnb');
  gnbEl.addEventListener('click', HandleGnb);
};

const HandleGnb = (event) => {
  const tabName = event.target.dataset.category;
  if (!tabName) return;

  toggleTabStyle(event.target);
  loadTabContents(tabName);
};

const toggleTabStyle = (eventTarget) => {
  const currTab = document.querySelector('.gnb__item--active');
  if (currTab) currTab.classList.remove('gnb__item--active');

  const newTab = eventTarget;
  newTab.classList.add('gnb__item--active');
};

const loadTabContents = (tabName) => {
  if (!(tabName === 'webtoon')) {
    const main = document.querySelector('.main');
    main.innerHTML = `${tabName} 탭은 준비 중입니다. 웹툰을 이용해주세요.`;
    return;
  }

  loadWebToonTab();
};

const loadWebToonTab = () => {
  renderSet.renderPromotionBanner(['promo_toon_1.png', 'promo_toon_2.png']);
};

export { addHandlerOnGnb };
