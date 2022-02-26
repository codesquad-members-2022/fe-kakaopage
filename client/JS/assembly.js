import {
  ads,
  getColumnContents,
  days,
  newThings,
  listContents,
  dummy,
  webtoonNav,
} from "./parts.js";
import { selector } from "./utility.js";
import { daysInfo } from "../data/webtoon.js";
import { markAllSelectedNav } from "./nav.js";

const drawWithAssembly = (assembly, target, view = selector("main")) => {
  switch (typeof assembly) {
    case "object":
      assembly[target].forEach((part) => (view.innerHTML += part));
      break;
    case "function":
      view.innerHTML += assembly(target);
      break;
  }
  markAllSelectedNav();
};

const headerAssembly = {
  홈: [ads, newThings, listContents],
  웹툰: [webtoonNav, ads, days],
  웹소설: [dummy],
  영화: [dummy],
  소설: [dummy],
  책: [dummy],
};

const webtoonAssembly = {
  홈: [dummy],
  요일연재: [ads, days],
  웹툰: [dummy],
  소년: [dummy],
  드라마: [dummy],
  로맨스: [dummy],
  로판: [dummy],
  액션무협: [dummy],
  BL: [dummy],
};

const daysAssembly = (target) => {
  return getColumnContents(daysInfo[target]);
};

export { daysAssembly, webtoonAssembly, headerAssembly, drawWithAssembly };
