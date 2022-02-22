import { changeCirclePosition } from './change_circle_position.js';
import {changeImageBoxInfo} from './change_image_box.js';
import {changeImageCardInfo} from './change_image_card.js';
import {weeklyDataInfo} from './data.js';
import { selectedPositionChange } from './selected_position_change.js';

const el = document.querySelector(".weekly-webtoon-ul");
const weeklyIdxChanger = {
  "월" : 0,
  "화" : 1,
  "수" : 2,
  "목" : 3,
  "금" : 4,
  "토" : 5,
  "일" : 6,
}

const handler = (el,weekly) => {
  const i = weeklyIdxChanger[weekly.innerHTML];
  const boxInfo = weeklyDataInfo[i]["box"]
  const cardInfo = weeklyDataInfo[i]["card"]
  const dayOfTheWeek = weeklyDataInfo[i]["dayOfTheWeek"]
  changeImageBoxInfo(boxInfo);
  changeImageCardInfo(cardInfo);
  changeCirclePosition(dayOfTheWeek);
  selectedPositionChange(el.querySelectorAll("li"),i);
}
el.addEventListener("click", (evt) => {if (evt.target.nodeName === "LI") handler(el,evt.target)});