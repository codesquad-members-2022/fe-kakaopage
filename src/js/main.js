import { renderer } from './view.js';
import { addHandlerOnGnb, loadGnbTab } from './handler.js';

const init = () => {
  renderer.header();
  renderer.footer();
  renderer.gnb();
  addHandlerOnGnb();
  loadGnbTab('홈');
};

window.addEventListener('DOMContentLoaded', init);
