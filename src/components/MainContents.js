import { MainNav, DailySeriesRanking, MainBanner, CategoryMenu, SubBanner, GenreTop } from './index.js';
import { Categories } from '../data';

const MainContents = () => {

  return `<div class="main-contents">
            ${MainNav()}
            ${MainBanner()}
            ${CategoryMenu(Categories.home)}
            ${SubBanner()}
            ${DailySeriesRanking()}
            ${GenreTop('로맨스')}
          </div>`;
};

export default MainContents;