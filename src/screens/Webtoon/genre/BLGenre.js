import Component from "../../Component.js";
import { createExtendsRelation } from "../../../utils.js";

function BLGenre(target) {
  Component.call(this, target);

  this.template = function () {
    return `<div>BLGenre</div>`;
  };
  this.render();
}

createExtendsRelation(BLGenre, Component);

export default BLGenre;
