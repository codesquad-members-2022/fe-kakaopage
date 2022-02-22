import Component from "../Component.js";

function Category(target) {
  this.target = target;
  this.state = {};

  this.template = function () {
    const { name, category, waitForFree, newAlert, selected } = this.state;
    return `
        <li class="header__nav-item ${
          selected ? "selected" : ""
        }" data-category="${category}">
          <span>${name}${
      waitForFree ? ' ・ <i class="fas fa-clock"></i>' : ""
    }</span>
          ${newAlert ? '<span class="yellow-dot"></span>' : ""}
        </li>`;
  };
  this.render();
}

Category.prototype = Object.create(Component.prototype);
Category.prototype.constructor = Category;

export default Category;
