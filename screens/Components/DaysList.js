/**
 * Days Nav
 * CardList
 * CardList
 */

import Card from "./Card.js";

const DaysList = (day, count) => {
  // TODO: Data 넣기(day에 맞춰서)
  const cardList = [
    { days: ["화"], title: "도굴왕" },
    { days: ["화"], title: "빈껍데기공작부인" },
    { days: ["화"], title: "다정한 그대를 모시기" },
    { days: ["화"], title: "로열 셰프 영애님" },
    { days: ["화"], title: "궁귀검신" },
    { days: ["화"], title: "악녀는 두번 산다" },
    { days: ["화"], title: "용사의 전 여친 입니다" },
    { days: ["화"], title: "던전 리셋" },
    { days: ["화"], title: "화타가 된 외과의사" },
    { days: ["화"], title: "막내 황녀님" },
    { days: ["화"], title: "막내 황녀님" },
    { days: ["화"], title: "막내 황녀님" },
    { days: ["수"], title: "수-도굴왕" },
    { days: ["수"], title: "수-빈껍데기공작부인" },
    { days: ["수"], title: "수-다정한 그대를 모시기" },
    { days: ["수"], title: "수-로열 셰프 영애님" },
    { days: ["수"], title: "수-궁귀검신" },
    { days: ["수"], title: "수-악녀는 두번 산다" },
    { days: ["수"], title: "수-용사의 전 여친 입니다" },
    { days: ["수"], title: "수-던전 리셋" },
    { days: ["수"], title: "수-화타가 된 외과의사" },
    { days: ["수"], title: "수-막내 황녀님" },
    { days: ["수"], title: "수-막내 황녀님" },
    { days: ["수"], title: "수-막내 황녀님" },
  ];

  const newCardList = cardList
    .filter((card) => card.days.includes(day))
    .slice(0, count ? count : cardList.length);

  return `
           ${newCardList.map((card) => Card(card)).join("")}
         `;
};

export default DaysList;
