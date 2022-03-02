import { CL } from './constants.js';

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

const changeTitle = targetId => {
  document.title = `${targetId} | kakaopage by Millie`;
};

const removeAlarm = target => {
  target.classList.remove('alarm');
};

export { $, $$, loadData, activateTab, changeTitle, removeAlarm };
