import { changeCirclePosition } from './change_circle_position.js';
import {changeImageBoxInfo} from './change_image_box.js';
import {changeImageCardInfo} from './change_image_card.js';
import {weeklyDataInfo} from './data.js';
import { selectedPositionChange } from './selected_position_change.js';

const el = document.querySelectorAll(".weekly-nav");

const handler = (el,boxInfo,cardInfo,dayOfTheWeek,idx) => {
  changeImageBoxInfo(boxInfo);
  changeImageCardInfo(cardInfo);
  changeCirclePosition(dayOfTheWeek);
  selectedPositionChange(el,idx);
}

for (let i = 0 ; i<el.length ; i++){
  const boxInfo = weeklyDataInfo[i]["box"]
  const cardInfo = weeklyDataInfo[i]["card"]
  const dayOfTheWeek = weeklyDataInfo[i]["dayOfTheWeek"]
  el[i].addEventListener("click", ()=>{handler(el,boxInfo,cardInfo,dayOfTheWeek,i)},false);
}