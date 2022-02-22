/**
 * Days Nav
 * CardList
 * CardList
 */

import Card from "./Card.js";
import Component from "../Component.js";
import { createExtendsRelation } from "../../utils.js";

function DaysList(target, state) {
  Component.call(this, target, state);

  this.template = function () {
    const webtoons = JSON.parse(localStorage.getItem("webtoons"));
    const cardList = webtoons.filter((webtoon) =>
      webtoon.days.includes(this.state.koreaDay)
    );
    const sliceCardList = cardList.slice(
      0,
      this.state.count ? this.state.count : cardList.length
    );

    const cards = sliceCardList.map((cardInfo) => {
      const card = new Card("_", cardInfo);
      return card.template();
    });
    return `${cards.join("")}`;
  };
}

createExtendsRelation(DaysList, Component);

export default DaysList;
