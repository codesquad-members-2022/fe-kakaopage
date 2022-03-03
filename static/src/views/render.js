import { getHomePageTemplate } from './home.js';
import { getWebtoonPageTemplate } from './webtoon.js';
import { getWebFictionPageTemplate } from './webFiction.js';
import { getMoviePageTemplate } from './movie.js';
import { getTVPageTemplate } from './pages/tv.js';
import { getBookPageTemplate } from './pages/book.js';
import { getDayTopContentTemplate } from './components/dayTop.js';
import { getMainBannerTemplate } from './components/mainBanners.js';

export const getPageTemplate = (pageName, data, today) => {
  const pageTemplate = {
    홈: getHomePageTemplate(data, today),
    웹툰: getWebtoonPageTemplate(data, today),
    웹소설: getWebFictionPageTemplate(data, today),
    영화: getMoviePageTemplate(data),
    방송: getTVPageTemplate(data),
    책: getBookPageTemplate(data)
  };
  const currentPageTemplate = pageTemplate[pageName];

  return currentPageTemplate;
};

export const getToday = () => {
  const date = new Date();
  let today = date.getDay() - 1;
  if (today === -1) today = 6;
  return today;
};

export const getNewDayTopContentTemplate = (dayTopData, currentTabIdx) =>
  getDayTopContentTemplate(dayTopData, currentTabIdx);

export const getNewMainBannerTemplate = (data, className) => getMainBannerTemplate(data, className);
