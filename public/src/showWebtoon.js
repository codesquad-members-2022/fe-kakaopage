import { makeTodayEvent } from "./main.js"
import { makeSlideEvent } from "./mainNav.js"
function init() {
  const date = new Date();
  const today = date.getDay() - 1;
  if(today === -1) today = 6;
  makeTodayEvent(today, today);
  for (let i = 0; i < 8; i++) {
    makeTodayEvent(i);
  }
};

init();
makeSlideEvent();