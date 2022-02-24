import { changeCirclePosition } from "./change-circle-position.js";
// import {changeImageBoxInfo} from './change-image-box.js';
import { changeImageCardInfo } from "./change-image-card.js";
import { weeklyWebtoonDataInfo } from "./data.js";
import { textSelectedPositionChange } from "./text-selected-position-change.js";
import { $ } from "./selector.js";

const weeklyWebtoonUl = $(".weekly-webtoon-ul");
const weeklyIdxChanger = {
  월: 0,
  화: 1,
  수: 2,
  목: 3,
  금: 4,
  토: 5,
  일: 6,
};
const weeklyWebtoonHandler = (weeklyWebtoonUl, weekly) => {
  const i = weeklyIdxChanger[weekly.innerHTML];
  // 배너 광고 추시 사용할 배너 광고 정보
  // const bannerImageBox = weeklyWebtoonDataInfo[i]["box"]
  const weeklyWebtoonImageCard = weeklyWebtoonDataInfo[i]["card"];
  const dayOfTheWeek = weeklyWebtoonDataInfo[i]["dayOfTheWeek"];
  // changeImageBoxInfo 함수 : 배너 광고에 사용되는 이미지 박스와 부가 정보 (제목, 평점 등)을 첫번째 매개변수 값을 파싱해서 변경해주는 함수
  // 추후 배너광고 이미지 박스 정보를 변경하고 싶을때 활용할 목적
  // changeImageBoxInfo(bannerImageBox);
  changeImageCardInfo(weeklyWebtoonImageCard);
  changeCirclePosition(dayOfTheWeek);
  textSelectedPositionChange(weeklyWebtoonUl.querySelectorAll("li"), i);
};
weeklyWebtoonUl.addEventListener("click", (evt) => {
  if (evt.target.nodeName === "LI") {
    weeklyWebtoonHandler(weeklyWebtoonUl, evt.target);
  }
});
