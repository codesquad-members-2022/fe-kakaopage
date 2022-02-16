import { $ } from "./util.js";
const imagePath = "/image/main";

class Main {
  constructor() {
    this.junbotron();
  }

  junbotron() {
    $("div.toon-jumbotron").insertAdjacentHTML(
      "beforeend",
      this.getTag("img", "toon-jumbotron-image")
    );
    $("img.toon-jumbotron-image").src = `${imagePath}/magumwang.png`;
  }

  getTag(tagName, className) {
    return `<${tagName} class="${className || ""}"></${tagName}`;
  }
}

export default Main;
