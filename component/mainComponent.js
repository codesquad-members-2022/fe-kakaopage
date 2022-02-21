import { $, createEl } from "../eventJS/util.js";
import { data } from "./data.js";

const createMainNav = (data) => {
  const nav = createEl("nav");
  nav.classList.add("main__nav__dow");
  nav.innerHTML = `
      <ul class="main__nav__dow--ul">
      </ul>
  `;

  data.week.forEach((day) => {
    const list = createEl("li");
    list.textContent = day;
    nav.querySelector(".main__nav__dow--ul").appendChild(list);
  });

  return nav;
};

const createMaincontainer = (toggleinfo) => {
  const containter = createEl("section");
  containter.classList.add("main");
  containter.innerHTML = `
  <nav class="main__nav--toggle">
    <ul class="main--toggle--left">
      <li>${toggleinfo.left}</li>
    </ul>
    <div class="main--toggle--right">${toggleinfo.right}</div>
  </nav>
  <ul class="main__cartoonZone">
  </ul>
`;
  return containter;
};

const createImgCard = (data) => {
  const imgCard = createEl("li");
  imgCard.classList.add("main__cartoonZone__cell");
  imgCard.innerHTML = `
  <div class="main__cartoonZone--imageWrapper">
    <img
      src=${data.imgUrl}
      class="main__cartoonZone--image"
    />
    <div class="main__cartoonZone--imgTag">
      <span class="main__cartoonZone--imgTagLeft">TOP</span>
      <span class="main__cartoonZone--imgTagRight">인기</span>
    </div>
  </div>
  <div class="main__cartoonZone--info">
    <span class="main__cartoonZone--title">${data.title}</span>
    <span class="main__cartoonZone--description">
      ${data.info}
    </span>
  </div>
`;

  return imgCard;
};

const createlist = (data) => {
  const listArr = data.toggleLeft.reduce((acc, toggleFont) => {
    const list = createEl("li");
    list.textContent = toggleFont;
    acc.push(list);
    return acc;
  }, []);

  return listArr;
};

const toonGenreChecker = (toonGenre) =>
  data.toonData.filter((toonInfo) => toonInfo.genre === toonGenre);

const multiAppend = (data, parent, className, creatingFunc) => {
  data.forEach((el) => {
    parent.querySelector(className).appendChild(creatingFunc(el));
  });
};

export {
  createMainNav,
  createMaincontainer,
  createImgCard,
  toonGenreChecker,
  multiAppend,
};