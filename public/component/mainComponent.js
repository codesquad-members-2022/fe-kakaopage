import { domUtil } from "../eventJS/util.js";
import { data } from "./data.js";

const createDomEl = (tagType, className, innerHTML) => {
  const domElement = domUtil.createEl(tagType);
  domElement.classList.add(className);
  domElement.innerHTML = innerHTML;
  return domElement;
};

const getMainNavHtml = (data) => {
  return /* html */ `
      <ul class="main__nav__dow--ul">
      ${data.week.reduce(
        (listHtml, day) => (listHtml += `<li>${day}</li>`),
        ""
      )}
      </ul>
  `;
};

const getMainHtml = (imgInfo, toggleNav, toggleinfo, weekNav, weekNavinfo) => {
  return `
  ${hasWeekNav(weekNav, weekNavinfo) ?? ""}
  ${hasToggleNav(toggleNav, toggleinfo) ?? ""}
  <ul class="main__cartoonZone">
    ${imgInfo.reduce(
      (imgHtml, imgData) => (imgHtml += getImgCardHtml(imgData)),
      ""
    )}
  </ul>
`;
};

const getImgCardHtml = ({ imgUrl, title, info }, test) => {
  return /* html */ `
  <li class="main__cartoonZone__cell${test ?? ""}">
    <div class="main__cartoonZone--imageWrapper">
      <img
        src=${imgUrl}
        class="main__cartoonZone--image"
      />
      <div class="main__cartoonZone--imgTag">
        <span class="main__cartoonZone--imgTagLeft">TOP</span>
        <span class="main__cartoonZone--imgTagRight">인기</span>
      </div>
    </div>
    <div class="main__cartoonZone--info">
      <span class="main__cartoonZone--title">${title}</span>
      <span class="main__cartoonZone--description">
        ${info}
      </span>
    </div>
  </li>
`;
};

const getToonGenre = (toonGenre) =>
  data.toonData.filter((toonInfo) => toonInfo.genre === toonGenre);

const getIsHot = (isTrue) =>
  data.toonData.filter((toonInfo) => toonInfo.hot === isTrue);

const hasToggleNav = (isTrue, { left, right }) => {
  if (isTrue) {
    return /* html */ `<nav class="main__nav--toggle">
      <ul class="main--toggle--left">
        ${left.reduce((html, font) => (html += `<li>${font}</li>`), "")}
      </ul>
      <div class="main--toggle--right">${right}</div>
    </nav>`;
  }
};

const hasWeekNav = (isTrue, weekNavinfo) => {
  if (isTrue) {
    return /* html */ `<nav class="main__nav__dow">
      <ul class="main__nav__dow--ul">
      ${weekNavinfo.reduce(
        (listHtml, day) => (listHtml += `<li>${day}</li>`),
        ""
      )}
      </ul>
    </nav>
    `;
  }
};

export {
  createDomEl,
  getMainNavHtml,
  getMainHtml,
  getToonGenre,
  getImgCardHtml,
  getIsHot,
};