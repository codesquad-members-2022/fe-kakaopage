import { renderer } from './renderer.js';
import { addHandlerOnGnb, loadMain } from './handler.js';

const init = () => {
  renderer.header();
  renderer.footer();
  renderer.gnb();
  addHandlerOnGnb();
  loadMain('웹툰', '홈');
};

window.addEventListener('DOMContentLoaded', init);
