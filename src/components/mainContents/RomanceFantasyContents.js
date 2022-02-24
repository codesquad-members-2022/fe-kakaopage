import {
  AppDownloadLink,
  GenreTop,
  MainNav,
  CategoryMenu,
} from '../index.js';
import { Categories } from '../../data';
import { convertStringToHTML } from '../../utils.js';

const RomanceFantasyContents = () => {

  const div = convertStringToHTML('<div class="main-contents"></div>');
  const components = [
    MainNav(),
    CategoryMenu(Categories.romanceFantasy),
    GenreTop('로판'),
    AppDownloadLink(),
  ];

  div.append(...components);

  return div;
};

export default RomanceFantasyContents;