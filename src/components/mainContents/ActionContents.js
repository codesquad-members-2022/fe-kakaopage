import {
  AppDownloadLink,
  GenreTop,
  MainNav,
  CategoryMenu,
} from '../index.js';
import { Categories } from '../../data';
import { convertStringToHTML } from '../../utils.js';

const ActionContents = () => {

  const div = convertStringToHTML('<div class="main-contents"></div>');
  const components = [
    MainNav(),
    CategoryMenu(Categories.action),
    GenreTop('액션무협'),
    AppDownloadLink(),
  ];

  div.append(...components);

  return div;
};

export default ActionContents;