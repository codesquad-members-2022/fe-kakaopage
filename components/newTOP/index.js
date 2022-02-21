import { createBanner } from "../banner/index.js";
import { createBox } from "../box/index.js";

const banner = createBanner({
  size: "small",
  title: "이 용사 실화냐",
  type: "웹툰",
  views: 16.2,
  ad: "지금까지 이런 용사는 없었다?!",
});

export function createNewTop() {
  return createBox({ title: "기대신작 TOP", contents: banner + banner });
}
