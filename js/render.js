import {
  $,
  addComponent,
  toggleList,
  data,
  getToday,
  getStrTag,
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

/**
 * Naming Rule :>> click noun
 */
export class Render {
  static fixedHeader = () => {
    //? ⚠️ 아래 데이터 같은 놈들 고민..
    const menuData = ["home", "toon", "novel", "vod", "broadcast", "book"];
    addComponent("header", headerMenu(data.headerImg, menuData));
  };

  static footerContent = () => {
    addComponent("footer", footerInfo());
  };

  static toon_main = () => {
    const dayPageList = ["월", "화", "수", "목", "금", "토", "일", "완결"];
    addComponent(".toon-jumbotron", jumbotron(data));
    addComponent(".toon-todaymenu", gridMenu(data));
    addComponent(".toon-ad-banner-1", adBanner(data, "미슐랭스타"));
    addComponent(".toon-daytop", dayPage(data, dayPageList));
    addComponent(".toon-daytop_album", gridList(data, getToday()));
  };

  //* active functions
  static header_home = (target) => {
    toggleList(target, "check");
    addComponent(".toon-category", empty("😅 EMPTY SPACE"));
    addComponent(".toon-main", empty("😅 EMPTY SPACE"));
  };

  static header_toon = (target) => {
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

  static toonCategory_home = (target) => {
    console.log("target :>> ", target);
    toggleList(target, "check");
  };
  static toonCategory_daySeries = (target) => {};
  static toonCategory_webtoon = (target) => {};
  static toonCategory_boy = (target) => {};
  static toonCategory_drama = (target) => {};
  static toonCategory_romance = (target) => {};
  static toonCategory_romanceFantasy = (target) => {};
  static toonCategory_actionArts = (target) => {};
  static toonCategory_BL = (target) => {};
}
