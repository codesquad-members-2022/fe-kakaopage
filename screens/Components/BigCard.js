/**
 * use in MainBanner, BigCardList
 */

import { formatUserCount } from "../../src/utils.js";

const BigCard = ({
  title,
  userCount,
  waitForFree,
  mainDesc,
  imageHorizontalUrl,
}) => {
  return `            <li class="bigCard">
    <div class="main__mainBanner">
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
      </div>
      <div class="banner__message">
        <span>${mainDesc}</span>
      </div>
    </div>
  </li>`;
};

export default BigCard;
