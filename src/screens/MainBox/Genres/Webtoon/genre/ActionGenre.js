import Component from "../../../../Component.js";
import { createExtendsRelation } from "../../../../../utils.js";

function ActionGenre(target) {
  Component.call(this, target);
  this.render();
}

createExtendsRelation(ActionGenre, Component);

ActionGenre.prototype.template = function () {
  return `<div>ActionGenre</div>`;
};

export default ActionGenre;
