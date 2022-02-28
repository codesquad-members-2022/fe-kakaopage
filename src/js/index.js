import { renderTodayToons, moveDailySectionTab, renderGenreSections } from './grid.js';
import { toggleCompanyInfo } from './footer.js';

const init = () => {
  renderTodayToons();
  renderGenreSections();
}

const app = () => {
  init();
  moveDailySectionTab();
  toggleCompanyInfo();
}

app();
