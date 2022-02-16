import { renderSet } from './view.js';

import { header } from './components/header.js';
import { footer } from './components/footer.js';
import { globalNavigation } from './components/globalNavigation.js';
import { addTabHandlerOnGnb } from './handler.js';

const init = () => {
  renderSet.renderHeader(header());
  renderSet.renderFooter(footer());
  renderSet.renderGlobalNavigation(globalNavigation());
  addTabHandlerOnGnb();
};

init();
