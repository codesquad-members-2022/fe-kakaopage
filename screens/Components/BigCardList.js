/**
 * BigCard BigCard
 */

import BigCard from "./BigCard.js";

const BigCardList = (title) => {
  const bigCardList = [{ title: "화산전생" }, { title: "캐슬" }];
  return `<li class="mainBox main__contents">
      <div class="contents">
        <div class="contents__header">
          <div class="contents__title">
            <span>${title}</span>
          </div>
          <div class="contents__more">
            <span>더보기 ></span>
          </div>
        </div>
        <div class="contents__body">
          <ul class="contentsBigCard">
            ${bigCardList.map((bigCard) => BigCard(bigCard)).join("")}
          </ul>
        </div>
      </div>
    </li>`;
};

export default BigCardList;
