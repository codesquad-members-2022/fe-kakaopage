import {
  ads,
  columnContents,
  days,
  newThings,
  listContents,
  dummy,
  webtoonNav,
} from "./parts.js";
import { selector } from "./utility.js";
import { daysInfo } from "../data/daysInfo.js";
import { markAllSelectedNav } from "./selectedNav.js";
// import name from path assert { type: 'json' };

export const drawWithAssembly = (assembly, type, target = selector("main")) => {
  assembly[type].forEach((part) => (target.innerHTML += part));
  markAllSelectedNav();
};

export const headerAssembly = {
  홈: [ads, newThings, listContents],
  웹툰: [webtoonNav, ads, days],
  웹소설: [dummy],
  영화: [dummy],
  소설: [dummy],
  책: [dummy],
};

export const webtoonAssembly = {
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

export const daysAssembly = {
  월: [columnContents(daysInfo["월"])],
  화: [columnContents(daysInfo["화"])],
  수: [columnContents(daysInfo["수"])],
  목: [columnContents(daysInfo["목"])],
  금: [columnContents(daysInfo["금"])],
  토: [columnContents(daysInfo["토"])],
  일: [columnContents(daysInfo["일"])],
  완결: [columnContents(daysInfo["완결"])],
};
