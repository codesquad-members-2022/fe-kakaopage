import Component from "../../../../Component.js";
import { createExtendsRelation } from "../../../../../utils.js";

function BoyGenre(target) {
  Component.call(this, target);
  this.render();
}

createExtendsRelation(BoyGenre, Component);

BoyGenre.prototype.template = function () {
  return `<div>BoyGenre</div>`;
};

export default BoyGenre;
