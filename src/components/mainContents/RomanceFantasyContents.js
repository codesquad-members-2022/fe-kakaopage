import {
  AppDownloadLink,
  GenreTop,
  MainNav,
  CategoryMenu
} from '../index.js';
import { Categories } from '../../data';

const RomanceFantasyContents = () => {
  return `<div class="main-contents">
            ${MainNav()}
            ${CategoryMenu(Categories.romanceFantasy)}
            ${GenreTop('로판')}
            ${AppDownloadLink()}
          </div>`;
}

export default RomanceFantasyContents;