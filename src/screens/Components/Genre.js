import Component from "../Component.js";
import { createExtendsRelation } from "../../utils.js";

function Genre($target, state) {
  Component.call(this, $target, state);
}
createExtendsRelation(Genre, Component);

Genre.prototype.template = function () {
  const { name, genre, selected } = this.state;
  return `
    <li class="navGenre-item ${selected ? "selected" : ""}" 
    data-genre="${genre}">
        ${name}
    </li>
  `;
};

export default Genre;
