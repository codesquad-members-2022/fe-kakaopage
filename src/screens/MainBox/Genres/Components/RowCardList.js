import { createExtendsRelation } from "../../../../utils.js";
import { formatUserCount } from "../../../../modules/serviceUtils.js";
import Component from "../../../Component.js";

function RowCardList(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(RowCardList, Component);

RowCardList.prototype.template = function () {
  const { webtoons } = this.state;
  const templateWtCard = (webtoon) => {
    return `
    <li class="dateContent">
      <div class="contentRow">
        <div class="dateRank">${webtoon.ranking}</div>
        <div class="contentImgBox">
          <span class='content-waitFreeIcon'>
          ${webtoon.waitForFree ? "<i class='fas fa-clock'></i>" : "웹툰"}
          </span>
          <img
            src="${webtoon.imagePosterUrl}"
            alt="${webtoon.title}"
          />
        </div>
        <div class="contentInfo">
          <div class="info__titleInfo">
            ${
              webtoon.status
                ? `<span class="info__title-status ${
                    webtoon.status === "N" ? "red" : "blue"
                  }">${webtoon.status}</span>`
                : ""
            }
            ${
              webtoon.age
                ? '<span class="info__title-age info-age">15</span>'
                : ""
            }
            <span class="info__title">${webtoon.title}</span>
          </div>
          <div class="infoBody">
            <i class="fas fa-user"></i>
            <span>${formatUserCount(webtoon.userCount)}</span>
            <span class="span-bar">|</span>
            ${
              webtoon.waitForFree
                ? '<span>기다무웹툰</span><span class="span-bar"> | </span>'
                : ""
            }
            <span>${webtoon.genre.join(",")}</span>
            <span class="span-bar">|</span>
            <span>${webtoon.write ? webtoon.write + "," : ""}
            ${webtoon.paint ? webtoon.paint + "," : ""}${webtoon.originalAuthor}
            </span>
          </div>
          <div class="info-footer">
            <span>${webtoon.days.join(",")} 연재</span>
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
