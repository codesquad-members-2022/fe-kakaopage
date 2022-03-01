import { createExtendsRelation, updateNodeClasses } from "../../utils.js";
import Component from "../Component.js";
import categories from "../../categories.js";

function GenreList(target, state) {
  Component.call(this, target, state);
}
createExtendsRelation(GenreList, Component);

GenreList.prototype.render = function () {
  const { category, genre } = this.state;
  this.target.innerHTML = this.template();
  const contentsBox = document.querySelector(".main__contentsBox");
  new categories[category][genre](contentsBox);
  this.removeEvent();
  this.setEvent();
};

GenreList.prototype.setEvent = function () {
  this.addEvent("click", ".navGenre-item", ({ target }) => {
    const eventTarget = target.closest(".navGenre-item");
    updateNodeClasses(eventTarget, "selected");
    this.setState({ genre: eventTarget.dataset.genre });
  });
};

GenreList.prototype.template = function () {
  const { genres, genre } = this.state;
  return `
    <ul class="${genres.length ? "mainBox mainNav" : ""} main__navGenre">
      ${genres.reduce((tags, gInfo) => {
        tags += `
          <li class="navGenre-item ${gInfo.genre === genre ? "selected" : ""}" 
          data-genre="${gInfo.genre}">
              ${gInfo.name}
          </li>`;
        return tags;
      }, "")}
    </ul>
    <ul class="main__contentsBox"></ul>
  `;
};

export default GenreList;
