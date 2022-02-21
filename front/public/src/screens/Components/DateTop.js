/**
 * CardInfoRow
 * CardInfoRow
 * CardInfoRow
 */

import CardInfoRow from "./CardInfoRow.js";

const DateTop = (webtoons) => {
  const dateTopCards = webtoons
    .sort((wt1, wt2) => {
      return wt2.rank - wt1.rank;
    })
    .slice(0, 3);
  return `
    <li class="mainBox main__contents">
      <div class="contents">
        <div class="contents__header">
          <div class="contents__title">
            <span>일간 랭킹 TOP</span>
          </div>
          <div class="contents__more">
            <span>더보기></span>
          </div>
        </div>
        <div class="contents__body">
          <ul class="contents__date">
            ${dateTopCards
              .map((card, index) => CardInfoRow(index + 1, card))
              .join("")}
          </ul>
        </div>
      </div>
    </li>`;
};

export default DateTop;
