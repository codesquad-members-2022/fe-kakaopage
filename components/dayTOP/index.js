import { DAYS } from "../../js/constants.js";
import { createBox } from "../box/index.js";
import { createCategory } from "../category/index.js";
import { createWorkSmall } from "../workSmall/index.js";

const category = createCategory(DAYS);
const workSmall = createWorkSmall({
  str1: "1",
  str2: "위",
  title: "이번 생은 가주가 되겠습니다",
  views: 112.7,
  status: "up",
});

export function createDayTop() {
  return createBox({ title: "요일 연재 TOP", contents: el });
}

const style = `
.day-top {
  width: 682px;
  height: fit-content;
  justify-content: space-around;
  margin: auto auto;
  flex-wrap: wrap;
}
`;

const el = `
${category}
<style>${style}</style>
<div class="day-top row">
${Array.from({ length: 10 })
  .map((x) => workSmall)
  .join("")}
</div>
`;
