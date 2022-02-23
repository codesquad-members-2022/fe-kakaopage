import Component from "../../Component.js";
import { createExtendsRelation } from "../../../utils.js";

function DramaGenre(target) {
  Component.call(this, target);

  this.template = function () {
    return `<div>DramaGenre</div>`;
  };
  this.render();
}

createExtendsRelation(DramaGenre, Component);

export default DramaGenre;
