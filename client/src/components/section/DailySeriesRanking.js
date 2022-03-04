import { store } from '../../data/store.js';
import { ContentsHeader, ContentsNav, ContentsList } from '../index.js';
import { convertStringToHTML } from '../../utils.js';

const DailySeriesRanking = () => {

  const title = '요일 연재 TOP';

  const filteredWebtoon = () => {
    const selectedDay = store.navItems.contents.find((item) => item.isSelected).name;
    return store.webtoons.filter((webtoon) => webtoon.serialDate.includes(selectedDay));
  };

  return convertStringToHTML(
          `<section class="contents daily-series-ranking">
            ${ContentsHeader(title)}
            ${ContentsNav(store.navItems.contents)}
            ${ContentsList('small', filteredWebtoon())}
          </section>`);
};

export default DailySeriesRanking;
