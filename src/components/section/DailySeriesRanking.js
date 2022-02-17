import { Webtoon, ContentsNavItems } from '../../data';
import { ContentsHeader, ContentsNav, ContentsList } from '../index.js';

const DailySeriesRanking = () => {

  const title = '요일 연재 TOP';

  return `<section class="contents daily-series-ranking">
            ${ContentsHeader(title)}
            ${ContentsNav(ContentsNavItems)}
            ${ContentsList(Webtoon)}
          </section>`;
};

export default DailySeriesRanking;