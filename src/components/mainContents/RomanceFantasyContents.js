import {
  AppDownloadLink,
  GenreTop,
  MainNav,
} from '../index.js';

const RomanceFantasyContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${GenreTop('로판')}
            ${AppDownloadLink()}
          </div>`;
}

export default RomanceFantasyContents;