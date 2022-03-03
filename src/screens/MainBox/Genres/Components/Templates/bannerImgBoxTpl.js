import { formatUserCount } from "../../../../../modules/serviceUtils.js";

const bannerImgBoxTpl = (webtoon) => {
  const { title, userCount, waitForFree, mainDesc, imageHorizontalUrl } =
    webtoon;
  return `
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
    `;
};

export default bannerImgBoxTpl;
