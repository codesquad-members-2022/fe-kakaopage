import { createExtendsRelation } from "../../../../../utils.js";
import ContentsBox from "../ContentsBox.js";
import CardList from "./Components/CardList.js";

function GenreTop(infoObject) {
  ContentsBox.call(this, infoObject);
}

createExtendsRelation(GenreTop, ContentsBox);

GenreTop.prototype.setup = function () {
  this.state.contentBody = `<ul id="wtGenreTop" class="contents__card"></ul>`;
};

GenreTop.prototype.mount = function () {
  const $contentsCard = this.$target.querySelector("#wtGenreTop");
  const {
    webtoons: { section_series },
  } = this.state;

  const FIRST_ELEMENT = 0;
  const { list } = section_series[FIRST_ELEMENT];
  const MAXIMUM_CARD_COUNT = 5;

  new CardList({
    $target: $contentsCard,
    state: {
      webtoons:
        list.length > MAXIMUM_CARD_COUNT
          ? list.slice(0, MAXIMUM_CARD_COUNT)
          : list,
    },
  });
};

export default GenreTop;
