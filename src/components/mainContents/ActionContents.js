import {
  AppDownloadLink,
  GenreTop,
  MainNav,
  CategoryMenu
} from '../index.js';
import { Categories } from '../../data';

const ActionContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${CategoryMenu(Categories.action)}
            ${GenreTop('액션무협')}
            ${AppDownloadLink()}
          </div>`;
}

export default ActionContents;