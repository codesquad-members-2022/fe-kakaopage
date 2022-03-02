import { createExtendsRelation } from "../../utils.js";
import ContentsBox from "./ContentsBox.js";
import RowCardList from "./RowCardList.js";

function DateTop(infoObject) {
  ContentsBox.call(this, infoObject);
}

createExtendsRelation(DateTop, ContentsBox);

DateTop.prototype.setup = function () {
  this.state.contentBody = `<ul id="wtDateTop" class="contents__date"></ul>`;
};

DateTop.prototype.mount = function () {
  const $dateTop = this.$target.querySelector("#wtDateTop");
  const { webtoons } = this.state;
  const { sortRanking } = this.$props;
  const MAXIMUM_CARD_COUNT = 3;

  const sliceWebtoons =
    webtoons.length === MAXIMUM_CARD_COUNT
      ? webtoons.slice(0, MAXIMUM_CARD_COUNT)
      : webtoons;

  const newWebtoons = sortRanking(sliceWebtoons).map((webtoon, idx) => ({
    ...webtoon,
    ranking: idx + 1,
  }));

  new RowCardList({
    $target: $dateTop,
    state: {
      webtoons: newWebtoons,
    },
  });
};

export default DateTop;
