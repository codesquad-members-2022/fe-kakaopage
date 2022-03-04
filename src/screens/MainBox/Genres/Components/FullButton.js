import { createExtendsRelation } from "../../../../utils.js";
import Component from "../../../Component.js";

function FullButton(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(FullButton, Component);

FullButton.prototype.template = function () {
  return `
    <button>
      <span><b>카카오페이지</b> 앱으로 보기 ></span>
    </button>
  `;
};

export default FullButton;
