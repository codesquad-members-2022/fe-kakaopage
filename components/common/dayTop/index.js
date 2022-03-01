import dummyData from "../../../data/dummyData.js";
import { LIST, DAY_TOP_EL_NUM } from "../../../js/constants.js";
import { createBox } from "../box/index.js";
import { createCategory } from "../category/index.js";
import { createWorkSmall } from "../workSmall/index.js";

const category = createCategory(LIST.DAYS, "days");

export function createDayTop() {
  const style = `
  .day-top {
    width: 680px;
    height: fit-content;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: auto auto;
  }
  `;

  const webtoons = dummyData["MON"];

  const el = `
  ${category}
  <style>${style}</style>
  <div class="day-top row">
  ${webtoons.map((x) => createWorkSmall(x)).join("")}
  </div>
  `;
  return createBox({ title: "요일 연재 TOP", contents: el });
}
