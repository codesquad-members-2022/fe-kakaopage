import { initDailySection, initGenreSections, initFooter } from './sections/index.js';

const init = () => {
  initDailySection();
  initGenreSections();
  initFooter();
}

const app = () => {
  init();
}

app();
