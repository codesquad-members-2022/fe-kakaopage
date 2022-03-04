import { createExtendsRelation } from "../../../../../../utils.js";
import { formatUserCount } from "../../../../../../modules/serviceUtils.js";
import Component from "../../../../../Component.js";
import { KAKAO_DATA_URL } from "../../../../../../constants.js";
import badgeInfo from "./constants/badgeInfo.js";

function RowCardList(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(RowCardList, Component);

RowCardList.prototype.template = function () {
  const { webtoons } = this.state;

  const { badgeSpan, badgeBgColor } = badgeInfo;

  const templateWtCard = (webtoon) => {
    return `
    <li class="dateContent">
      <div class="contentRow">
        <div class="dateRank">${webtoon.rank}</div>
        <div class="contentImgBox">
          <span class='content-waitFreeIcon'>
          ${webtoon.waitfree === "Y" ? "<i class='fas fa-clock'></i>" : "웹툰"}
          </span>
          <img
            src="${KAKAO_DATA_URL + webtoon.thumb_img}"
            alt="${webtoon.title}"
          />
        </div>
        <div class="contentInfo">
          <div class="info__titleInfo">
          ${
            webtoon.badge
              ? `<span class="info-status ${badgeBgColor[webtoon.badge]}">${
                  badgeSpan[webtoon.badge]
                }</span>`
              : ""
          }
            ${
              webtoon.age_grade
                ? `<span class="info__title-age info-age">${webtoon.age_grade}</span>`
                : ""
            }
            <span class="info__title">${webtoon.title}</span>
          </div>
          <div class="infoBody">
            <i class="fas fa-user"></i>
            <span>${formatUserCount(webtoon.read_count)}</span>
            <span class="span-bar">|</span>
            ${
              webtoon.waitfree
                ? '<span>기다무웹툰</span><span class="span-bar"> | </span>'
                : ""
            }
            <span>${webtoon.sub_category_title}</span>
            <span class="span-bar">|</span>
            <span>${webtoon.publisher ? webtoon.publisher : ""}
            </span>
          </div>
          <div class="info-footer">
            <span>${webtoon.pubperiod} 연재</span>
          </div>
        </div>
      </div>
    </li>`;
  };

  return webtoons.reduce((tags, wt) => {
    tags += templateWtCard(wt);
    return tags;
  }, "");
};

export default RowCardList;
