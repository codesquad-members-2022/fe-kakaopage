/**
 * Days Nav
 * CardList
 * CardList
 */
import DaysList from "./DaysList.js";

const DaysTop = (inputDay, webtoons) => {
  const days = ["월", "화", "수", "목", "금", "토", "일", "완결"];
  const koreaDay = days[inputDay];

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
          ${days
            .map(
              (day) =>
                `<li class='${koreaDay === day ? "selected" : ""}'>${day}</li>`
            )
            .join("")}
        </ul>
        <ul class="contentsCard">
          ${DaysList(koreaDay, webtoons, 10)}
        </ul>
      </div>
    </div>
  </li>`;
};

export default DaysTop;
