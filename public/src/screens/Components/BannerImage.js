import { formatUserCount } from "../../utils.js";
import { createExtendsRelation } from "../../utils.js";
import Component from "../Component.js";

function BannerImage(target, state) {
  Component.call(this, target, state);

  this.template = function () {
    const { title, userCount, waitForFree, mainDesc, imageHorizontalUrl } =
      this.state;

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
      </div>
      <div class="banner__message">
        <span>${mainDesc}</span>
      </div>
  `;
  };
}

createExtendsRelation(BannerImage, Component);

export default BannerImage;
