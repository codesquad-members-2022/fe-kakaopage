import genres from "../../genres.js";
import { renderGenreContents } from "../../core.js";
import {
  getJson,
  createExtendsRelation,
  updateNodeClasses,
} from "../../utils.js";
import Component from "../Component.js";
const { results: webtoonResults } = await getJson("webtoon");

function GenreList(target) {
  // const webtoonGenre = genres.webtoon;
  // const initScreenGenre = webtoonGenre[initGenre].screen(webtoonResults);
  // renderGenreContents(initScreenGenre);
  this.target = target;
  this.state = {};

  this.setEvent = function () {
    this.addEvent("click", ".navGenre-item", ({ target }) => {
      const eventTarget = target.closest(".navGenre-item");
      updateNodeClasses(eventTarget, "selected");
    });
  };

  this.setState = function (newState) {
    this.state = { ...this.state, ...newState };
    this.appendHTML();
  };

  this.template = function () {
    const { genres } = this.state;
    console.log(genres);
    return `
      <ul class="mainBox main__navGenre">
        ${genres.reduce((tags, { genre, name, selected }) => {
          tags += `
            <li class="navGenre-item ${selected ? "selected" : ""}" 
            data-genre="${genre}">
                ${name}
            </li>`;
          return tags;
        }, "")}
      </ul>
    `;
  };
}

createExtendsRelation(GenreList, Component);

export default GenreList;
