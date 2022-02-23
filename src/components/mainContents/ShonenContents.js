import {
  AppDownloadLink,
  GenreTop,
  MainNav,
  CategoryMenu
} from '../index.js';
import { Categories } from '../../data';

const ShonenContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${CategoryMenu(Categories.shonen)}
            ${GenreTop('소년')}
            ${AppDownloadLink()}
          </div>`;
}

export default ShonenContents;