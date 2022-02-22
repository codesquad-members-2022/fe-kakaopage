import Component from "../Component.js";
import Category from "./Category.js";
import { createExtendsRelation, updateNodeClasses } from "../../utils.js";

function CategoryList(target) {
  this.target = target;
  this.state = {};

  // const genreName = event.target.dataset.genre;
  // const genreContents = genres[category][genreName].screen(categoryResults);
  // renderGenreContents(genreContents);

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
      const category = eventTarget.dataset.category;
    });
  };

  this.template = function () {
    return `
      ${this.state.categories?.reduce((tags, category) => {
        tags += category.template();
        return tags;
      }, "")}
    `;
  };

  this.render();
}

createExtendsRelation(CategoryList, Component);

export default CategoryList;
