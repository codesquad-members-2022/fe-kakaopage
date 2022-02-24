import Component from "../Component.js";
import { createExtendsRelation, getComponentsTemplate } from "../../utils.js";

import BigCard from "./BigCard.js";

function BigCardList() {
  const webtoons = JSON.parse(localStorage.getItem("webtoons"));
  const wtForBigCard = webtoons.filter(
    (wt) => wt.status === "N" && wt.imageHorizontalUrl
  );
  const bigCards = wtForBigCard
    .sort((c1, c2) => c2.rank - c1.rank)
    .slice(0, 2)
    .map((bigCardInfo) => new BigCard("_", bigCardInfo));

  this.template = function () {
    return `
      <ul class="contentsBigCard">
        ${getComponentsTemplate(bigCards)}
      </ul>`;
  };
}

createExtendsRelation(BigCardList, Component);

export default BigCardList;
