import { renderer } from './renderer.js';
import { loadMain } from './handler/navHandler.js';

const init = () => {
  renderer.header();
  renderer.footer();
  renderer.gnb();
  loadMain('웹툰', '홈');
};

window.addEventListener('DOMContentLoaded', init);
