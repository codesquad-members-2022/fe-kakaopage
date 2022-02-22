import { $, convertStringToHTML } from './utils.js';
import { Nav, PageNav, DailySeriesRanking } from './components';
import { ContentsNavItems, MainNavItems, PageNavItems, PageComponent } from './data';
import { navCallback, mainBannerCallback, setContainerWidth } from './js';

const renderPageNav = () => {
  if ($('.page-nav') === null) $('.header-wrapper').insertAdjacentHTML('beforeend', PageNav());
  else $('.page-nav').innerHTML = Nav(PageNavItems);
};

const renderPage = (category = 'home') => {
  const page = PageComponent[category]();
  $('.main-contents-container').innerHTML = PageComponent[category]();
  if (category === 'webtoon') setContainerWidth('main', 'sub', 'event');
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

// const renderAll = () => {
//   document.body.addEventListener('click', navCallback);
//   $('.main-banner').addEventListener('click', mainBannerCallback);
// };

export { renderPageNav, renderPage, renderMainNav, renderContentsNav, renderDailySeriesRanking };