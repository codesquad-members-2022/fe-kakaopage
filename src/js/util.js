export const $ = selector => document.querySelector(selector);

export const activateTab = ({ target }, parentNode) => {
  if (target.parentNode.tagName === 'LI') target = target.parentNode;
  [...parentNode.children].forEach(child => {
    child.classList.toggle(CL.SELECTED, child === target);
  });
};

export const loadData = async param => {
  const response = await fetch(DATA_URL);
  const json = await response.json();
  const data = await json[param];
  return data;
};

export const getToday = () => {
  return new Date().toLocaleString('en-us', { weekday: 'short' }).toLowerCase();
};

export const DATA_URL = 'data/data.json';

export const CL = {
  SELECTED: 'selected',
  WHOLE: 'whole',
  DAY_NAME: '.day__item',
};

export const TITLE = {
  promotion: '🔥HOT 최근 프로모션 진행작',
};
