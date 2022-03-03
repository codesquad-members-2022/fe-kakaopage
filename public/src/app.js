import { renderPage, startMainBanerTimer, addEvent } from './controller.js';

const init = () => {
  const INITIAL_PAGE = '웹툰';
  renderPage(INITIAL_PAGE).then(currentPageData => {
    startMainBanerTimer(currentPageData['mainBanner']);
    addEvent(currentPageData);
  });
};

init();
