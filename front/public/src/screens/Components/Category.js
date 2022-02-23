import Component from "../Component.js";
import { createExtendsRelation } from "../../utils.js";

function Category(target) {
  Component.call(this, target);

  this.template = function () {
    const { name, category, waitForFree, newAlert, selected } = this.state;
    return `
        <li class="header__nav-item 
        ${selected ? "selected" : ""}" data-category="${category}">
          <span>
            ${name}
            ${waitForFree ? ' ・ <i class="fas fa-clock"></i>' : ""}
          </span>
          ${newAlert ? '<span class="yellow-dot"></span>' : ""}
        </li>`;
  };
}

createExtendsRelation(Category, Component);

export default Category;
