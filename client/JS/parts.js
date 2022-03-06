import { daysInfo, adsInfo } from "./dataEditor.js";
import {
  webtoonNavItems,
  daysNavItems,
  selectedNav,
  daysMenuNavItems,
} from "./navigator.js";
import { icons } from "./icons.js";

const getNav = (navItems) => {
  return navItems.reduce((preItem, postItem) => {
    return preItem + `<ul>${postItem}</ul>\n`;
  }, "");
};

const getAds = (info) => {
  let target = info.pre;
  let result = "";
  let count = 3;
  while (count !== 0) {
    result += /*html*/ `<img src="../IMG/${target.adImage}" alt="${target.number}">`;
    target = target.post;
    count--;
  }
  return result;
};

const ads =
  /*html*/
  `
  <section class="ads">
    <div class="ads__image">
      ${getAds(adsInfo.first)}  
      </div>
    <div class="ads__left"><i class="${icons.arrowCircle}left"></i></div>
    <div class="ads__right"><i class="${icons.arrowCircle}right"></i></div>
    <div class="ads__number">1 / ${adsInfo.number}</div>
  </section>
  `;

const webtoonNav =
  /*html*/
  `
  <nav class="webtoon__nav">
    ${getNav(webtoonNavItems)}
  </nav>
  `;

const dummy =
  /*html */
  `
  <section class="dummy">
    <span>DUMMY DUMMY DUMMY DUMMY DUMMY DUMMY DUMMY DUMMY</span>
  </section>
  `;

const newThings =
  /*html*/
  `
  <section class="new-things">
    <span>오늘</span>
    <span>이번 주</span>
    <span>이벤트 내용</span>
  </section>
  `;

const columnContent = ({ name, image, rank, views }) => {
  if (name === "") return /*html*/ `<div class="column-contents__empty"></div>`;
  const content =
    /*html*/
    `
      <div class="column-contents__content">
        <div class="column-contents__content--image">
          <div class="column-contents__content--picture">
            <img src="../IMG/${image}" alt="content image">
          </div>
          <div class="column-contents__content--info">
            <div class="column-contents__content--rank">${rank}위</div>
            <div class="column-contents__content--clock">
              <i class="${icons.history}"></i>
            </div>
          </div>
        </div>
          <div class="column-contents__content--name">${name}</div>
          <div class="column-contents__content--views">
            <span><i class="${icons.history}"></i>${views}만 명</span>
          </div>
        </div>
        `;
  return content;
};

const getEmptyColumnContents = (columnCount, targetDay) => {
  const emptyContentInfo = { name: "", image: "", rank: "", views: "" };
  const emptyContent = columnContent(emptyContentInfo);
  let result = "";
  let count = columnCount;
  let emptyCount = count - (targetDay.length % count);
  while (emptyCount !== 0 && emptyCount !== count) {
    result += emptyContent;
    emptyCount--;
  }
  return result;
};

const getColumContentsByDayMenu = (dayMenuNav, contentInfo) => {
  const content = columnContent(contentInfo);
  const nav = dayMenuNav.includes(`${icons.clock}`) ? "아이콘" : dayMenuNav;
  switch (nav) {
    case "전체":
      return content;
    case "웹툰":
      if (contentInfo.type === "웹툰") return content;
    case "아이콘":
      if (contentInfo.type === "웹툰" && contentInfo.now) return content;
    default:
      return "";
  }
};

const getColumnContents = (target) => {
  const targetDay = daysInfo[target];
  const dayMenuNav = selectedNav[".days__menu--nav"];
  const columnCount = 5;
  let result = targetDay.reduce((preInfo, postInfo) => {
    return preInfo + getColumContentsByDayMenu(dayMenuNav, postInfo);
  }, "");
  result += getEmptyColumnContents(columnCount, targetDay);
  return result;
};

const days =
  /*html*/
  `
  <section class="days">

    <nav class="days__nav">
      ${getNav(daysNavItems)}
    </nav>

    <div class="days__menu">
      <nav class="days__menu--nav">
        ${getNav(daysMenuNavItems)}
      </nav>
      <div class="days__menu--right">
        <span>모두 보기</span>
      </div>
    </div>

    <div class="column-contents">
      ${getColumnContents(selectedNav[".days__nav"])}
    </div>

  </section>
  `;

const listContents =
  /*html*/
  `
  <section class="list-contents">
    <div class="list-contents__menu">
      <span class="list-contents__menu--name">이름</span>
      <span class="list-contents__menu--count">(개수)</span>
      <span class="list-contents__menu--more">더보기</span>
    </div>
    <div class="list-contents__content">
      <span class="list-contents__content--image">
        <img src="../IMG/1.jpg" alt="content image">
      </span>
      <span class="list-contents__content--info">
        <div class="list-contents__content--title">컨텐츠 제목</div>
        <div class="list-contents__content--explain">컨텐츠 설명</div>
        <div class="list-contents__content--info-detail">
          <span class="list-contents__content-views">조회수</span>
          <span class="list-contents__content-author">작가명</span>
        </div>
      </span>
    </div>
  </section>
  `;

export {
  getAds,
  ads,
  webtoonNav,
  dummy,
  newThings,
  columnContent,
  getColumnContents,
  days,
  listContents,
};
