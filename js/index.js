import { createBanner } from "../components/banner/index.js";

const banner = createBanner({
  title: "내가 죽였다",
  type: "웹툰",
  views: 20.5,
  progress: "1/4",
  ad: "누가 아군이고, 누가 적인가.",
});

function $(selector) {
  return document.querySelector(selector);
}

$(".contents").insertAdjacentHTML("beforeend", banner);
