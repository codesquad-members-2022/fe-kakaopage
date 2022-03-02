import {
  $,
  addComponent,
  toggleList,
  getToday,
  getJson as getJsons,
} from "./dom-lib.js";
import { headerMenu } from "./component/header-menu.js";
import { category } from "./component/category.js";
import { empty } from "./component/empty.js";
import { jumbotron } from "./component/jumbotron.js";
import { gridMenu } from "./component/grid-menu.js";
import { adBanner } from "./component/ad-banner.js";
import { footerInfo } from "./component/footer-info.js";
import { dayPage } from "./component/day-page.js";
import { gridList } from "./component/grid-list.js";
import { toonMain } from "./component/toon-main.js";

const menuData = ["home", "toon", "novel", "vod", "broadcast", "book"];
const dayPageList = ["월", "화", "수", "목", "금", "토", "일", "완결"];
const categoryData = [
  "홈",
  "요일연재",
  "웹툰",
  "소년",
  "드라마",
  "로맨스",
  "로판",
  "액션무협",
  "BL",
];
const data = await getJson("/api");

async function getJson(url = "/") {
  try {
    const res = await fetch(`http://localhost:5000${url}`);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

export const Render = {
  fixedHeader: () => {
    addComponent("header", headerMenu(data.headerImg, menuData));
  },

  footerContent: () => {
    addComponent("footer", footerInfo());
  },

  toon_main: () => {
    addComponent(".toon-main", toonMain());
    addComponent(".toon-jumbotron", jumbotron(data));
    addComponent(".toon-todaymenu", gridMenu(data));
    addComponent(".toon-ad-banner-1", adBanner(data, "미슐랭스타"));
    addComponent(".toon-daytop", dayPage(data, dayPageList));
    addComponent(".toon-daytop_album", gridList(data, getToday()));
  },

  //* active functions
  header_home: (target) => {
    toggleList(target, "check");
    addComponent(".toon-category", empty("😅 EMPTY SPACE"));
    addComponent(".toon-main", empty("😅 EMPTY SPACE"));
  },

  header_toon: (target) => {
    toggleList(target, "check");
    addComponent(".toon-category", category(categoryData));
    Render.toon_main();
  },

  header_novel: (target) => {
    toggleList(target, "check");
    addComponent(".toon-category", empty("😅 EMPTY SPACE"));
    addComponent(".toon-main", empty("😅 EMPTY SPACE"));
  },

  header_vod: (target) => {
    toggleList(target, "check");
    addComponent(".toon-category", empty("😅 EMPTY SPACE"));
    addComponent(".toon-main", empty("😅 EMPTY SPACE"));
  },

  header_broadcast: (target) => {
    toggleList(target, "check");
    addComponent(".toon-category", empty("😅 EMPTY SPACE"));
    addComponent(".toon-main", empty("😅 EMPTY SPACE"));
  },

  header_book: (target) => {
    toggleList(target, "check");
    addComponent(".toon-category", empty("😅 EMPTY SPACE"));
    addComponent(".toon-main", empty("😅 EMPTY SPACE"));
  },

  toonCategory: (target = $(".toon-category a:first-child")) => {
    if (!target) return;
    toggleList(target, "check");
    const click = target.innerHTML;
    const handler = {
      홈: () => {},
      요일연재: () => {},
      웹툰: () => {},
      소년: () => {},
      드라마: () => {},
      로맨스: () => {},
      로판: () => {},
      액션무협: () => {},
      BL: () => {},
    };
    handler[click]();
  },

  toonDaySeriesTop: (target = $(`.ul-day li:nth-child(${getToday()})`)) => {
    if (!target) return;
    toggleList(target, "check");
    let clickDay = target.innerHTML;

    // 수목금토일완결 데이터없어서 임시용
    ["수", "목", "금", "토", "일", "완결"].some((v) => v === clickDay)
      ? (clickDay = "월")
      : null;

    addComponent(".toon-daytop_album", gridList(data, clickDay));
  },
};
