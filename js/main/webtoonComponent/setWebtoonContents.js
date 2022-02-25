import drawWebtoonContents from './drawWebtoonContents.js';
import clearWebtoonContents from './clearWebtoonContents.js';

const setWebtoonContents = ({ dayContentsArr, webtoonContentsArr }) => {
  clearWebtoonContents();
  dayContentsArr?.forEach((dayContents) => {
    drawWebtoonContents(dayContents);
  });
  webtoonContentsArr.forEach((webtoonContents) => {
    drawWebtoonContents(webtoonContents);
  });
};

export default setWebtoonContents;
