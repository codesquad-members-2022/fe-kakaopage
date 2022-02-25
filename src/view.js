import { getHomePageTemp } from './render/home.js';
import { getWebtoonPageTemp } from './render/webtoon.js';
import { getWebFictionPageTemp } from './render/webFiction.js';
import { getMoviePageTemp } from './render/movie.js';
import { getTVPageTemp } from './render/tv.js';
import { getBookPageTemp } from './render/book.js';
import { getDayTopContent } from './components/dayTop.js';
import { getMainBannerTemp } from './components/mainBanners.js';

const getPageTemp = (INITIAL_PAGE, data, today) => {
    const pageTemp = {
        "홈": () => getHomePageTemp(data, today),
        "웹툰": () => getWebtoonPageTemp(data, today),
        "웹소설": () => getWebFictionPageTemp(data, today),
        "영화": () => getMoviePageTemp(data),
        "방송": () => getTVPageTemp(data),
        "책": () => getBookPageTemp(data),
    };
    const currentPageTemp = pageTemp[INITIAL_PAGE]();

    return currentPageTemp;
}

const getDayTopContentTemp = (dayTopData, currentTabIdx) => getDayTopContent(dayTopData, currentTabIdx);

const getMainBannerTemp = (data, className) => getMainBannerTemp(data, className);

export { getPageTemp, getDayTopContentTemp, getMainBannerTemp };