import Component from "../../Component.js";
import { createExtendsRelation } from "../../../utils.js";

function BoyGenre(target) {
  Component.call(this, target);

  this.template = function () {
    return `<div>BoyGenre</div>`;
  };
  this.render();
}

createExtendsRelation(BoyGenre, Component);

export default BoyGenre;
