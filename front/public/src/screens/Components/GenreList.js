import { createExtendsRelation, updateNodeClasses } from "../../utils.js";
import Component from "../Component.js";
import ActionGenre from "../Webtoon/genre/ActionGenre.js";
import BLGenre from "../Webtoon/genre/BLGenre.js";
import BoyGenre from "../Webtoon/genre/BoyGenre.js";
import DaysGenre from "../Webtoon/genre/DaysGenre.js";
import DramaGenre from "../Webtoon/genre/DramaGenre.js";
import HomeGenre from "../Webtoon/genre/HomeGenre.js";
import RofanGenre from "../Webtoon/genre/RofanGenre.js";
import RomanceGenre from "../Webtoon/genre/RomanceGenre.js";
import WebtoonGenre from "../Webtoon/genre/WebtoonGenre.js";

function GenreList(target, state) {
  Component.call(this, target, state);

  this.state = {
    ...state,
    screens: {
      home: HomeGenre,
      days: DaysGenre,
      webtoon: WebtoonGenre,
      boy: BoyGenre,
      drama: DramaGenre,
      romance: RomanceGenre,
      rofan: RofanGenre,
      action: ActionGenre,
      bl: BLGenre,
    },
  };

  this.setEvent = function () {
    this.addEvent("click", ".navGenre-item", ({ target }) => {
      const contentsBox = document.querySelector(".main__contentsBox");
      const eventTarget = target.closest(".navGenre-item");
      updateNodeClasses(eventTarget, "selected");
      new this.state.screens[eventTarget.dataset.genre](contentsBox);
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
