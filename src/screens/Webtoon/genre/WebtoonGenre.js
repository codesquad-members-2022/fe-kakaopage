import Component from "../../Component.js";
import { createExtendsRelation } from "../../../utils.js";

function WebtoonGenre(target) {
  Component.call(this, target);
  this.render();
}

createExtendsRelation(WebtoonGenre, Component);

WebtoonGenre.prototype.template = function () {
  return `<div>WebtoonGenre</div>`;
};

export default WebtoonGenre;
