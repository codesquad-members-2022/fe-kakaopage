/**
 * CardInfoRow
 * CardInfoRow
 * CardInfoRow
 */

import CardInfoRow from "./CardInfoRow.js";

const DateTop = () => {
  const dateTopCards = [
    { title: "흑막을 버리는 데 실패했다" },
    { title: "이번 생은 가주가 되겠습니다" },
    { title: "남주를 주웠더니 남편이 생겨버렸다" },
  ];
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
            ${dateTopCards.map((card) => CardInfoRow(card)).join("")}
          </ul>
        </div>
      </div>
    </li>`;
};

export default DateTop;
