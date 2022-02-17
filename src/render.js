import { $ } from './utils.js';
import { Nav, MainContents } from './components';
import { MainNavItems } from './data';
import { navCallback } from './js';

const renderMainNav = () => {
  $('.main-nav').innerHTML = Nav(MainNavItems);
};

const renderAll = () => {
  $('.main-contents-container').insertAdjacentHTML('afterbegin', MainContents());
  $('.main-nav').addEventListener('click', navCallback);
};

renderAll();

export { renderMainNav, renderAll };