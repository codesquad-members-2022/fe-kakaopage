import Component from "../Component.js";
import {
  createExtendsRelation,
  getComponentsTemplate,
  updateNodeClasses,
} from "../../utils.js";

function CategoryList(target) {
  Component.call(this, target);
  this.render();
}

createExtendsRelation(CategoryList, Component);

CategoryList.prototype.setEvent = function () {
  this.addEvent("click", ".header__nav-item", ({ target }) => {
    const eventTarget = target.closest(".header__nav-item");
    updateNodeClasses(eventTarget, "selected");
    const category = eventTarget.dataset.category;
    const genres = JSON.parse(localStorage.getItem("genres"));
    this.state.genreList.setState({
      category,
      genres: genres[category],
      genre: "home",
    });
  });
};

CategoryList.prototype.template = function () {
  return getComponentsTemplate(this.state.categories);
};

export default CategoryList;
