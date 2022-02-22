import {
  AppDownloadLink,
  DailyRanking,
  MainNav,
} from '../index.js';

const WebtoonContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${DailyRanking()}
            ${AppDownloadLink()}
          </div>`;
}

export default WebtoonContents;