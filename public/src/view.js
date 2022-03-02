import { getHomePageTemplate } from './render/home.js';
import { getWebtoonPageTemplate } from './render/webtoon.js';
import { getWebFictionPageTemplate } from './render/webFiction.js';
import { getMoviePageTemplate } from './render/movie.js';
import { getTVPageTemplate } from './render/tv.js';
import { getBookPageTemplate } from './render/book.js';
import { getDayTopContentTemplate } from './components/dayTop.js';
import { getMainBannerTemplate } from './components/mainBanners.js';

const getPageTemplate = (INITIAL_PAGE, data, today) => {
    const pageTemplate = {
        "홈": () => getHomePageTemplate(data, today),
        "웹툰": () => getWebtoonPageTemplate(data, today),
        "웹소설": () => getWebFictionPageTemplate(data, today),
        "영화": () => getMoviePageTemplate(data),
        "방송": () => getTVPageTemplate(data),
        "책": () => getBookPageTemplate(data),
    };
    const currentPageTemplate = pageTemplate[INITIAL_PAGE]();

    return currentPageTemplate;
}

const getNewDayTopContentTemplate = (dayTopData, currentTabIdx) => getDayTopContentTemplate(dayTopData, currentTabIdx);

const getNewMainBannerTemplate = (data, className) => getMainBannerTemplate(data, className);

export { getPageTemplate, getNewDayTopContentTemplate, getNewMainBannerTemplate };