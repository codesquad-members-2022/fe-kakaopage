import { createExtendsRelation, updateNodeClasses } from "../../utils.js";
import Component from "../Component.js";

function GenreList(target) {
  //   const genreName = event.target.dataset.genre;
  //   const genreContents = genres[category][genreName].screen(categoryResults);
  //   renderGenreContents(genreContents);

  this.target = target;
  this.state = {};

  this.setEvent = function () {
    this.addEvent("click", ".navGenre-item", ({ target }) => {
      const eventTarget = target.closest(".navGenre-item");
      updateNodeClasses(eventTarget, "selected");
    });
  };

  this.template = function () {
    const { genres } = this.state;
    return `
      <ul class="mainBox main__navGenre">
        ${genres.reduce((tags, { genre, name, selected }) => {
          tags += `
            <li class="navGenre-item ${selected ? "selected" : ""}" 
            data-genre="${genre}">
                ${name}
            </li>`;
          return tags;
        }, "")}
      </ul>
    `;
  };
}

createExtendsRelation(GenreList, Component);

export default GenreList;
