import {changeImageBoxInfo} from './change_image_box.js';
import {changeImageCardInfo} from './change_image_card.js';
import {weeklyDataInfo} from './data.js';

const handler = (boxInfo,cardInfo) => {
  changeImageBoxInfo(boxInfo);
  changeImageCardInfo(cardInfo);
}

const el = document.querySelectorAll(".weekly-nav");
for (let i = 0 ; i<el.length ; i++){
  el[i].addEventListener("click", ()=>{handler(weeklyDataInfo[i]["box"],weeklyDataInfo[i]["card"])},false);
}