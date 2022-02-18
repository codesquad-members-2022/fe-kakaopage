import genres from "../../genres.js";
import { getJson } from "../../src/utils.js";
import { renderGenreContents } from "../../src/core.js";
import webtoonData from "../../data/webtoonData.js";

const WebtoonCategory = async (initGenre) => {
  // const { results: webtoonResults } = await getJson("webtoon");
  const { results: webtoonResults } = webtoonData;

  const webtoonGenre = genres.webtoon;
  const initScreenGenre = webtoonGenre[initGenre].screen(webtoonResults);
  renderGenreContents(initScreenGenre);
  const genreObjs = Object.keys(webtoonGenre).map((genre) => ({
    genre,
    name: webtoonGenre[genre].name,
  }));
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

export default WebtoonCategory;
