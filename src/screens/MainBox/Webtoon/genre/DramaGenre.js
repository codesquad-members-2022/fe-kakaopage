import Component from "../../../Component.js";
import { createExtendsRelation } from "../../../../utils.js";

function DramaGenre(target) {
  Component.call(this, target);
  this.render();
}

createExtendsRelation(DramaGenre, Component);

DramaGenre.prototype.template = function () {
  return `<div>DramaGenre</div>`;
};

export default DramaGenre;
