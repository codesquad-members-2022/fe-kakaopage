import { $ } from "./util.js";
const imagePath = "/image/header";

class Header {
  constructor() {
    this.kakaopage();
    this.kakaopage_menu();
    this.category();
  }

  kakaopage() {
    $("h1.kakaopage").insertAdjacentHTML(
      "beforeend",
      this.getTag("img", "css-kakaopage")
    );
    $("img.css-kakaopage").src = `${imagePath}/logo-kakaopage.svg`;
  }

  kakaopage_menu() {
    $("div.search-wrap").insertAdjacentHTML(
      "beforeend",
      this.getTag("img", "css-searchBtn")
    );
    $("img.css-searchBtn").src = `${imagePath}/btn_search.png`;

    $("div.menu-stage").insertAdjacentHTML(
      "beforeend",
      this.getTag("img", "css-stage")
    );
    $("img.css-stage").src = `${imagePath}/pc-logo-stage.svg`;

    $("div.menu-stage-tooltip").insertAdjacentHTML(
      "beforeend",
      this.getTag("img", "css-stage-tooltip")
    );
    $("img.css-stage-tooltip").src = `${imagePath}/stage-tooltip.svg`;
  }

  category() {
    const menu = ["home", "toon", "novel", "vod", "broadcast", "book"];
    menu.forEach((v, i) => {
      $(`nav.menu-list li:nth-child(${i + 1}) a`).insertAdjacentHTML(
        "beforeend",
        this.getTag("img")
      );
      $(
        `nav.menu-list li:nth-child(${i + 1}) img`
      ).src = `${imagePath}/menu-${v}.svg`;
    });
  }

  getTag(tagName, className) {
    return `<${tagName} class="${className || ""}"></${tagName}`;
  }
}

export default Header;
