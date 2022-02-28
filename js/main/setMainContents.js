import setWebtoons from './webtoon/setWebtoons.js';
import clearWebtoons from './webtoon/clearWebtoons.js';
import drawDayFilter from './dayFilter/drawDayFilter.js';
import clearDayFilter from './dayFilter/clearDayFilter.js';
import drawLoadingSpinner from '../loading/drawLoadingSpinner.js';
import clearLoadingSpinner from '../loading/clearLoadingSpinner.js';

const setMainContents = ({
  $category,
  selectedIdx,
  selectedDay,
  apiURL,
  stopFlag,
}) => {
  clearWebtoons();
  clearDayFilter();
  drawLoadingSpinner();
  fetch(apiURL + `api/webtoons/${selectedIdx}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const dayWebtoonsMap = data.dayWebtoons;
      const dayWebtoonsArr = dayWebtoonsMap?.[selectedDay];
      const webtoonsArr = data.popWebtoons;

      // webtoon contents
      clearLoadingSpinner();
      setWebtoons({ dayWebtoonsArr, webtoonsArr });

      // day filter
      drawDayFilter({ $category, dayWebtoonsMap });
      return;
    })
    .then(() => {
      stopFlag.setFalse();
    });
};

export default setMainContents;
