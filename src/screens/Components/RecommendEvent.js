import { createExtendsRelation } from "../../utils.js";
import ContentsBox from "./ContentsBox.js";

function RecommendEvent(infoObject) {
  ContentsBox.call(this, infoObject);
}

createExtendsRelation(RecommendEvent, ContentsBox);

RecommendEvent.prototype.setup = function () {
  this.state.contentBody = `
    <div class="banner__imgBox">
        <img src="https://dn-img-page.kakao.com/download/resource?kid=E8yMN/hzp2nOI0PT/XjH8y8XBKB7K53kSq88HKk" alt="이그레트" />
        <div class="imgBox__order">
          <span class="orderArrow"><</span>
          <span class="orderNum">1</span>
          <span class="orderBar">/</span>
          <span class="orderNum">8</span>
          <span class="orderArrow">></span>
        </div>
    </div>
`;
};

export default RecommendEvent;
