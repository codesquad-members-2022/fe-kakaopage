import drawWebtoons from './drawWebtoons.js';
import clearWebtoons from './clearWebtoons.js';

const setWebtoons = ({ dayWebtoonsArr, webtoonsArr }) => {
  clearWebtoons();
  dayWebtoonsArr?.forEach((dayWebtoons) => {
    drawWebtoons(dayWebtoons);
  });
  webtoonsArr.forEach((webtoons) => {
    drawWebtoons(webtoons);
  });
};

export default setWebtoons;
