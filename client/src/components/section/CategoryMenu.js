import { CategoryMenuList } from '../index.js';
import { convertStringToHTML } from '../../utils.js';

const CategoryMenu = (menuList) => {
  return convertStringToHTML(
          `<section class="contents category-menu">
            ${CategoryMenuList(menuList)}
          </section>`);
};

export default CategoryMenu;