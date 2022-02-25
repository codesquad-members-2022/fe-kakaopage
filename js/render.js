import { $, addComponent, toggleList, data, getToday } from "./dom-lib.js";
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

//? ⚠️ 아래 데이터 같은 놈들 고민..
const menuData = ["home", "toon", "novel", "vod", "broadcast", "book"];
const dayPageList = ["월", "화", "수", "목", "금", "토", "일", "완결"];
const [categoryData, categoryDataEng] = [
  [
    "홈",
    "요일연재",
    "웹툰",
    "소년",
    "드라마",
    "로맨스",
    "로판",
    "액션무협",
    "BL",
  ],
  [
    "home",
    "daySeries",
    "webtoon",
    "boy",
    "drama",
    "romance",
    "romanceFantasy",
    "actionArts",
    "BL",
  ],
];

/**
 * Naming Rule :>> click noun
 */
export class Render {
  static fixedHeader = () => {
    addComponent("header", headerMenu(data.headerImg, menuData));
  };

  static footerContent = () => {
    addComponent("footer", footerInfo());
  };

  static toon_main = () => {
    addComponent(".toon-main", toonMain());
    addComponent(".toon-jumbotron", jumbotron(data));
    addComponent(".toon-todaymenu", gridMenu(data));
    addComponent(".toon-ad-banner-1", adBanner(data, "미슐랭스타"));
    addComponent(".toon-daytop", dayPage(data, dayPageList));
    addComponent(".toon-daytop_album", gridList(data, getToday()));
  };

  //* active functions
  //? 첫 번째 방법
  static header_home = (target) => {
    toggleList(target, "check");
    addComponent(".toon-category", empty("😅 EMPTY SPACE"));
    addComponent(".toon-main", empty("😅 EMPTY SPACE"));
  };

  static header_toon = (target) => {
    toggleList(target, "check");
    addComponent(".toon-category", category(categoryData, categoryDataEng));
    Render.toon_main();
  };

  static header_novel = (target) => {
    toggleList(target, "check");
    addComponent(".toon-category", empty("😅 EMPTY SPACE"));
    addComponent(".toon-main", empty("😅 EMPTY SPACE"));
  };

  static header_vod = (target) => {
    toggleList(target, "check");
    addComponent(".toon-category", empty("😅 EMPTY SPACE"));
    addComponent(".toon-main", empty("😅 EMPTY SPACE"));
  };

  static header_broadcast = (target) => {
    toggleList(target, "check");
    addComponent(".toon-category", empty("😅 EMPTY SPACE"));
    addComponent(".toon-main", empty("😅 EMPTY SPACE"));
  };

  static header_book = (target) => {
    toggleList(target, "check");
    addComponent(".toon-category", empty("😅 EMPTY SPACE"));
    addComponent(".toon-main", empty("😅 EMPTY SPACE"));
  };

  //? 두 번째 방법
  static toonCategory = (target = $(".toon-category a:first-child")) => {
    if (!target) return;
    toggleList(target, "check");
    const click = target.innerHTML;
    const handler = {
      홈: () => {
        console.log("toon-home");
      },
      요일연재: () => {
        console.log("toon-daySeries");
      },
      웹툰: () => {},
      소년: () => {},
      드라마: () => {},
      로맨스: () => {},
      로판: () => {},
      액션무협: () => {},
      BL: () => {},
    };
    handler[click]();
  };
}
