import Component from "../../Component.js";
import { createExtendsRelation } from "../../../utils.js";

function ActionGenre(target) {
  Component.call(this, target);

  this.template = function () {
    return `<div>ActionGenre</div>`;
  };
  this.render();
}

createExtendsRelation(ActionGenre, Component);

export default ActionGenre;
