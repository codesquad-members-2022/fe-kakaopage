import { createExtendsRelation } from "../../utils.js";
import ContentsBox from "./ContentsBox.js";
import CardList from "./CardList.js";

function GenreTop(infoObject) {
  ContentsBox.call(this, infoObject);
}

createExtendsRelation(GenreTop, ContentsBox);

GenreTop.prototype.setup = function () {
  this.state.contentBody = `<ul class="contentsCard"></ul>`;
};

GenreTop.prototype.mount = function () {
  const $contentsCard = this.$target.querySelector(".contentsCard");
  const { webtoons } = this.state;
  const MAXIMUM_CARD_COUNT = 5;

  new CardList({
    $target: $contentsCard,
    state: {
      webtoons:
        webtoons.length === MAXIMUM_CARD_COUNT
          ? webtoons.slice(0, MAXIMUM_CARD_COUNT)
          : webtoons,
    },
  });
};

export default GenreTop;
