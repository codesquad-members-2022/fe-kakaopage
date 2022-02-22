import genres from "../../genres.js";
import { renderGenreContents } from "../../core.js";
import { getJson, createExtendsRelation } from "../../utils.js";
import Component from "../Component.js";
const { results: webtoonResults } = await getJson("webtoon");

function WebtoonCategory(target) {
  Component.call(this, target);
  // const webtoonGenre = genres.webtoon;
  // const initScreenGenre = webtoonGenre[initGenre].screen(webtoonResults);
  // renderGenreContents(initScreenGenre);

  // const genreObjs = Object.keys(webtoonGenre).map((genre) => ({
  //   genre,
  //   name: webtoonGenre[genre].name,
  // }));

  this.template = function () {
    return `
      ${genreObjs
        .map(
          ({ genre, name }) =>
            `<li class="navGenre-item ${
              genre === initGenre ? "selected" : ""
            }" data-genre="${genre}">${name}</li>`
        )
        .join("")}
    `;
  };
}

createExtendsRelation(WebtoonCategory, Component);

export default WebtoonCategory;
