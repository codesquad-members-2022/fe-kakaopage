import { renderTodayToons, moveDailySectionTab, renderGenreSections } from './grid.js';

const init = () => {
  renderTodayToons();
  renderGenreSections();
}

const app = () => {
  init();
  moveDailySectionTab();
}

app();
