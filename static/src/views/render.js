import { removeAndInsertHTML } from '../util/utility.js';
import { getHomePageTemplate } from './pages/home.js';
import { getWebtoonPageTemplate, addWebtoonPageEvent } from './pages/webtoon.js';
import { getWebFictionPageTemplate, addWebFictionPageEvent } from './pages/webFiction.js';
import { getMoviePageTemplate } from './pages/movie.js';
import { getTVPageTemplate } from './pages/tv.js';
import { getBookPageTemplate } from './pages/book.js';

export const renderPage = (pageName, currentPageData) => {
  const pageRendering = {
    홈: {
      template: getHomePageTemplate
    },
    웹툰: {
      template: getWebtoonPageTemplate,
      event: addWebtoonPageEvent
    },
    웹소설: {
      template: getWebFictionPageTemplate,
      event: addWebFictionPageEvent
    },
    영화: {
      template: getMoviePageTemplate
    },
    방송: {
      template: getTVPageTemplate
    },
    책: {
      template: getBookPageTemplate
    }
  };
  const pageTemplate = pageRendering[pageName].template(currentPageData);
  const pageEvent = pageRendering[pageName].event;
  removeAndInsertHTML('.contents', 'afterbegin', pageTemplate);
  pageEvent(currentPageData);
};
