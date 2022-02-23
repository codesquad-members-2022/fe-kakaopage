import {
  AppDownloadLink,
  GenreTop,
  MainNav,
  CategoryMenu
} from '../index.js';
import { Categories } from '../../data';

const DramaContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${CategoryMenu(Categories.drama)}
            ${GenreTop('드라마')}
            ${AppDownloadLink()}
          </div>`;
}

export default DramaContents;