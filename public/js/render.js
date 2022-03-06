import { $, addComponent, toggleList, getToday } from "./util/dom-lib.js";
import { headerMenu } from "./component/header-menu.js";
import { category } from "./component/category.js";
import { empty } from "./component/empty.js";
import { jumbotron } from "./component/jumbotron.js";
import { simpleMenu } from "./component/simple-menu.js";
import { adBanner } from "./component/ad-banner.js";
import { footerInfo } from "./component/footer-info.js";
import { dayPage } from "./component/day-page.js";
import { dayPageList } from "./component/dayPageList.js";
import { toonMain } from "./component/toon-main.js";
import { initCarouselEvent, playCarousel } from "./util/carousel.js";

const menuData = ["home", "toon", "novel", "vod", "broadcast", "book"];
const dayPageData = ["월", "화", "수", "목", "금", "토", "일", "완결"];
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

async function getJson(url = "") {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

// Render.property => clickEvent name
export const Render = {
  fixedHeader: () => {
    addComponent("header", headerMenu(data.headerImg, menuData));
  },

  footerContent: () => {
    addComponent("footer", footerInfo());
  },

  carousel: (target) => {
    const targetBtn = target.classList.value.includes("left")
      ? "left"
      : "right";
    playCarousel[targetBtn]();
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
  // home_main:
  // novel_main:
  // movie_main:
  // broadcast_main:
  // book_main:
  toon_main: () => {
    addComponent(".toon-main", toonMain());
    addComponent(".toon-category", category(categoryData));
    addComponent(".toon-jumbotron", jumbotron(data));
    addComponent(".toon-todaymenu", simpleMenu(data));
    addComponent(".toon-ad-banner-1", adBanner(data, "미슐랭스타"));
    addComponent(".toon-daytop", dayPage(data, dayPageData));
    addComponent(".toon-daytop_album", dayPageList(data, getToday()));

    Render.toonCategory();
    Render.toonDaySeriesTop();
    initCarouselEvent({
      slideContainer: ".toon-jumbotron",
      slide: ".toon-jumbotron_slides",
      slides: ".toon-jumbotron_carousel",
      INTERVAL: 4000,
    });
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

    //todo [수목금토일완결] 데이터 없어서 임시용
    clickDay = ["월", "수", "금", "일"].some((v) => v === clickDay)
      ? "월"
      : "화";

    addComponent(".toon-daytop_album", dayPageList(data, clickDay));
  },
};
