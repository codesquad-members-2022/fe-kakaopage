import {
  AppDownloadLink,
  GenreTop,
  MainNav,
} from '../index.js';

const ShonenContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${GenreTop('소년')}
            ${AppDownloadLink()}
          </div>`;
}

export default ShonenContents;