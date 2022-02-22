import { $, convertStringToHTML } from './utils.js';
import { Nav, PageNav, DailySeriesRanking } from './components';
import { PageNavItems, PageComponent, ContentsComponent } from './data';
import { setContainerWidth } from './js';

const renderPageNav = () => {
  if ($('.page-nav') === null) $('.header-wrapper').insertAdjacentHTML('beforeend', PageNav());
  else $('.page-nav').innerHTML = Nav(PageNavItems);
};

const renderPage = (category = 'home') => {
  $('.main-contents-container').innerHTML = PageComponent[category]();
  if (category === 'webtoon') setContainerWidth('main', 'sub', 'event');
};

const renderContents = (category) => {
  $('.main-contents-container').innerHTML = ContentsComponent[category]();
};

const renderDailySeriesRanking = () => {
  $('.daily-series-ranking').replaceWith(convertStringToHTML(DailySeriesRanking()));
};

// const renderAll = () => {
//   document.body.addEventListener('click', navCallback);
//   $('.main-banner').addEventListener('click', mainBannerCallback);
// };

export { renderPageNav, renderPage, renderDailySeriesRanking, renderContents };