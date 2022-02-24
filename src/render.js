import { $ } from './utils.js';
import { Nav, PageNav, DailySeriesRanking } from './components';
import { PageNavItems, PageComponent, ContentsComponent } from './data';

const renderPageNav = () => {
  if ($('.page-nav') === null) $('.header-wrapper').insertAdjacentHTML('beforeend', PageNav());
  else $('.page-nav').innerHTML = Nav(PageNavItems);
};

const renderPage = (category = 'home') => {
  if ($('.main-contents') === null) $('.main-contents-container').appendChild(PageComponent[category]());
  else $('.main-contents').replaceWith(PageComponent[category]());
};

const renderContents = (category) => {
  $('.main-contents').replaceWith(ContentsComponent[category]());
};

const renderDailySeriesRanking = () => {
  $('.daily-series-ranking').replaceWith(DailySeriesRanking());
};

export { renderPageNav, renderPage, renderDailySeriesRanking, renderContents };