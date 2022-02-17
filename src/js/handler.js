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
  const main = document.querySelector('.main');
  main.innerHTML = '';
  document.title = `${tabName} | 카카오페이지`;

  if (!(tabName === '웹툰')) {
    main.innerHTML = `${tabName} 탭은 준비 중입니다. 웹툰을 이용해주세요.`;
    return;
  }
  loadWebToonTab();
};

const loadWebToonTab = () => {
  renderSet.renderSnb([
    '홈',
    '요일연재',
    '웹툰',
    '소년',
    '드라마',
    '로맨스',
    '로판',
    '액션무협',
    'BL',
  ]);
  renderSet.renderMainBanner([
    {
      title: '도사강호',
      caption: '시각이 다르면 무공도 다르다',
      tag: 'up',
      type: '웹툰',
      view: '30.5',
      path: 'static/thumb/main_toon_1.png',
    },
    {
      title: '내가 죽였다',
      caption: '누가 아군이고, 누가 적인가',
      tag: 'event',
      type: '웹툰',
      view: '20.4',
      path: 'static/thumb/main_toon_2.png',
    },
  ]);

  renderSet.renderGridMenu([
    ['오늘 UP', '195'],
    ['오늘 신작', '3'],
    ['오리지널', '2,335'],
    ['완결까지 정주행'],
    ['독립운동가 웹툰'],
    ['오늘 랭킹', '1위'],
  ]);

  renderSet.renderPromotionBanner(['promo_toon_1.png', 'promo_toon_2.png']);
};

export { addHandlerOnGnb };
