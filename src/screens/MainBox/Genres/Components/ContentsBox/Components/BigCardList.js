import Component from "../../../../../Component.js";
import { formatUserCount } from "../../../../../../modules/serviceUtils.js";
import { createExtendsRelation } from "../../../../../../utils.js";

function BigCardList(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(BigCardList, Component);

BigCardList.prototype.template = function () {
  const { webtoons } = this.state;

  const templateWtBigCard = (webtoon) => {
    const { title, userCount, waitForFree, mainDesc, imageHorizontalUrl } =
      webtoon;

    return `
      <li class="bigCard">
        <div class="banner__imgBox">
          <img src="${imageHorizontalUrl}" alt=${title} />
          <div class="imgBox__info">
            <div class="infoTitle">
              <span>${title}</span>
            </div>
            <div class="infoBody">
              <span class="info-event">NEW</span>
              <span class="info-category">
                ${waitForFree ? '<i class="fas fa-clock"></i>' : ""} 웹툰
              </span>
              <span class="span-bar"> | </span>
              <span class="info-users">
                <i class="fas fa-user"></i> ${formatUserCount(userCount)}
              </span>
            </div>
          </div>
          <div class="banner__message">
            <span>${mainDesc}</span>
          </div>
        </div>
      </li>
      `;
  };

  return webtoons.reduce((tags, wt) => {
    tags += templateWtBigCard(wt);
    return tags;
  }, "");
};

export default BigCardList;
