import Component from "../../Component.js";
import { createExtendsRelation } from "../../../utils.js";

function RofanGenre(target) {
  Component.call(this, target);

  this.template = function () {
    return `<div>RofanGenre</div>`;
  };
  this.render();
}

createExtendsRelation(RofanGenre, Component);

export default RofanGenre;
