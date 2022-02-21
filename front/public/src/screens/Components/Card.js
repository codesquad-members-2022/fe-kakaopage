import { formatUserCount } from "../../utils.js";

const Card = ({
  title,
  imageVerticalUrl,
  rank,
  adult,
  status,
  userCount,
  waitForFree,
}) => {
  return `<li class="card">
    <div class="card__imgBox">
      <img
        class="cardImg"
        src="${imageVerticalUrl}"
        alt="${title}"
      />
      <div class="imgInfo">
        <span class="rank">✭ ${rank}</span>
        ${
          waitForFree
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
        status
          ? `<span class="info-status ${
              status === "N" ? "red" : "blue"
            }">${status}</span>`
          : ""
      }
      ${adult ? `<span class="info-age">15</span>` : ""}
      <span class="info-user">
        <i class="fas fa-user"></i>
        <span>${formatUserCount(userCount)}</span>
      </span>
    </div>
  </li>`;
};

export default Card;
