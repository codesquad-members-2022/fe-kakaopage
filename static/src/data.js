import { DATA_URL } from './constant.js';

const dataUrl = {
  홈: `${DATA_URL}home.json`,
  웹툰: `${DATA_URL}webtoon.json`,
  웹소설: `${DATA_URL}webFiction.json`,
  영화: `${DATA_URL}movie.json`,
  방송: `${DATA_URL}tv.json`,
  책: `${DATA_URL}book.json`
};

const getPageData = page => {
  return dataUrl[page];
};

export { getPageData };
