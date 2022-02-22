import { $, createEl } from "../eventJS/util.js";
import { data } from "./data.js";

const createMainNav = (data) => {
  const nav = createEl("nav");
  nav.classList.add("main__nav__dow");
  nav.innerHTML = `
      <ul class="main__nav__dow--ul">
      ${data.week.map((day) => `<li>${day}</li>`).join("")}
      </ul>
  `;

  return nav;
};

const createMaincontainer = (toggleinfo, imgInfo) => {
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
    <li class="main__cartoonZone__cell">${imgInfo
      .map((imgData) => createImgCard(imgData))
      .join("")}</li> 
  </ul>
`;

  return containter;
};

const createImgCard = (data) => {
  return `
  <li class="main__cartoonZone__cell">
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
  </li>
`;
};

const createlist = (data, className) => {
  const UL = createEl("ul");
  UL.classList.add(className);
  UL.innerHTML = `${data.map((toggleStr) => `<li>${toggleStr}</li>`).join("")}`;
  return UL;
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
  createlist,
  toonGenreChecker,
  multiAppend,
};
