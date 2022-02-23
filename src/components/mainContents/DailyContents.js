import {
  AppDownloadLink,
  DailySeriesRanking,
  MainNav,
} from '../index.js';

const DailyContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${DailySeriesRanking()}
            ${AppDownloadLink()}
          </div>`;
}

export default DailyContents;