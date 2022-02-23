import {
  AnticipatedWork,
  AppDownloadLink,
  CategoryMenu,
  DailyRanking,
  DailySeriesRanking,
  GenreTop,
  MainBanner,
  MainNav,
  RecommendEvent,
  SubBanner,
} from '../index.js';
import { Categories } from '../../data';

const HomeContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${MainBanner()}
            ${CategoryMenu(Categories.home)}
            ${SubBanner()}
            ${DailySeriesRanking()}
            ${AnticipatedWork()}
            ${GenreTop('로맨스')}
            ${GenreTop('로판')}
            ${GenreTop('드라마')}
            ${GenreTop('BL/GL')}
            ${GenreTop('소년')}
            ${GenreTop('액션무협')}
            ${DailyRanking()}
            ${RecommendEvent()}
            ${AppDownloadLink()}
          </div>`;
}

export default HomeContents;