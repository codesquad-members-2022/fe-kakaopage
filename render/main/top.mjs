import { $ } from "../../util/util.mjs";
import {
  makeCardTypeOne,
  makeCardTypeThree,
  makeCardTypeTwo,
  makeCardTypeZero,
} from "./items.mjs";

const renderTopItems = (info) => {
  renderTopHeader(info.category);
  const topList = document.querySelectorAll(".main__top");
  let data = info.data;
  if (info.divByDay) {
    renderTopDailyTap();
    data = info.data[(new Date().getDay() + 6) % 7];
  }
  topList.forEach((val, ind) => {
    if (ind === topList.length - 1) {
      val.innerHTML += renderItems(info.cardStyle, data);
    }
  });
};

const renderTopHeader = (headerName) => {
  if (headerName) {
    $(".main__inner").innerHTML += /* html */ `
    <div class="main__top">
      <div class="top__inner">
        <div class="top__header">
          <div class="top__title">
            ${headerName}
          </div>
          <div class="flex-blank"></div>
          <a href="#" class="view-more">더보기 ></a>
        </div>
      </div>
    </div>
    `;
  } else {
    $(".main__inner").innerHTML += /* html */ `
    <div class="main__top">
      <div class="top__inner">
      </div>
    </div>
    `;
  }
};

const renderTopDailyTap = () => {
  const topList = document.querySelectorAll(".top__inner");
  topList.forEach((val, ind) => {
    if (ind === topList.length - 1) {
      val.innerHTML += /* html */ `
        <ul class="dailyTop__tabs">
          <li class="dailyTop__tab">월</li>
          <li class="dailyTop__tab">화</li>
          <li class="dailyTop__tab">수</li>
          <li class="dailyTop__tab">목</li>
          <li class="dailyTop__tab">금</li>
          <li class="dailyTop__tab">토</li>
          <li class="dailyTop__tab">일</li>
          <li class="dailyTop__tab">완결</li>
        </ul>`;
    }
  });
  const today = new Date();
  const $tab = [...document.querySelectorAll(".dailyTop__tab")];
  $tab[(today.getDay() + 6) % 7].classList.add(
    "selected-color",
    "selected-box"
  );
};

const renderItems = (style, data) => {
  switch (style) {
    case 0:
      return makeCardTypeZero(data);
    case 1:
      return makeCardTypeOne(data);
    case 2:
      return makeCardTypeTwo(data);
    case 3:
      return makeCardTypeThree(data);
    default:
      return;
  }
};
export { renderTopItems };
