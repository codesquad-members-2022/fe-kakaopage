import {
  createEl,
  $,
  remove,
  removeAllChild,
  replaceInner,
  resetDefault,
} from "./util.js";
import {
  createMainNav,
  createMaincontainer,
  createImgCard,
  toonGenreChecker,
  multiAppend,
} from "../component/mainComponent.js";
import { data } from "../component/data.js";

const changeMainSecHome = (contentsChecker) => {
  remove(".main");

  const containers = data.genre.reduce((containersArr, genre) => {
    containersArr.push(createMaincontainer({ left: genre, right: "더보기" }));
    return containersArr;
  }, []);

  containers.forEach((container) => {
    const getDataByGenre = toonGenreChecker(
      container.querySelector(".main--toggle--left").firstElementChild
        .textContent
    );
    multiAppend(getDataByGenre, container, ".main__cartoonZone", createImgCard);
    $(".containEvery").appendChild(container);
  });

  contentsChecker = "홈";
};

const changeMainSecWoD = (contentsChecker) => {
  remove(".main");
  const container = createMaincontainer({ left: "", right: "전체(test)" });

  removeAllChild(container, ".main--toggle--left"); // 해당 요소의 자식을 삭제하는 함수 작성해보자

  data.toggleLeft.forEach((toggleinfo) => {
    const newToggleList = createEl("li");
    newToggleList.textContent = toggleinfo;
    container.querySelector(".main--toggle--left").appendChild(newToggleList);
  });

  const weekendNav = createMainNav(data);
  container.insertBefore(
    weekendNav,
    container.querySelector(".main__nav--toggle")
  );

  multiAppend(data.toonData, container, ".main__cartoonZone", createImgCard);

  $(".containEvery").appendChild(container);
  contentsChecker = "요일연재";
};

export { changeMainSecHome, changeMainSecWoD };
