import drawWebtoons from './drawWebtoons.js';
import clearWebtoons from './clearWebtoons.js';

const setWebtoons = ({ dayContentsArr, webtoonContentsArr }) => {
  clearWebtoons();
  dayContentsArr?.forEach((dayContents) => {
    drawWebtoons(dayContents);
  });
  webtoonContentsArr.forEach((webtoonContents) => {
    drawWebtoons(webtoonContents);
  });
};

export default setWebtoons;
