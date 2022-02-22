import { getHomePage } from './render/home.js';
import { getWebtoonPage } from './render/webtoon.js';
import { getWebFictionPage } from './render/webFiction.js';
import { getMoviePage } from './render/movie.js';
import { getTVPage } from './render/tv.js';
import { getBookPage } from './render/book.js';

const getPageTemplete = async (INITIAL_PAGE, data, today) => {
    const pageTemplete = {
        "홈": () => getHomePage(data, today),
        "웹툰": () => getWebtoonPage(data, today),
        "웹소설": () => getWebFictionPage(data, today),
        "영화": () => getMoviePage(data),
        "방송": () => getTVPage(data),
        "책": () => getBookPage(data),
    };
    return pageTemplete[INITIAL_PAGE]();
}

export { getPageTemplete };