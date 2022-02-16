import { $ } from "./util.js";
const imagePath = "/image/header";

class Header {
  constructor(params) {
    this.kakaopage();
    this.kakaopage_menu();
  }

  kakaopage() {
    $("h1.kakaopage").insertAdjacentHTML(
      "beforeend",
      this.addTag("img", "css-kakaopage")
    );
    $("img.css-kakaopage").src = `${imagePath}/logo-kakaopage.svg`;
  }

  kakaopage_menu() {
    // search
    $("div.search-wrap").insertAdjacentHTML(
      "beforeend",
      this.addTag("img", "css-searchBtn")
    );
    $("img.css-searchBtn").src = `${imagePath}/btn_search.png`;

    // stage
    $("div.menu-stage").insertAdjacentHTML(
      "beforeend",
      this.addTag("img", "css-stage")
    );
    $("img.css-stage").src = `${imagePath}/pc-logo-stage.svg`;

    $("div.menu-stage-tooltip").insertAdjacentHTML(
      "beforeend",
      this.addTag("img", "css-stage-tooltip")
    );
    $("img.css-stage-tooltip").src = `${imagePath}/stage-tooltip.svg`;
  }

  addTag(tagName, className) {
    return `<${tagName} class="${className}"></${tagName}`;
  }
}

export default Header;
