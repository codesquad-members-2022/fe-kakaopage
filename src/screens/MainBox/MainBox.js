import Component from "../Component.js";
import { createExtendsRelation } from "../../utils.js";
import categories from "./categories.js";
import GenreList from "./Genres/GenreList.js";

function MainBox(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(MainBox, Component);

MainBox.prototype.mount = function () {
  const $navGenre = this.$target.querySelector(".main__navGenre");
  const $contentsBox = this.$target.querySelector(".main__contentsBox");
  const { genres, selected, category } = this.state;
  this.selected = selected;
  if (category !== "home") {
    new GenreList({
      $target: $navGenre,
      state: {
        genres,
        selected,
      },
      $props: {
        updateGenre: this.updateGenre.bind(this),
        clearCarousel: this.$props.clearCarousel,
      },
    });
  }
  new categories[category][selected]({
    $target: $contentsBox,
    state: {
      category,
      genre: selected,
    },
    $props: {
      setCarousel: this.$props.setCarousel,
    },
  });
};

MainBox.prototype.template = function () {
  const { category } = this.state;
  return `
    ${
      category !== "home"
        ? '<ul class="mainBox mainNav main__navGenre"></ul>'
        : ""
    }
    <ul class="main__contentsBox"></ul>
    `;
};

MainBox.prototype.updateGenre = function (genre) {
  this.setState({ selected: genre });
};

export default MainBox;
