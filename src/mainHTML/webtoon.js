import { createGenreNav } from "../components/genre-nav.js";
import { fetchData } from "../fetchData.js";
import { mainContainer } from "../index.js";
import webtoonHome from "./webtoon-home.js";

function renderWebtoonMain() {
  fetchData("main-slide").then((mainSlideData) => {
    const fragment = `
    ${createGenreNav()}
    <div class="sections-wrapper">
      ${webtoonHome({ mainSlideData })}
    </div>
    `;
    mainContainer.innerHTML = fragment;
  });
}

export { renderWebtoonMain };
