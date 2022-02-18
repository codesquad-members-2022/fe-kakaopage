import { formatUserCount } from "../../src/utils.js";

const CardInfoRow = (ranking, webtoon) => {
  return `
    <li class="dateContent">
    <div class="contentRow">
      <div class="dateRank">${ranking}</div>
      <div class="contentImgBox">
        ${
          webtoon.waitForFree
            ? "<span class='content-waitFreeIcon'><i class='fas fa-clock'></i></span>"
            : "<span>웹툰</span>"
        }
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
          <span class="info__title"
            >${webtoon.title}</span
          >
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
          <span>${webtoon.write ? webtoon.write + "," : ""}${
    webtoon.paint ? webtoon.paint + "," : ""
  }${webtoon.originalAuthor}</span>
        </div>
        <div class="info-footer">
          <span>${webtoon.days.join(",")} 연재</span>
        </div>
      </div>
    </div>
  </li>`;
};

export default CardInfoRow;
