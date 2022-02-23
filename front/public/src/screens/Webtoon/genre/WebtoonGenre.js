import Component from "../../Component.js";
import { createExtendsRelation } from "../../../utils.js";

function WebtoonGenre(target) {
  Component.call(this, target);

  this.template = function () {
    return `<div>WebtoonGenre</div>`;
  };
  this.render();
}

createExtendsRelation(WebtoonGenre, Component);

export default WebtoonGenre;
