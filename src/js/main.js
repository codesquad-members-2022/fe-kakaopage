import { renderSet } from './view.js';
import { addHandlerOnGnb, loadGnbTab } from './handler.js';

const init = () => {
  renderSet.renderHeader();
  renderSet.renderFooter();
  renderSet.renderGnb();
  addHandlerOnGnb();
  loadGnbTab('홈');
};

init();
