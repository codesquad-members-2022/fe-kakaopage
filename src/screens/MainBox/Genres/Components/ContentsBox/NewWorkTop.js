import { createExtendsRelation } from "../../../../../utils.js";
import ContentsBox from "../ContentsBox.js";
import BigCardList from "../BigCardList.js";

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
  const { webtoons } = this.state;
  const MAXIMUM_CARD_COUNT = 2;
  const sortedWebtoons = this.$props.sortRanking(webtoons);
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
