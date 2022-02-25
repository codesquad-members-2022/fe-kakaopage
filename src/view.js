import { getHomePageTemp } from './render/home.js';
import { getWebtoonPageTemp } from './render/webtoon.js';
import { getWebFictionPageTemp } from './render/webFiction.js';
import { getMoviePageTemp } from './render/movie.js';
import { getTVPageTemp } from './render/tv.js';
import { getBookPageTemp } from './render/book.js';
import { getDayTopContent } from './components/dayTop.js';
import { getMainBannerTemp } from './components/mainBanners.js';

const getPageTemplete = (INITIAL_PAGE, data, today) => {
    const pageTemplete = {
        "홈": () => getHomePageTemp(data, today),
        "웹툰": () => getWebtoonPageTemp(data, today),
        "웹소설": () => getWebFictionPageTemp(data, today),
        "영화": () => getMoviePageTemp(data),
        "방송": () => getTVPageTemp(data),
        "책": () => getBookPageTemp(data),
    };
    const currentPageTemplete = pageTemplete[INITIAL_PAGE]();

    return currentPageTemplete;
}

const getDayTopContentTemplete = (dayTopData, currentTabIdx) => getDayTopContent(dayTopData, currentTabIdx);

const getMainBannerTemplete = (data, className) => getMainBannerTemp(data, className);

export { getPageTemplete, getDayTopContentTemplete, getMainBannerTemplete };