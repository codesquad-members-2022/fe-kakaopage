import Component from "../../../../../Component.js";
import { createExtendsRelation } from "../../../../../../utils.js";
import bannerImgBoxTpl from "../../Templates/bannerImgBoxTpl.js";

function BigCardList(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(BigCardList, Component);

BigCardList.prototype.template = function () {
  const { webtoons } = this.state;

  const templateWtBigCard = (webtoon) => {
    return `
      <li class="bigCard">
        ${bannerImgBoxTpl(webtoon)}
      </li>
      `;
  };

  return webtoons.reduce((tags, wt) => {
    tags += templateWtBigCard(wt);
    return tags;
  }, "");
};

export default BigCardList;
