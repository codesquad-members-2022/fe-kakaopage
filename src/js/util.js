const WEBTOON_URL = 'http://localhost:3001/webtoon/';

const $ = (selector, base = document) => base.querySelector(selector);
const $$ = (selector, base = document) => base.querySelectorAll(selector);

const activateTab = target => {
  [...target.parentNode.children].forEach(child => {
    child.classList.toggle(CL.SELECTED, child === target);
  });
};

const loadData = async url => {
  const response = await fetch(url);
  const json = await response.json();
  const data = await json;
  return data;
};

const today = new Date()
  .toLocaleString('en-us', { weekday: 'short' })
  .toLowerCase();

const CL = {
  SELECTED: 'selected',
  WHOLE: 'whole',
  DAY_ITEM: '.day__item',
};

const TITLE = {
  promotion: '🔥HOT 최근 프로모션 진행작',
};

const VAL = {
  CLONENODE_COUNT: 2,
  TRANSITION_TIME: 0.25,
  SWICHING_TIME: 500,
  bannerWidth: 720,
  MAX_BANNER_COUNT: 7,
  MIN_BANNER_COUNT: 2,
};

function changeTitle(targetId) {
  document.title = `${targetId} | kakaopage by Millie`;
}

function removeAlarm(target) {
  target.classList.remove('alarm');
}

export {
  WEBTOON_URL,
  $,
  $$,
  today,
  CL,
  TITLE,
  VAL,
  loadData,
  activateTab,
  changeTitle,
  removeAlarm,
};
