import {
  AppDownloadLink,
  GenreTop,
  MainNav,
  CategoryMenu
} from '../index.js';
import { Categories } from '../../data';

const RomanceContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${CategoryMenu(Categories.romance)}
            ${GenreTop('로맨스')}
            ${AppDownloadLink()}
          </div>`;
}

export default RomanceContents;