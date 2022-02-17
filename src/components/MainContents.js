import { MainNav, DailySeriesRanking } from './index.js';
import { MainNavItems } from '../data';

const MainContents = () => {

  return `<div class="main-contents">
            ${MainNav(MainNavItems)}
            ${DailySeriesRanking()}
          </div>`;
}

export default MainContents;