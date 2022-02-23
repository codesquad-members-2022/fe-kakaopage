import { MenuListItem } from '../index.js';

const CategoryMenuList = (menuList) => {
  return `<div class="categories">
            ${menuList.reduce((prev, cur) => prev += MenuListItem(cur), '')}
          </div>`;
};

export default CategoryMenuList;