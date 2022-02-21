import { makeTodayList, makeTodayEvent } from "./main.js"
function init() {
  for (let i = 0; i < 8; i++) {
    makeTodayEvent(i);
  }
};

init();