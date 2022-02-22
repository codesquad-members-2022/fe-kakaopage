import { renderer } from './view.js';
import { loadContent, addHandlerOnNav } from './handler.js';

const init = () => {
  renderer.header();
  renderer.footer();
  renderer.gnb();
  addHandlerOnNav('gnb');
  loadContent('gnb', '홈');
};

window.addEventListener('DOMContentLoaded', init);
