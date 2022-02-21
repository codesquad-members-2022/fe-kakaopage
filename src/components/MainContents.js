import { MainNav, DailySeriesRanking, MainBanner, CategoryMenu } from './index.js';
import { Categories } from '../data';

const MainContents = () => {

  return `<div class="main-contents">
            ${MainNav()}
            ${MainBanner()}
            ${CategoryMenu(Categories.home)}
            ${DailySeriesRanking()}
          </div>`;
};

export default MainContents;