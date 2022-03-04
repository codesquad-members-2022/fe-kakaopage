import { createExtendsRelation } from "../../../../../utils.js";
import { getKoreaDays, getDay } from "../../../../../modules/serviceUtils.js";
import ContentsBox from "../ContentsBox.js";
import CardList from "./Components/CardList.js";
import DaysList from "./Components/DaysList.js";

function DaysTop(infoObject) {
  ContentsBox.call(this, infoObject);
}

createExtendsRelation(DaysTop, ContentsBox);

DaysTop.prototype.setup = function () {
  this.state.selected = getDay();
  this.state.contentBody = `
    <ul id="wtDaysTopNav" class="contents__daysNav"></ul>
    <ul id="wtDaysTopCards" class="contents__card"></ul>
  `;
};

DaysTop.prototype.mount = function () {
  const $contentNav = this.$target.querySelector("#wtDaysTopNav");
  const $contentsCard = this.$target.querySelector("#wtDaysTopCards");

  const days = getKoreaDays();
  const MAXIMUM_CARD_COUNT = 10;

  const {
    webtoons: { section_week_top },
    selected: selectedDay,
  } = this.state;

  const FIRST_ELEMENT = 0;
  const { list } = section_week_top[FIRST_ELEMENT];
  const filteredWebtoons = list.find(({ day }) => day === +selectedDay).list;

  new DaysList({
    $target: $contentNav,
    state: {
      days,
      selected: selectedDay,
    },
    $props: {
      updateDay: this.updateDay.bind(this),
    },
  });

  new CardList({
    $target: $contentsCard,
    state: {
      webtoons:
        filteredWebtoons.length > MAXIMUM_CARD_COUNT
          ? filteredWebtoons.slice(0, MAXIMUM_CARD_COUNT)
          : filteredWebtoons,
    },
  });
};

DaysTop.prototype.updateDay = function (day) {
  this.setState({ selected: day });
};

export default DaysTop;
