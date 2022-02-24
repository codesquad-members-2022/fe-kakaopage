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

const getToonGenre = (toonGenre) =>
  data.toonData.filter((toonInfo) => toonInfo.genre === toonGenre);

const getIsHot = (isTrue) =>
  data.toonData.filter((toonInfo) => toonInfo.hot === isTrue);

const hasToggleNav = (isTrue, toggleInfo) => {
  if (isTrue) {
    return `<nav class="main__nav--toggle">
      <ul class="main--toggle--left">
        ${toggleInfo.left.reduce(
          (html, font) => (html += `<li>${font}</li>`),
          ""
        )}
      </ul>
      <div class="main--toggle--right">${toggleInfo.right}</div>
    </nav>`;
  }
};

const hasWeekNav = (isTrue, weekNavinfo) => {
  if (isTrue) {
    return `<nav class="main__nav__dow">
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
