import { createExtendsRelation } from "../../utils.js";
import Component from "../Component.js";

function FullButton(target) {
  Component.call(this, target);

  this.template = function () {
    return `
    <div class="main__button">
      <button>
        <span><b>카카오페이지</b> 앱으로 보기 ></span>
      </button>
    </div>`;
  };
}

createExtendsRelation(FullButton, Component);

export default FullButton;
