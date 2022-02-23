import {
  AppDownloadLink,
  GenreTop,
  MainNav,
  CategoryMenu
} from '../index.js';
import { Categories } from '../../data';

const BLContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${CategoryMenu(Categories.bl)}
            ${GenreTop('BL/GL')}
            ${AppDownloadLink()}
          </div>`;
}

export default BLContents;