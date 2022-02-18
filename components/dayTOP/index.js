import { createBox } from "../box/index.js";
import { createCategory } from "../category/index.js";

const category = createCategory([
  "월",
  "화",
  "수",
  "목",
  "금",
  "토",
  "일",
  "완결",
]);

export function createDayTOP() {
  return createBox({ title: "요일 연재 TOP", contents: category });
}
