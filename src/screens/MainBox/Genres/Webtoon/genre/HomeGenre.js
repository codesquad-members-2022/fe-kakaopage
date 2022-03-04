import Component from "../../../../Component.js";
import { createExtendsRelation, getJson } from "../../../../../utils.js";
import components from "../../components.js";
import { API_POINT } from "../../../../../constants.js";
import CategoryId from "../../../../../enums/CategoryId.js";
import GenreId from "../../../../../enums/GenreId.js";

function HomeGenre(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(HomeGenre, Component);

HomeGenre.prototype.mount = function () {
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

HomeGenre.prototype.setup = async function () {
  const { category, genre } = this.state;

  const {
    section_containers,
    top_banner: { list },
  } = await getJson(
    API_POINT({ categoryId: CategoryId[category], genreId: GenreId[genre] })
  );

  const [
    _1,
    _2,
    subBannerWt,
    daysTopWt,
    newWorkTopWt,
    _3,
    romanceTopWt,
    rofanTopWt,
    dramaTopWt,
    blTopWt,
    boyTopWt,
    actionTopWt,
    dateTopWt,
    rcEventWt,
  ] = section_containers;

  this.state = {
    contents: [
      {
        elementId: "wtMainBanner",
        className: "mainBanner",
        state: {
          list,
        },
      },
      { elementId: "wtNavDetail", className: "navDetail", state: {} },
      {
        elementId: "wtSubBanner",
        className: "subBanner",
        state: {
          webtoons: subBannerWt,
        },
      },
      {
        elementId: "wtDaysTop",
        className: "daysTop",
        state: {
          title: "요일연재 TOP",
          webtoons: daysTopWt,
        },
      },
      {
        elementId: "wtNewWorkTop",
        className: "newWorkTop",
        state: {
          title: "기대신작 TOP",
          webtoons: newWorkTopWt,
        },
      },
      {
        elementId: "wtRomanceGenreTop",
        className: "genreTop",
        state: {
          title: "로맨스 TOP",
          webtoons: romanceTopWt,
        },
      },
      {
        elementId: "wtRofanGenreTop",
        className: "genreTop",
        state: {
          title: "로판 TOP",
          webtoons: rofanTopWt,
        },
      },
      {
        elementId: "wtDramaGenreTop",
        className: "genreTop",
        state: {
          title: "드라마 TOP",
          webtoons: dramaTopWt,
        },
      },
      {
        elementId: "wtBLGenreTop",
        className: "genreTop",
        state: {
          title: "BL TOP",
          webtoons: blTopWt,
        },
      },
      {
        elementId: "wtBoyGenreTop",
        className: "genreTop",
        state: {
          title: "소년 TOP",
          webtoons: boyTopWt,
        },
      },
      {
        elementId: "wtActionGenreTop",
        className: "genreTop",
        state: {
          title: "액션무협 TOP",
          webtoons: actionTopWt,
        },
      },
      {
        elementId: "wtDateTop",
        className: "dateTop",
        state: {
          title: "일간 랭킹 TOP",
          webtoons: dateTopWt,
        },
      },
      {
        elementId: "wtRecommendEvent",
        className: "recommendEvent",
        state: {
          title: "추천이벤트",
          webtoons: rcEventWt,
        },
      },
      { elementId: "wtFullButton", className: "fullButton", state: {} },
    ],
  };
};

HomeGenre.prototype.template = function () {
  const { contents } = this.state;
  return contents.reduce((tags, { elementId, className }) => {
    tags += `<li id="${elementId}" class="mainBox main__${className}"></li>`;
    return tags;
  }, "");
};

export default HomeGenre;
