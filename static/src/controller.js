import { getPageData } from './data/pageDataFinder.js';
import { $, activateButton } from './util/utility.js';
import { renderPage } from './views/render.js';

const addGnbEvent = currentPageData => {
  $('.gnb').addEventListener('click', ({ target }) => {
    const targetIdx = target.dataset.target;
    activateButton('gnb__link--active', target);
    renderPage(targetIdx, currentPageData);
  });
};

export const runPageRendering = gnbTarget => {
  const dataUrl = getPageData(gnbTarget);
  fetch(dataUrl, { mode: 'cors' })
    .then(response => response.json())
    .then(currentPageData => {
      renderPage(gnbTarget, currentPageData);
      addGnbEvent(currentPageData);
    })
    .catch(error => console.log(error));
};
