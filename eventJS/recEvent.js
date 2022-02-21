import { createEl, $, remove, replaceInner, resetDefault } from "./util.js";
import {
  createMainNav,
  createMaincontainer,
  createImgCard,
  toonGenreChecker,
} from "../component/mainComponent.js";
import { data } from "../component/data.js";

const changeMainSecHome = (contentsChecker) => {
  remove(".main");

  data.genre.forEach((genre) => {
    const container = createMaincontainer(genre, "더보기");
    const toonData = toonGenreChecker(genre);
    toonData.forEach((cardinfo) => {
      container
        .querySelector(".main__cartoonZone")
        .appendChild(createImgCard(cardinfo));
    });

    $(".containEvery").appendChild(container);
  });

  contentsChecker = "홈";
};

const changeMainSecWoD = (contentsChecker) => {
  remove(".main");
  const container = createMaincontainer("", "전체(test)");

  // 해당 요소의 자식을 삭제하는 함수 작성해보자
  while (container.querySelector(".main--toggle--left").firstChild) {
    container.removeChild(container.firstChild);
  }

  const newToggleList = createEl(data);

  newToggleList.forEach((li) =>
    container.querySelector(".main--toggle--left").appendChild(li)
  );

  $(".containEvery").appendChild(container);
  contentsChecker = "요일연재";
};

export { changeMainSecHome, changeMainSecWoD };
