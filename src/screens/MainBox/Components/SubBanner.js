import { createExtendsRelation } from "../../../utils.js";
import Component from "../../Component.js";

function SubBanner(target) {
  Component.call(this, target);
}

createExtendsRelation(SubBanner, Component);

SubBanner.prototype.template = function () {
  return `
  <div class="arrow">
    <span><</span>
  </div>
  <img
    class="subImg"
    src="https://dn-img-page.kakao.com/download/resource?kid=cOMNfP/hzp2fXqtDJ/Tswxss4NFzkbDtL6gdvBSK"
    alt="미슐랭스타"
  />
  <div class="arrow">
    <span>></span>
  </div>
`;
};

export default SubBanner;
