import { renderer } from './renderer.js';
import { loadContentFromGnb, addHandlerOnNav } from './handler.js';

const init = () => {
  renderer.header();
  renderer.footer();
  renderer.gnb();
  addHandlerOnNav('gnb');
  loadContentFromGnb('홈');
};

window.addEventListener('DOMContentLoaded', init);
