import CardInfoRow from "./CardInfoRow.js";
import { createExtendsRelation } from "../../utils.js";
import { getComponentsTemplate } from "../../serviceUtils.js";
import Component from "../Component.js";

function DateTop(target, state) {
  Component.call(this, target, state);
}

createExtendsRelation(DateTop, Component);

DateTop.prototype.template = function () {
  const { koreaDay } = this.state;
  const webtoons = JSON.parse(localStorage.getItem("webtoons"));
  const dateTopCards = webtoons
    .filter((wt) => wt.days.includes(koreaDay))
    .sort((wt1, wt2) => wt2.rank - wt1.rank)
    .slice(0, 3)
    .map(
      (card, index) => new CardInfoRow("_", { ...card, ranking: index + 1 })
    );
  return `
  <ul class="contents__date">
    ${getComponentsTemplate(dateTopCards)}
  </ul>`;
};

export default DateTop;
