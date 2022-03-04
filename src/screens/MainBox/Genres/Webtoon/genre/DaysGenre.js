import Component from "../../../../Component.js";
import { createExtendsRelation, getJson } from "../../../../../utils.js";
import components from "../../components.js";
import { API_POINT } from "../../../../../constants.js";
import CategoryId from "../../../../../enums/CategoryId.js";
import GenreId from "../../../../../enums/GenreId.js";

function DaysGenre(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(DaysGenre, Component);

DaysGenre.prototype.mount = function () {
  const { contents } = this.state;

  contents.forEach((content) => {
    const { elementId, className, state } = content;
    const { list, webtoons } = state;
    const $content = this.$target.querySelector(`#${elementId}`);

    new components[className]({
      $target: $content,
      state: {
        ...state,
        webtoons: className === "mainBanner" ? list : webtoons,
      },
      $props: {
        setCarousel:
          className === "mainBanner" ? this.$props.setCarousel : null,
      },
    });
  });
};

DaysGenre.prototype.setup = async function () {
  const { category, genre } = this.state;

  const {
    section_containers,
    top_banner: { list },
  } = await getJson(
    API_POINT({ categoryId: CategoryId[category], genreId: GenreId[genre] })
  );

  this.state = {
    section_containers,
    contents: [
      {
        elementId: "wtMainBanner",
        className: "mainBanner",
        state: {
          list,
        },
      },
      {
        elementId: "wtDaysTop",
        className: "daysTop",
        state: {
          title: "요일연재 TOP",
        },
      },
      { elementId: "wtFullButton", className: "fullButton", state: {} },
    ],
  };
};

DaysGenre.prototype.template = function () {
  const { contents } = this.state;
  return contents.reduce((tags, { elementId, className }) => {
    tags += `<li id="${elementId}" class="mainBox main__${className}"></li>`;
    return tags;
  }, "");
};

export default DaysGenre;
