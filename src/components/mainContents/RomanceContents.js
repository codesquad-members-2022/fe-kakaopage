import {
  AppDownloadLink,
  GenreTop,
  MainNav,
} from '../index.js';

const RomanceContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${GenreTop('로맨스')}
            ${AppDownloadLink()}
          </div>`;
}

export default RomanceContents;