import { formatUserCount } from "../../../../../../modules/serviceUtils.js";
import { createExtendsRelation } from "../../../../../../utils.js";
import Component from "../../../../../Component.js";
import { KAKAO_DATA_URL } from "../../../../../../constants";
import badgeInfo from "./constants/badgeInfo.js";

function CardList(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(CardList, Component);

CardList.prototype.template = function () {
  const { webtoons } = this.state;

  const templateWtCard = (webtoon) => {
    const {
      title,
      image,
      rank,
      rating,
      age_grade,
      badge,
      read_count,
      waitfree,
    } = webtoon;

    const { badgeSpan, badgeBgColor } = badgeInfo;

    return `<li class="card">
      <div class="card__imgBox">
        <img
          class="cardImg"
          src="${KAKAO_DATA_URL + image}"
          alt="${title}"
        />
        <div class="imgInfo">
          <span class="rank">${
            rank > 0 ? `${rank}위` : `✭ ${rating.toFixed(1)}`
          }</span>
          ${
            waitfree === "Y"
              ? '<span><i class="fas fa-clock"></i></span>'
              : "<span>웹툰</span>"
          }
        </div>
      </div>
      <div class="card__title">
        <span>${title}</span>
      </div>
      <div class="card__info">
        ${
          badge
            ? `<span class="info-status ${badgeBgColor[badge]}">${badgeSpan[badge]}</span>`
            : ""
        }
        ${age_grade !== 0 ? `<span class="info-age">${age_grade}</span>` : ""}
        <span class="info-user">
          <i class="fas fa-user"></i>
          <span>${formatUserCount(read_count)}</span>
        </span>
      </div>
    </li>`;
  };

  return webtoons.reduce((tags, wt) => {
    tags += templateWtCard(wt);
    return tags;
  }, "");
};

export default CardList;
