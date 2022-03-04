import { CategoryMenuList } from '../index.js';
import { convertStringToHTML } from '../../js/util';

const CategoryMenu = (menuList) => {
  return convertStringToHTML(
          `<section class="contents category-menu">
            ${CategoryMenuList(menuList)}
          </section>`);
};

export default CategoryMenu;
