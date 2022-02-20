import { createEl, $, remove, replaceInner, resetDefault } from "./util.js";
import {
  createMainNav,
  createMaincontainer,
  createImgCard,
} from "../component/mainComponent.js";
import { data } from "../component/data.js";

const chageMainSecHome = (contentsChecker) => {
  resetDefault();

  remove(".main");

  data.genre.forEach((genre) => {
    const container = createMaincontainer(genre, "더보기");
    console.log(container);

    console.log(data[genre]);
    data[genre].forEach((cardinfo) => {
      console.log(container.querySelector(".main__cartoonZone"));
      container
        .querySelector(".main__cartoonZone")
        .appendChild(createImgCard(cardinfo));
    });

    $(".containEvery").appendChild(container);
  });

  contentsChecker = "요일연재";
};

export { chageMainSecHome };
