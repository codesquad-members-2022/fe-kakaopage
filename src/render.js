import { $, convertStringToHTML } from './utils.js';
import { Nav, MainContents, DailySeriesRanking } from './components';
import { ContentsNavItems, MainNavItems } from './data';
import { navCallback, mainBannerCallback } from './js';

const renderMainNav = () => {
  $('.main-nav').innerHTML = Nav(MainNavItems);
};

const renderContentsNav = () => {
  $('.contents-nav').innerHTML = Nav(ContentsNavItems);
}

const renderDailySeriesRanking = () => {
  $('.daily-series-ranking').replaceWith(convertStringToHTML(DailySeriesRanking()));
  $('.contents-nav').addEventListener('click', navCallback);
}

const renderAll = () => {
  $('.main-contents-container').insertAdjacentHTML('afterbegin', MainContents());
  $('.main-nav').addEventListener('click', navCallback);
  $('.contents-nav').addEventListener('click', navCallback);
  $('.main-banner').addEventListener('click', mainBannerCallback)
};

export { renderMainNav, renderContentsNav, renderDailySeriesRanking, renderAll };