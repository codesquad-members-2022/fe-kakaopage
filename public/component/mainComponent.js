import { domUtil } from "../eventJS/util.js";
import { data } from "./data.js";

const createDomEl = (tagType, className, innerHTML) => {
  const domElement = domUtil.createEl(tagType);
  domElement.classList.add(className);
  domElement.innerHTML = innerHTML;
  return domElement;
};

const getMainNavHtml = (data) => {
  return `
      <ul class="main__nav__dow--ul">
      ${data.week.reduce(
        (listHtml, day) => (listHtml += `<li>${day}</li>`),
        ""
      )}
      </ul>
  `;
};

const getMainHtml = (toggleinfo, imgInfo, classname) => {
  return `
  <nav class="main__nav--toggle ${classname ?? ""}">
    <ul class="main--toggle--left">
      <li>${toggleinfo.left}</li>
    </ul>
    <div class="main--toggle--right">${toggleinfo.right}</div>
  </nav>
  <ul class="main__cartoonZone">
    ${imgInfo.reduce(
      (imgHtml, imgData) => (imgHtml += getImgCardHtml(imgData)),
      ""
    )}
  </ul>
`;
};

const getImgCardHtml = (data) => {
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

const getlistHtml = (data) => {
  return `${data.reduce(
    (listHtml, toggleData) => (listHtml += `<li>${toggleData}</li>`),
    ""
  )}
  `;
};

const getToonGenre = (toonGenre) =>
  data.toonData.filter((toonInfo) => toonInfo.genre === toonGenre);

export {
  createDomEl,
  getMainNavHtml,
  getMainHtml,
  getlistHtml,
  getToonGenre,
  getImgCardHtml,
};
