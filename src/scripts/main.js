import { getData } from "../data/sources.js";
import { renderPageInit } from "./views/render.js";

const main = () => {
    getData("https://kakaopage-back.herokuapp.com/src")
    .then(() => renderPageInit())
}

main();