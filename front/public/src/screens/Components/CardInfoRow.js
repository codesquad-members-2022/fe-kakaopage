import { createExtendsRelation, formatUserCount } from "../../utils.js";
import Component from "../Component.js";

function CardInfoRow(target, state) {
  Component.call(this, target, state);

  this.template = function () {
    const info = this.state;
    return `
    <li class="dateContent">
      <div class="contentRow">
        <div class="dateRank">${info.ranking}</div>
        <div class="contentImgBox">
          ${
            info.waitForFree
              ? "<span class='content-waitFreeIcon'><i class='fas fa-clock'></i></span>"
              : "<span>웹툰</span>"
          }
          <img
            src="${info.imagePosterUrl}"
            alt="${info.title}"
          />
        </div>
        <div class="contentInfo">
          <div class="info__titleInfo">
            ${
              info.status
                ? `<span class="info__title-status ${
                    info.status === "N" ? "red" : "blue"
                  }">${info.status}</span>`
                : ""
            }
            ${
              info.age ? '<span class="info__title-age info-age">15</span>' : ""
            }
            <span class="info__title">${info.title}</span>
          </div>
          <div class="infoBody">
            <i class="fas fa-user"></i>
            <span>${formatUserCount(info.userCount)}</span>
            <span class="span-bar">|</span>
            ${
              info.waitForFree
                ? '<span>기다무웹툰</span><span class="span-bar"> | </span>'
                : ""
            }
            <span>${info.genre.join(",")}</span>
            <span class="span-bar">|</span>
            <span>${info.write ? info.write + "," : ""}
            ${info.paint ? info.paint + "," : ""}${info.originalAuthor}
            </span>
          </div>
          <div class="info-footer">
            <span>${info.days.join(",")} 연재</span>
          </div>
        </div>
      </div>
    </li>`;
  };
}

createExtendsRelation(CardInfoRow, Component);

export default CardInfoRow;
