import { createExtendsRelation } from "../../../utils.js";
import Component from "../../Component.js";

function GenreList(infoObject) {
  Component.call(this, infoObject);
}
createExtendsRelation(GenreList, Component);

GenreList.prototype.setEvent = function () {
  const { updateGenre, clearCarousel } = this.$props;

  const handleAddEvent = ({ target }) => {
    const $eventTarget = target.closest(".navGenre-item");
    updateGenre($eventTarget.dataset.genre);
    clearCarousel();
  };

  this.addEvent("click", ".navGenre-item", handleAddEvent);
};

GenreList.prototype.template = function () {
  const { genres, selected } = this.state;
  return genres.reduce((tags, gInfo) => {
    tags += `
          <li class="navGenre-item ${
            gInfo.genre === selected ? "selected" : ""
          }"
          data-genre="${gInfo.genre}">
              ${gInfo.name}
          </li>`;
    return tags;
  }, "");
};

export default GenreList;
