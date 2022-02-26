import { daysNavItems } from "../JS/nav.js";

const webtoonData = [
  {
    name: "꽃",
    image: "flower.png",
    rank: 100,
    views: 150.0,
    day: "월",
    type: "없음",
    now: true,
  },
  {
    name: "배",
    image: "boat.png",
    rank: 50,
    views: 150.0,
    day: "화",
    type: "웹툰",
    now: true,
  },
  {
    name: "구름",
    image: "cloud.png",
    rank: 80,
    views: 120.0,
    day: "수",
    type: "없음",
    now: false,
  },
  {
    name: "산",
    image: "mountain.png",
    rank: 1,
    views: 10.0,
    day: "금",
    type: "웹툰",
    now: true,
  },
  {
    name: "꽃!!!",
    image: "flower.png",
    rank: 100,
    views: 150.0,
    day: "화",
    type: "웹툰",
    now: true,
  },
  {
    name: "꽃???",
    image: "flower.png",
    rank: 100,
    views: 150.0,
    day: "월",
    type: "웹툰",
    now: false,
  },
  {
    name: "꽃333",
    image: "flower.png",
    rank: 87,
    views: 150.0,
    day: "목",
    type: "웹툰",
    now: false,
  },
  {
    name: "구름!!!!!",
    image: "cloud.png",
    rank: 80,
    views: 120.0,
    day: "금",
    type: "없음",
    now: true,
  },
  {
    name: "산2",
    image: "mountain.png",
    rank: 15,
    views: 9.0,
    day: "완결",
    type: "없음",
    now: true,
  },
];

const daysInfo = {};

const getDaysInfo = () => {
  daysNavItems.forEach((day) => (daysInfo[`${day}`] = []));
  webtoonData.forEach((webtoon) => {
    daysInfo[`${webtoon.day}`].push(webtoon);
  });
};

getDaysInfo();

export { daysInfo };
