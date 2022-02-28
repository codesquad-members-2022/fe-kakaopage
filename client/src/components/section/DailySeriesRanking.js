import { ContentsNavItems, Webtoons } from '../../data';
import { ContentsHeader, ContentsNav, ContentsList } from '../index.js';
import { convertStringToHTML } from '../../utils.js';

const DailySeriesRanking = () => {

  const title = '요일 연재 TOP';

  const filteredWebtoon = () => {
    const currentDay = ContentsNavItems.find((item) => item.isSelected).name;
    return Webtoons.filter((webtoon) => webtoon.serialDate.includes(currentDay));
  };

  return convertStringToHTML(
          `<section class="contents daily-series-ranking">
            ${ContentsHeader(title)}
            ${ContentsNav(ContentsNavItems)}
            ${ContentsList('small', filteredWebtoon())}
          </section>`);
};

export default DailySeriesRanking;