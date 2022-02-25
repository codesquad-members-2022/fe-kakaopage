import { daysInfo } from "../data/daysInfo.js";
import { selectedNav } from "./selectedNav.js";

export const ads =
  /*html*/
  `
  <section class="ads">
    <img class="ads__image" src="../IMG/2.jpg" alt="ads image">
  </section>
  `;

export const webtoonNav =
  /*html*/
  `
  <nav class="webtoon__nav">
    <ul>홈</ul>
    <ul>요일연재</ul>
    <ul>웹툰</ul>
    <ul>소년</ul>
    <ul>드라마</ul>
    <ul>로맨스</ul>
    <ul>로판</ul>
    <ul>액션무협</ul>
    <ul>BL</ul>
  </nav>
  `;

export const dummy =
  /*html */
  `
  <section class="dummy">
    <span>DUMMY DUMMY DUMMY DUMMY DUMMY DUMMY DUMMY DUMMY</span>
  </section>
  `;

export const newThings =
  /*html*/
  `
  <section class="new-things">
    <span>오늘</span>
    <span>이번 주</span>
    <span>이벤트 내용</span>
  </section>
  `;

export const columnContent = (contentInfo) => {
  const { name, image, rank, views } = contentInfo;
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
              <i class="fas fa-history"></i>
            </div>
          </div>
        </div>
        <div class="column-contents__content--name">${name}</div>
        <div class="column-contents__content--views">
          <i class="fas fa-user-circle"></i>
          <span>${views}만 명</span>
        </div>
      </div>
      `;
  return content;
};

export const columnContents = (targetDay) => {
  const emptyContentInfo = { name: "", image: "", rank: "", views: "" };
  const emptyContent = columnContent(emptyContentInfo);
  const columnCount = 5;
  let emptyCount = columnCount - (targetDay.length % columnCount);
  let result = "";
  targetDay.forEach((contentInfo) => (result += columnContent(contentInfo)));
  while (emptyCount !== 0 && emptyCount !== columnCount) {
    result += emptyContent;
    emptyCount--;
  }
  return result;
};

export const days =
  /*html*/
  `
  <section class="days">
    <nav class="days__nav">
      <ul>월</ul>
      <ul>화</ul>
      <ul>수</ul>
      <ul>목</ul>
      <ul>금</ul>
      <ul>토</ul>
      <ul>일</ul>
      <ul>완결</ul>
    </nav>

    <div class="days__menu">
      <nav class="days__menu--nav">
        <ul>전체</ul>
        <ul>웹툰</ul>
        <ul>
          <i class="fas fa-clock"></i>웹툰
        </ul>
      </nav>
      <div class="days__menu--right">
        <span>모두 보기</span>
      </div>
    </div>

    <div class="column-contents">
      ${columnContents(daysInfo[selectedNav[".days__nav"]])}
    </div>
  </section>
  `;

export const listContents =
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
