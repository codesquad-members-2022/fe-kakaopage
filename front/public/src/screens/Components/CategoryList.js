import Component from "../Component.js";
import Category from "./Category.js";

function CategoryList(target) {
  this.target = target;
  this.state = {
    categories: [
      {
        name: "홈",
        category: "home",
        waitForFree: false,
        newAlert: false,
        selected: false,
      },
      {
        name: "웹툰",
        category: "webtoon",
        waitForFree: true,
        newAlert: true,
        selected: true,
      },
      {
        name: "웹소설",
        category: "webnovel",
        waitForFree: true,
        newAlert: true,
        selected: false,
      },
      {
        name: "영화",
        category: "movie",
        waitForFree: false,
        newAlert: true,
        selected: false,
      },
      {
        name: "방송",
        category: "broadcast",
        waitForFree: false,
        newAlert: true,
      },
      {
        name: "책",
        category: "book",
        waitForFree: false,
        newAlert: true,
        selected: false,
      },
    ],
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
  this.appendHTML();
}

CategoryList.prototype = Object.create(Component.prototype);
CategoryList.prototype.constructor = CategoryList;

export default CategoryList;
