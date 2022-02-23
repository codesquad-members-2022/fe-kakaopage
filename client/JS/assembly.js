import {
  ads,
  days,
  newThings,
  listContents,
  dummy,
  webtoonNav,
} from "./parts.js";

export const assembly = {
  홈: [ads, newThings, listContents, ads],
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
