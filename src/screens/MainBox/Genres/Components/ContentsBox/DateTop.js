import { createExtendsRelation } from "../../../../../utils.js";
import ContentsBox from "../ContentsBox.js";
import RowCardList from "./Components/RowCardList.js";

function DateTop(infoObject) {
  ContentsBox.call(this, infoObject);
}

createExtendsRelation(DateTop, ContentsBox);

DateTop.prototype.setup = function () {
  this.state.contentBody = `<ul id="wtDateTop" class="contents__date"></ul>`;
};

DateTop.prototype.mount = function () {
  const $dateTop = this.$target.querySelector("#wtDateTop");

  const {
    webtoons: { section_series },
  } = this.state;
  const FIRST_ELEMENT = 0;
  const { list } = section_series[FIRST_ELEMENT];

  const MAXIMUM_CARD_COUNT = 3;

  new RowCardList({
    $target: $dateTop,
    state: {
      webtoons:
        list.length > MAXIMUM_CARD_COUNT
          ? list.slice(0, MAXIMUM_CARD_COUNT)
          : list,
    },
  });
};

export default DateTop;
