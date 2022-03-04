import { createExtendsRelation } from "../../../../../utils.js";
import ContentsBox from "../ContentsBox.js";
import BigCardList from "./Components/BigCardList.js";

function NewWorkTop(infoObject) {
  ContentsBox.call(this, infoObject);
}

createExtendsRelation(NewWorkTop, ContentsBox);

NewWorkTop.prototype.setup = function () {
  this.state.contentBody = `
    <ul id="wtNewWorkTop" class="contents__bigCard"></ul>
  `;
};

NewWorkTop.prototype.mount = function () {
  const $contentsBigCard = this.$target.querySelector("#wtNewWorkTop");
  const {
    webtoons: { section_text_banner },
  } = this.state;
  const MAXIMUM_CARD_COUNT = 2;

  const FIRST_ELEMENT = 0;
  const { list } = section_text_banner[FIRST_ELEMENT];
  const sortedWebtoons = list.sort((b1, b2) => b1.item_order - b2.item_order);

  new BigCardList({
    $target: $contentsBigCard,
    state: {
      webtoons:
        sortedWebtoons.length > MAXIMUM_CARD_COUNT
          ? sortedWebtoons.slice(0, MAXIMUM_CARD_COUNT)
          : sortedWebtoons,
    },
  });
};

export default NewWorkTop;
