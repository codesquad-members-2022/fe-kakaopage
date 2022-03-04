import Component from "../../../Component.js";
import { createExtendsRelation } from "../../../../utils.js";

function Dummy(target) {
  Component.call(this, target);
  this.render();
}

createExtendsRelation(Dummy, Component);

Dummy.prototype.template = function () {
  return `<div>더미 페이지</div>`;
};

export default Dummy;
