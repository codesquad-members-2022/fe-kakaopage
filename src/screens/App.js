import Component from "./Component.js";
import Header from "./Components/Header.js";
import MainBox from "./Components/MainBox.js";
import Footer from "./Components/Footer.js";
import { createExtendsRelation } from "../utils.js";

function App($target, state) {
  Component.call(this, $target, state);
}

createExtendsRelation(App, Component);

App.prototype.mount = function () {
  const $header = this.$target.querySelector(".header");
  const $main = this.$target.querySelector(".main");
  const $footer = this.$target.querySelector("footer");

  const { categories, genres, category } = this.state;

  new Header({
    $target: $header,
    state: {
      selected: category,
      categories,
    },
    $props: {
      updateCategory: this.updateCategory.bind(this),
    },
  });

  new MainBox({
    $target: $main,
    state: {
      category,
      genres: genres[category],
      selected: "home",
    },
  });

  new Footer({
    $target: $footer,
  });
};

App.prototype.updateCategory = function (category) {
  this.setState({ category });
};

App.prototype.template = function () {
  return `
    <header class="header"></header>
    <div class="main"></div>
    <footer></footer>
    `;
};

export default App;
