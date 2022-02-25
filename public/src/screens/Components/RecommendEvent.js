import { createExtendsRelation } from "../../utils.js";
import Component from "../Component.js";

function RecommendEvent(target, state) {
  Component.call(this, target, state);
  this.template = function () {
    return `
        <div class="banner__imgBox">
          <img src="https://dn-img-page.kakao.com/download/resource?kid=E8yMN/hzp2nOI0PT/XjH8y8XBKB7K53kSq88HKk" alt="이그레트" />
          <div class="imgBox__order">
            <span class="orderArrow"><</span>
            <span class="orderNum">1</span>
            <span class="orderBar">/</span>
            <span class="orderNum">8</span>
            <span class="orderArrow">></span>
          </div>
        </div>`;
  };
}

createExtendsRelation(RecommendEvent, Component);

export default RecommendEvent;
