import { $, convertStringToHTML } from './utils.js';
import { Nav, PageNav, MainContents, DailySeriesRanking } from './components';
import { ContentsNavItems, MainNavItems, PageNavItems } from './data';
import { navCallback, mainBannerCallback } from './js';

const renderPageNav = () => {
  if ($('.page-nav') === null) $('.header-wrapper').insertAdjacentHTML('beforeend', PageNav());
  else $('.page-nav').innerHTML = Nav(PageNavItems);
};

const renderMainNav = () => {
  $('.main-nav').innerHTML = Nav(MainNavItems);
};

const renderContentsNav = () => {
  $('.contents-nav').innerHTML = Nav(ContentsNavItems);
};

const renderDailySeriesRanking = () => {
  $('.daily-series-ranking').replaceWith(convertStringToHTML(DailySeriesRanking()));
};

const renderAll = () => {
  $('.main-contents-container').insertAdjacentHTML('afterbegin', MainContents());
  document.body.addEventListener('click', navCallback)
  $('.main-banner').addEventListener('click', mainBannerCallback);
};

export { renderPageNav, renderMainNav, renderContentsNav, renderDailySeriesRanking, renderAll };