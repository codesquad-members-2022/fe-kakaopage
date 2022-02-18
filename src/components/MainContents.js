import { MainNav, DailySeriesRanking, MainBanner } from './index.js';

const MainContents = () => {

  return `<div class="main-contents">
            ${MainNav()}
            ${MainBanner()}
            ${DailySeriesRanking()}
          </div>`;
}

export default MainContents;