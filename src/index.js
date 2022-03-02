import { getJsons } from "./utils.js";
import App from "./screens/App.js";

const init = async () => {
  const paths = ["categories", "genres"];
  const [{ results: categories }, { results: genres }] = await getJsons(paths);

  const $app = document.querySelector(".app");

  new App({
    $target: $app,
    state: { categories, genres, category: "webtoon" },
  });
};

init();
