import Component from "../../../Component.js";
import { createExtendsRelation } from "../../../../utils.js";

function BLGenre(target) {
  Component.call(this, target);
  this.render();
}

createExtendsRelation(BLGenre, Component);

BLGenre.prototype.template = function () {
  return `<div>BLGenre</div>`;
};

export default BLGenre;
