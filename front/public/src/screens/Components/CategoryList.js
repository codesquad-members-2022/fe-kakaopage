import Component from "../Component.js";
import Category from "./Category.js";
import { createExtendsRelation, updateNodeClasses } from "../../utils.js";

function CategoryList(target) {
  this.target = target;
  this.state = {};

  // const renderCategoryContents = (categoryContents) => {
  //   navGenre.innerHTML = categoryContents;
  //   [...navGenre.children].forEach((genreNode) => {
  //     genreNode.addEventListener("click", handleNavGenre);
  //   });
  // };

  this.setEvent = function () {
    this.addEvent("click", ".header__nav-item", ({ target }) => {
      const eventTarget = target.closest(".header__nav-item");
      updateNodeClasses(eventTarget, "selected");
    });
  };

  this.setState = function (newState) {
    this.state = { ...this.state, ...newState };
    this.appendHTML();
  };

  this.template = function () {
    const { categories } = this.state;
    return `
    <ul class="header__nav">
      ${categories.reduce((tags, cInfo) => {
        const category = new Category();
        category.setState(cInfo);
        tags += category.template();
        return tags;
      }, "")}
    </ul>`;
  };
}

createExtendsRelation(CategoryList, Component);

export default CategoryList;
