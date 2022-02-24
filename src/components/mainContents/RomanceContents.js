import {
  AppDownloadLink,
  GenreTop,
  MainNav,
  CategoryMenu,
} from '../index.js';
import { Categories } from '../../data';
import { convertStringToHTML } from '../../utils.js';

const RomanceContents = () => {

  const div = convertStringToHTML('<div class="main-contents"></div>');
  const components = [
    MainNav(),
    CategoryMenu(Categories.romance),
    GenreTop('로맨스'),
    AppDownloadLink(),
  ];

  div.append(...components);

  return div;
};

export default RomanceContents;