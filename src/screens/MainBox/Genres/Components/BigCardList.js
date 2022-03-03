import Component from "../../../Component.js";
import { createExtendsRelation } from "../../../../utils.js";
import BannerImage from "./BannerImage.js";

function BigCardList() {}

createExtendsRelation(BigCardList, Component);

BigCardList.prototype.template = function () {
  const webtoons = JSON.parse(localStorage.getItem("webtoons"));
  const wtForBigCard = webtoons.filter(
    (wt) => wt.status === "N" && wt.imageHorizontalUrl
  );
  const bigCardsTemplates = wtForBigCard
    .sort((c1, c2) => c2.rank - c1.rank)
    .slice(0, 2)
    .map((bigCardInfo) => new BannerImage("_", bigCardInfo))
    .map((bannerImage) => `<li class="bigCard">${bannerImage.template()}</li>`);

  return `
  <ul class="contentsBigCard">
    ${bigCardsTemplates.join("")}
  </ul>`;
};

export default BigCardList;
