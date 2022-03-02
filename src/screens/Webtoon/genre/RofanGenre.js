import Component from "../../Component.js";
import { createExtendsRelation } from "../../../utils.js";

function RofanGenre(target) {
  Component.call(this, target);
  this.render();
}

createExtendsRelation(RofanGenre, Component);

RofanGenre.prototype.template = function () {
  return `<div>RofanGenre</div>`;
};

export default RofanGenre;
