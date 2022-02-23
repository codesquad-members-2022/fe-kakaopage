import { $ } from "./utils.js";
import { renderHome } from "./render.js";
import { createCateNav } from "./components/category-nav.js";
import { webtoonCateEvL } from "./eventlistener.js";

$(".main-header-nav").addEventListener("click", (e) => {
  const currentTab = $(".current-tab", ".underline-thick");
  if (currentTab !== null) {
    currentTab.classList.remove("current-tab", "underline-thick");
  }

  e.target.classList.add("current-tab", "underline-thick");

  if (e.target.dataset.mainNav === "1") {
    createCateNav();
    renderHome();
    webtoonCateEvL();
  } else {
    $("main").innerHTML = "";
  }
});
