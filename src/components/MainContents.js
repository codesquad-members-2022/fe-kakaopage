import { MainNav, DailySeriesRanking, MainBanner, CategoryMenu, SubBanner } from './index.js';
import { Categories } from '../data';

const MainContents = () => {

  return `<div class="main-contents">
            ${MainNav()}
            ${MainBanner()}
            ${CategoryMenu(Categories.home)}
            ${SubBanner()}
            ${DailySeriesRanking()}
          </div>`;
};

export default MainContents;