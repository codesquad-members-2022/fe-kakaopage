import Component from "../../Component.js";
import { createExtendsRelation } from "../../../utils.js";

function RomanceGenre(target) {
  Component.call(this, target);

  this.template = function () {
    return `<div>RomanceGenre</div>`;
  };
  this.render();
}

createExtendsRelation(RomanceGenre, Component);

export default RomanceGenre;
