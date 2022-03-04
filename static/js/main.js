import { renderer } from './view/renderer.js';
import { loadMain } from './handler/navHandler.js';

const init = () => {
  renderer.header();
  renderer.footer();
  renderer.gnb();

  loadMain('웹툰', '홈'); // GlobalCategory: 웹툰 , SubCategory: 홈
};

window.addEventListener('DOMContentLoaded', init);
