import Component from "../../Component.js";
import { createExtendsRelation } from "../../../utils.js";

function CategoryList(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(CategoryList, Component);

CategoryList.prototype.template = function () {
  const { categories, selected } = this.state;
  return categories
    ?.map((cInfo) => {
      const { name, category, waitForFree, newAlert } = cInfo;
      return `
        <li class="header__nav-item 
        ${selected === category ? "selected" : ""}" data-category="${category}">
          <span>
            ${name}
            ${waitForFree ? ' ・ <i class="fas fa-clock"></i>' : ""}
          </span>
          ${newAlert ? '<span class="yellow-dot"></span>' : ""}
        </li>`;
    })
    .join("");
};

export default CategoryList;
