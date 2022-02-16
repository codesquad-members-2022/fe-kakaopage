import { renderSet } from './view.js';

import { createHeader } from './components/header.js';
import { createFooter } from './components/footer.js';
import { createGnb } from './components/gnb.js';

import { addTabHandlerOnGnb } from './handler.js';

const init = () => {
  renderSet.renderHeader(createHeader());
  renderSet.renderFooter(createFooter());
  renderSet.renderGlobalNavigation(createGnb());
  addTabHandlerOnGnb();
};

init();
