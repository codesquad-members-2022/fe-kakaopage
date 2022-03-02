import { createGenreNav } from "../components/genre-nav.js";
import { mainContainer } from "../index.js";
import webtoonHome from "./webtoon-home.js";

const fragment = `
  ${createGenreNav()}
  <div class="sections-wrapper">
    ${webtoonHome}
  </div>
`;

function renderWebtoonMain() {
  mainContainer.innerHTML = fragment;
}

export { renderWebtoonMain };
