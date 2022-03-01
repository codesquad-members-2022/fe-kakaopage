import dummyData from "../../../data/dummyData.js";
import { DAY_TOP_EL_NUM } from "../../../js/constants.js";
import { createBox } from "../box/index.js";
import { createWorkSmall } from "../workSmall/index.js";

const workSmall = createWorkSmall({
  str1: "1",
  str2: "위",
  title: "이번 생은 가주가 되겠습니다",
  views: 112.7,
  status: "up",
});

export function createWork(day) {
  const webtoons = dummyData[day];
  const style = `
  .day-top {
    width: 680px;
    height: fit-content;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: auto auto;
  }
  `;

  const el = `
  <style>${style}</style>
  <div class="day-top row">
    ${webtoons.map((x) => createWorkSmall(x)).join("")}
  </div>
  `;

  return createBox({ contents: el });
}
