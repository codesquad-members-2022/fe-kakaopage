import { formatUserCount } from "../../../../../modules/serviceUtils.js";
import { KAKAO_DATA_URL } from "../../../../../constants.js";

const bannerImgBoxTpl = (webtoon) => {
  const {
    title,
    read_count,
    bm_category,
    main_copy1,
    main_copy2,
    sub_copy1,
    sub_copy2,
    bg_img,
    badge_type,
  } = webtoon;

  return `
    <div class="banner__imgBox">
        <img src="${KAKAO_DATA_URL + bg_img}" alt=${title} />
        <div class="imgBox__info">
        <div class="infoTitle">
            <span>${
              main_copy1
                ? `<div>${main_copy1}</div><div>${main_copy2}</div>`
                : main_copy2
            }</span>
        </div>
        <div class="infoBody">
            <span class="info-event">${badge_type}</span>
            <span class="info-category">
            ${
              bm_category === "기다무웹툰" ? '<i class="fas fa-clock"></i>' : ""
            } 웹툰
            </span>
            <span class="span-bar"> | </span>
            <span class="info-users">
            <i class="fas fa-user"></i> ${formatUserCount(read_count)}
            </span>
        </div>
        </div>
        <div class="banner__message">
        <span>${
          sub_copy1
            ? `<div>${sub_copy1}</div><div>${sub_copy2}</div>`
            : sub_copy2
        }</span>
        </div>
    </div>
    `;
};

export default bannerImgBoxTpl;
