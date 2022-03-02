import Component from "../../Component.js";
import { createExtendsRelation } from "../../../utils.js";

function WebtoonGenre(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(WebtoonGenre, Component);

WebtoonGenre.prototype.mount = function () {
  const { contents } = this.state;
  contents.forEach((content) => {
    const $content = this.$target.querySelector(`.main__${content.className}`);
    // new 어쩌고를 위한 object 만들기
    console.log($content);
  });
};
WebtoonGenre.prototype.setup = function () {
  this.state = {
    contents: [
      { className: "mainBanner", state: {} },
      { className: "navDetail", state: {} },
      { className: "subBanner", state: {} },
      { className: "daysTop", state: {} },
      { className: "bigCardList", state: {} },
      { className: "genreTop", state: {} },
      { className: "genreTop", state: {} },
      { className: "dateTop", state: {} },
      { className: "recommendEvent", state: {} },
      { className: "button", state: {} },
    ],
  };
};

WebtoonGenre.prototype.template = function () {
  const { contents } = this.state;
  return contents.reduce((tags, { className }) => {
    tags += `<li class="mainBox main__${className}"></li>`;
    return tags;
  }, "");
};

export default WebtoonGenre;
