import Component from "../../../Component.js";
import { createExtendsRelation } from "../../../../utils.js";

function RomanceGenre(target) {
  Component.call(this, target);
  this.render();
}

createExtendsRelation(RomanceGenre, Component);

RomanceGenre.prototype.template = function () {
  return `<div>RomanceGenre</div>`;
};

export default RomanceGenre;
