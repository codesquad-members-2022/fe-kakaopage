import {
  AppDownloadLink,
  GenreTop,
  MainNav,
  CategoryMenu,
} from '../index.js';
import { Categories } from '../../data';
import { convertStringToHTML } from '../../utils.js';

const ShonenContents = () => {

  const div = convertStringToHTML('<div class="main-contents"></div>');
  const components = [
    MainNav(),
    CategoryMenu(Categories.shonen),
    GenreTop('소년'),
    AppDownloadLink(),
  ];

  div.append(...components);

  return div;
};

export default ShonenContents;