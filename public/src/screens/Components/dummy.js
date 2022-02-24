import Component from "../Component.js";
import { createExtendsRelation } from "../../utils.js";

function Dummy(target) {
  Component.call(this, target);
  this.template = function () {
    return `<div>더미 페이지</div>`;
  };

  this.render();
}

createExtendsRelation(Dummy, Component);

export default Dummy;
