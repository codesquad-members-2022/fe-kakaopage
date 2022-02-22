import { MainNav, DailySeriesRanking, MainBanner, CategoryMenu, SubBanner, GenreTop, AnticipatedWork } from './index.js';
import { Categories } from '../data';

const MainContents = () => {

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
          </div>`;
};

export default MainContents;