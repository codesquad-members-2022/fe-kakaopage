import genres from "../../genres.js";
import { renderGenreContents } from "../../core.js";
import { getJson } from "../../utils.js";
import Component from "../Component.js";

const { results: webtoonResults } = await getJson("webtoon");

function WebtoonCategory(initGenre) {
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

WebtoonCategory.prototype = Object.create(Component.prototype);
WebtoonCategory.prototype.constructor = WebtoonCategory;

export default WebtoonCategory;
