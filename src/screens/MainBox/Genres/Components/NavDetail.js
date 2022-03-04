import { createExtendsRelation } from "../../../../utils.js";
import Component from "../../../Component.js";

function NavDetail(target) {
  Component.call(this, target);
}

createExtendsRelation(NavDetail, Component);

NavDetail.prototype.template = function () {
  return `
  <div class="nav_detailBox">
    <div class="detailBox border-top-left">
      <span class="detailName">오늘 UP</span>
      <span class="detailNum">208</span>
    </div>
    <div class="detailBox">
      <span class="detailName">오늘 신작</span>
      <span class="detailNum">4</span>
    </div>
    <div class="detailBox border-top-right">
      <span class="detailName">오리지널</span>
      <span class="detailNum">2,328</span>
    </div>
  </div>
  <div class="nav_detailBox">
    <div class="detailBox border-bottom-left">
      <span class="detailName">완결까지 정주행</span>
    </div>
    <div class="detailBox">
      <span class="detailName">독립운동가 웹툰</span>
    </div>
    <div class="detailBox border-bottom-right">
      <span class="detailName">오늘 랭킹</span>
      <span class="detailNum">1위</span>
    </div>
  </div>
`;
};

export default NavDetail;
