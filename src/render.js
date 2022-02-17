import { $ } from './utils.js';
import { Nav, MainContents } from './components';
import { ContentsNavItems, MainNavItems } from './data';
import { navCallback } from './js';

const renderMainNav = () => {
  $('.main-nav').innerHTML = Nav(MainNavItems);
};

const renderContentsNav = () => {
  $('.contents-nav').innerHTML = Nav(ContentsNavItems);
}

const renderAll = () => {
  $('.main-contents-container').insertAdjacentHTML('afterbegin', MainContents());
  $('.main-nav').addEventListener('click', navCallback);
  $('.contents-nav').addEventListener('click', navCallback);
};

export { renderMainNav, renderContentsNav, renderAll };