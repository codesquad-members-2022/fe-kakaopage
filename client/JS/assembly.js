import {
  ads,
  columnContents,
  days,
  newThings,
  listContents,
  dummy,
  webtoonNav,
} from "./parts.js";

import { daysInfo } from "../data/daysInfo.js";
// import name from path assert { type: 'json' };

export const mainAssembly = {
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
  월: [columnContents(daysInfo["mon"])],
  화: [columnContents(daysInfo["tue"])],
  수: [columnContents(daysInfo["wed"])],
  목: [columnContents(daysInfo["thu"])],
  금: [columnContents(daysInfo["fri"])],
  토: [columnContents(daysInfo["sat"])],
  일: [columnContents(daysInfo["sun"])],
  완결: [columnContents(daysInfo["fin"])],
};
