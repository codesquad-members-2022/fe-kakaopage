import { changeCirclePosition } from './change-circle-position.js';
// import {changeImageBoxInfo} from './change-image-box.js';
import {changeImageCardInfo} from './change-image-card.js';
import {weeklyDataInfo} from './data.js';
import { selectedPositionChange } from './selected-position-change.js';
import { $ } from './selector.js';

const weeklyWebtoonUl = $(".weekly-webtoon-ul");
const weeklyIdxChanger = {
  "월" : 0,
  "화" : 1,
  "수" : 2,
  "목" : 3,
  "금" : 4,
  "토" : 5,
  "일" : 6,
}

const handler = (weeklyWebtoonUl,weekly) => {
  const i = weeklyIdxChanger[weekly.innerHTML];
  const boxInfo = weeklyDataInfo[i]["box"]
  const cardInfo = weeklyDataInfo[i]["card"]
  const dayOfTheWeek = weeklyDataInfo[i]["dayOfTheWeek"]
  // changeImageBoxInfo : 추후 배너광고 이미지 박스 정보를 변경하고 싶을때 활용하기
  // changeImageBoxInfo(boxInfo);
  changeImageCardInfo(cardInfo);
  changeCirclePosition(dayOfTheWeek);
  selectedPositionChange(weeklyWebtoonUl.querySelectorAll("li"),i);
}
weeklyWebtoonUl.addEventListener("click", (evt) => {if (evt.target.nodeName === "LI") handler(weeklyWebtoonUl,evt.target)});