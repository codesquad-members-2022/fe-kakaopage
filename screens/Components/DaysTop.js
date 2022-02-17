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
          <li class="${
            day === "월" ? "selected" : ""
          }" data-days="mon" data-series-end="false">월</li>
          <li class="${
            day === "화" ? "selected" : ""
          }" data-days="tue" data-series-end="false">화</li>
          <li class="${
            day === "수" ? "selected" : ""
          }" data-days="wed" data-series-end="false">수</li>
          <li class="${
            day === "목" ? "selected" : ""
          }" data-days="thu" data-series-end="false">목</li>
          <li class="${
            day === "금" ? "selected" : ""
          }" data-days="fri" data-series-end="false">금</li>
          <li class="${
            day === "토" ? "selected" : ""
          }" data-days="sat" data-series-end="false">토</li>
          <li class="${
            day === "일" ? "selected" : ""
          }" data-days="sun" data-series-end="false">일</li>
          <li class="${
            day === "완료" ? "selected" : ""
          }" data-series-end="true">완결</li>
        </ul>
        <ul class="contentsCard">
          ${DaysList(day, 10)}
        </ul>
      </div>
    </div>
  </li>`;
};

export default DaysTop;
