import {
  AppDownloadLink,
  GenreTop,
  MainNav,
} from '../index.js';

const BLContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${GenreTop('BL/GL')}
            ${AppDownloadLink()}
          </div>`;
}

export default BLContents;