import { renderPage, renderPageNav } from './render.js';
import { navCallback } from './js';

const init = () => {
  renderPageNav();
  renderPage();
  document.body.addEventListener('click', navCallback);
};

init();