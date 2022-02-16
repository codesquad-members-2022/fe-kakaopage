import { renderSet } from './view.js';
import { addHandlerOnGnb } from './handler.js';

const init = () => {
  renderSet.renderHeader();
  renderSet.renderFooter();
  renderSet.renderGnb();
  addHandlerOnGnb();
};

init();
