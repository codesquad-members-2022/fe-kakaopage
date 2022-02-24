import {
  AppDownloadLink,
  GenreTop,
  MainNav,
  CategoryMenu,
} from '../index.js';
import { Categories } from '../../data';
import { convertStringToHTML } from '../../utils.js';

const DramaContents = () => {

  const div = convertStringToHTML('<div class="main-contents"></div>');
  const components = [
    MainNav(),
    CategoryMenu(Categories.drama),
    GenreTop('드라마'),
    AppDownloadLink(),
  ];

  div.append(...components);

  return div;
};

export default DramaContents;