/**
 * Days Nav
 * CardList
 * CardList
 */
import DaysList from "./DaysList.js";

const DaysTop = (day) => {
  return `<li class="mainBox main__contents">
    <div class="contents">
      <div class="contents__header">
        <div class="contents__title">
          <span>요일 연재 TOP</span>
          <span class="titleNum">(1,618)</span>
        </div>
        <div class="contents__more">
          <span>더보기></span>
        </div>
      </div>
      <div class="contents__body">
        <ul class="contents__daysNav">
          <li class="${day === "월" ? "selected" : ""}" data-days="mon">월</li>
          <li class="${day === "화" ? "selected" : ""}" data-days="tue">화</li>
          <li class="${day === "수" ? "selected" : ""}" data-days="wed">수</li>
          <li class="${day === "목" ? "selected" : ""}" data-days="thu">목</li>
          <li class="${day === "금" ? "selected" : ""}" data-days="fri">금</li>
          <li class="${day === "토" ? "selected" : ""}" data-days="sat">토</li>
          <li class="${day === "일" ? "selected" : ""}" data-days="sun">일</li>
          <li class="${
            day === "완료" ? "selected" : ""
          }" data-days="comp">완결</li>
        </ul>
        <ul class="contentsCard">
          ${DaysList(day, 10)}
        </ul>
      </div>
    </div>
  </li>`;
};

export default DaysTop;
