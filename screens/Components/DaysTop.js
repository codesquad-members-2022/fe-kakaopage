/**
 * Days Nav
 * CardList
 * CardList
 */

import Card from "./Card.js";

const DaysTop = () => {
  // TODO: Data 넣기
  const cardList = [
    { title: "도굴왕" },
    { title: "빈껍데기공작부인" },
    { title: "다정한 그대를 모시기" },
    { title: "로열 셰프 영애님" },
    { title: "궁귀검신" },
    { title: "악녀는 두번 산다" },
    { title: "용사의 전 여친 입니다" },
    { title: "던전 리셋" },
    { title: "화타가 된 외과의사" },
    { title: "막내 황녀님" },
  ];
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
          <li data-days="mon" data-series-end="false">월</li>
          <li data-days="tue" data-series-end="false">화</li>
          <li data-days="wed" data-series-end="false">수</li>
          <li data-days="thu" data-series-end="false">목</li>
          <li data-days="fri" data-series-end="false">금</li>
          <li data-days="sat" data-series-end="false">토</li>
          <li data-days="sun" data-series-end="false">일</li>
          <li data-series-end="true">완결</li>
        </ul>
        <ul class="contentsCard">
          ${cardList.map((card) => Card(card)).join("")}
        </ul>
      </div>
    </div>
  </li>`;
};

export default DaysTop;
