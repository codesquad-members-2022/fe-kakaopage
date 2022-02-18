/**
 * Days Nav
 * CardList
 * CardList
 */

import Card from "./Card.js";

const DaysList = (day, webtoons, count) => {
  const cardList = webtoons
    .filter((webtoon) => webtoon.days.includes(day))
    .slice(0, count ? count : cardList.length);

  return `
           ${cardList.map((card) => Card(card)).join("")}
         `;
};

export default DaysList;
