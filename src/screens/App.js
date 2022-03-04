import Component from "./Component.js";
import Header from "./Header/Header.js";
import MainBox from "./MainBox/MainBox.js";
import Footer from "./Footer/Footer.js";
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
      clearCarousel: this.clearCarousel.bind(this),
    },
  });

  new MainBox({
    $target: $main,
    state: {
      category,
      genres: genres[category],
      selected: "home",
    },
    $props: {
      setCarousel: this.setCarousel.bind(this),
      clearCarousel: this.clearCarousel.bind(this),
    },
  });

  new Footer({
    $target: $footer,
  });
};

App.prototype.updateCategory = function (category) {
  this.setState({ category });
};

App.prototype.setCarousel = function (getInterval) {
  const interval = getInterval();
  this.state.interval = interval;
};

App.prototype.clearCarousel = function () {
  if (this.state.interval) {
    clearInterval(this.state.interval);
    this.state.interval = "";
  }
};

App.prototype.template = function () {
  return `
    <header class="header"></header>
    <div class="main"></div>
    <footer></footer>
    `;
};

export default App;
