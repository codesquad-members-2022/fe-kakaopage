import { CL, today } from './constants.js';

const $ = (selector, base = document) => base.querySelector(selector);
const $$ = (selector, base = document) => base.querySelectorAll(selector);

const activateTab = target => {
  [...target.parentNode.children].forEach(child => {
    child.classList.toggle(CL.SELECTED, child === target);
  });
};

const loadData = async (url, path = '') => {
  const response = await fetch(`${url}${path}`);
  return response.json();
};

const getAllData = urls => {
  const requests = Object.values(urls).map(url =>
    fetch(url).then(responses => responses.json())
  );
  return Promise.all(requests);
};

const changeTitle = targetId => {
  document.title = `${targetId} | kakaopage by Millie`;
};

const removeAlarm = target => {
  target.classList.remove('alarm');
};

const displayTodayTab = () => {
  const $dayList = $('.day__list');
  [...$dayList.children].forEach(day => {
    if (day.id === today) {
      day.classList.add(CL.SELECTED);
      return;
    }
  });
};

const setDefaultCategory = ({ cateName }) => {
  const defaultCategory = $(`[data-category="${cateName}"]`);
  defaultCategory.classList.add(CL.SELECTED);
};

export {
  $,
  $$,
  loadData,
  activateTab,
  changeTitle,
  removeAlarm,
  displayTodayTab,
  getAllData,
  setDefaultCategory,
};
