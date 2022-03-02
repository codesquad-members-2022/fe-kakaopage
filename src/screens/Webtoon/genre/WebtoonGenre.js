import Component from "../../Component.js";
import { createExtendsRelation } from "../../../utils.js";
import components from "../../../components.js";

function WebtoonGenre(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(WebtoonGenre, Component);

WebtoonGenre.prototype.mount = function () {
  const { contents } = this.state;
  contents.forEach((content) => {
    const { className, state } = content;
    const $content = this.$target.querySelector(`.main__${className}`);
    new components[className]({
      $target: $content,
      state,
    });
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
      {
        className: "recommendEvent",
        state: {
          title: "추천이벤트",
        },
      },
      { className: "fullButton", state: {} },
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
