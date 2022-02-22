import { createExtendsRelation, updateNodeClasses } from "../../utils.js";
import Component from "../Component.js";

function GenreList(target) {
  Component.call(this, target);

  this.setEvent = function () {
    this.addEvent("click", ".navGenre-item", ({ target }) => {
      const eventTarget = target.closest(".navGenre-item");
      updateNodeClasses(eventTarget, "selected");
    });
  };

  this.template = function () {
    const { genres } = this.state;
    return `
      <ul class="${genres.length ? "mainBox mainNav" : ""} main__navGenre">
        ${genres.reduce((tags, { genre, name, selected }) => {
          tags += `
            <li class="navGenre-item ${selected ? "selected" : ""}" 
            data-genre="${genre}">
                ${name}
            </li>`;
          return tags;
        }, "")}
      </ul>
      <ul class="main__contentsBox"></ul>
    `;
  };
}

createExtendsRelation(GenreList, Component);

export default GenreList;
