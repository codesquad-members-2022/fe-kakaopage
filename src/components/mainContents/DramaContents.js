import {
  AppDownloadLink,
  GenreTop,
  MainNav,
} from '../index.js';

const DramaContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${GenreTop('드라마')}
            ${AppDownloadLink()}
          </div>`;
}

export default DramaContents;