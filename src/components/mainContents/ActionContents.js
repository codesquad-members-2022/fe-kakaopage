import {
  AppDownloadLink,
  GenreTop,
  MainNav,
} from '../index.js';

const ActionContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${GenreTop('액션무협')}
            ${AppDownloadLink()}
          </div>`;
}

export default ActionContents;