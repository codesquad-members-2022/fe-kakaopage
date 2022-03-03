import Component from "../../../../Component.js";
import { createExtendsRelation, getJson } from "../../../../../utils.js";
import { getKoreaDay } from "../../../../../modules/serviceUtils";
import components from "../../components.js";

function WebtoonGenre(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(WebtoonGenre, Component);

WebtoonGenre.prototype.sortRanking = function (items) {
  return items.sort((i1, i2) => i2.rank - i1.rank);
};

WebtoonGenre.prototype.filterContent = function (webtoons, where, what) {
  return webtoons.filter((webtoon) =>
    typeof webtoon[where] === "object"
      ? webtoon[where].includes(what)
      : webtoon[where] === what
  );
};

WebtoonGenre.prototype.mount = function () {
  const { contents, webtoons } = this.state;

  contents.forEach((content) => {
    const { elementId, className, state } = content;
    const { filteredBy } = state;
    const $content = this.$target.querySelector(`#${elementId}`);
    const filteredWebtoons = filteredBy
      ? Object.keys(filteredBy).reduce(
          (wts, key) => this.filterContent(wts, key, filteredBy[key]),
          webtoons
        )
      : null;
    new components[className]({
      $target: $content,
      state: {
        ...state,
        webtoons: className !== "daysTop" ? filteredWebtoons : webtoons,
      },
      $props: {
        sortRanking: this.sortRanking,
        filterContent: this.filterContent,
      },
    });
  });
};

WebtoonGenre.prototype.setup = async function () {
  const { results: webtoons } = await getJson("webtoons");
  const koreaDay = getKoreaDay();
  this.state = {
    webtoons,
    contents: [
      {
        elementId: "wtMainBanner",
        className: "mainBanner",
        state: {
          filteredBy: {
            isMain: "home",
          },
        },
      },
      { elementId: "wtNavDetail", className: "navDetail", state: {} },
      { elementId: "wtSubBanner", className: "subBanner", state: {} },
      {
        elementId: "wtDaysTop",
        className: "daysTop",
        state: {
          title: "요일연재 TOP",
        },
      },
      {
        elementId: "wtNewWorkTop",
        className: "newWorkTop",
        state: {
          title: "기대신작 TOP",
          filteredBy: {
            status: "N",
          },
        },
      },
      {
        elementId: "wtRofanGenreTop",
        className: "genreTop",
        state: {
          title: "로판 TOP",
          filteredBy: {
            genre: "로판",
          },
        },
      },
      {
        elementId: "wtDramaGenreTop",
        className: "genreTop",
        state: {
          title: "드라마 TOP",
          filteredBy: {
            genre: "드라마",
          },
        },
      },
      {
        elementId: "wtDateTop",
        className: "dateTop",
        state: {
          title: "일간 랭킹 TOP",
          filteredBy: {
            days: koreaDay,
          },
        },
      },
      {
        elementId: "wtRecommendEvent",
        className: "recommendEvent",
        state: {
          title: "추천이벤트",
        },
      },
      { elementId: "wtFullButton", className: "fullButton", state: {} },
    ],
  };
};

WebtoonGenre.prototype.template = function () {
  const { contents } = this.state;
  return contents.reduce((tags, { elementId, className }) => {
    tags += `<li id="${elementId}" class="mainBox main__${className}"></li>`;
    return tags;
  }, "");
};

export default WebtoonGenre;
