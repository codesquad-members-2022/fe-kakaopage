import { formatUserCount, createExtendsRelation } from "../../utils.js";
import Component from "../Component.js";

function MainBanner(target, state) {
  Component.call(this, target, state);

  const webtoon = JSON.parse(localStorage.getItem("webtoons")).filter(
    (wt) => wt.isMain[this.state.genre]
  )[0]; // 일단 한개만, 나중에 슬라이더

  this.template = function () {
    return `
        <li class="mainBox main__mainBanner">
            <div class="banner__imgBox">
                <img src="${webtoon.imageHorizontalUrl}" />
                <div class="imgBox__info">
                    <div class="infoTitle">
                        <span>${webtoon.title}</span>
                    </div>
                    <div class="infoBody">
                        <span class="info-event">${webtoon.event}</span>
                        <span class="info-category">
                            ${
                              webtoon.waitForFree
                                ? "<i class='fas fa-clock'></i>"
                                : ""
                            } 웹툰
                        </span>
                        <span class="span-bar"> | </span>
                        <span class="info-users">
                            <i class="fas fa-user"></i> ${formatUserCount(
                              webtoon.userCount
                            )}
                        </span>
                    </div>
                </div>
            </div>
            <div class="banner__message">
                <span>${webtoon.mainDesc}</span>
            </div>
            <div class="imgBox__order">
                <span class="orderNum">1</span>
                <span class="orderBar">/</span>
                <span class="orderNum">3</span>
            </div>
        </li>
        `;
  };
}

createExtendsRelation(MainBanner, Component);

export default MainBanner;
