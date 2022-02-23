import { CategoryMenuList } from '../index.js';

const CategoryMenu = (menuList) => {
  return `<section class="contents category-menu">
            ${CategoryMenuList(menuList)}
          </section>`;
};

export default CategoryMenu;