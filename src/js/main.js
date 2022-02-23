import { renderer } from './renderer.js';
import { addHandlerOnNav, loadContentFromGnb } from './navHandler.js';

const init = () => {
  renderer.header();
  renderer.footer();
  renderer.gnb();
  addHandlerOnNav('gnb');
  loadContentFromGnb('웹툰');
};

window.addEventListener('DOMContentLoaded', init);
