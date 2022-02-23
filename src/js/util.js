const DATA_URL = 'data/data.json';

const $ = selector => document.querySelector(selector);
const $$ = selector => document.querySelectorAll(selector);

const activateTab = target => {
  [...target.parentNode.children].forEach(child => {
    child.classList.toggle(CL.SELECTED, child === target);
  });
};

const loadData = async param => {
  const response = await fetch(DATA_URL);
  const json = await response.json();
  const data = await json[param];
  return data;
};

let data = null;
loadData('webtoon')
  .then(d => (data = d))
  .catch(console.log);

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

export { DATA_URL, $, $$, activateTab, data, today, CL, TITLE };
