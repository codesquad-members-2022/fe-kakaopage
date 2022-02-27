import { createExtendsRelation, getComponentsTemplate } from "../../utils.js";
import Component from "../Component.js";
import Card from "./Card.js";

function GenreTop(target, state) {
  Component.call(this, target, state);
}

createExtendsRelation(GenreTop, Component);

GenreTop.prototype.template = function () {
  const webtoons = JSON.parse(localStorage.getItem("webtoons"));
  const genreCards = webtoons
    .filter((wt) => wt.genre.includes(this.state.genre))
    .map((cardInfo) => new Card("_", cardInfo));

  return `
        <ul class="contentsCard">
          ${getComponentsTemplate(genreCards)}
        </ul>`;
};

export default GenreTop;
