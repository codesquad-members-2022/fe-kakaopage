const webtoonData = [
  {
    name: "꽃",
    image: "flower.png",
    rank: 100,
    views: 150.0,
    day: "월",
    type: "webtoon",
    now: true,
  },
  {
    name: "배",
    image: "boat.png",
    rank: 50,
    views: 150.0,
    day: "화",
    type: "webtoon",
    now: true,
  },
  {
    name: "구름",
    image: "cloud.png",
    rank: 80,
    views: 120.0,
    day: "수",
    type: "webtoon",
    now: false,
  },
  {
    name: "산",
    image: "mountain.png",
    rank: 1,
    views: 10.0,
    day: "금",
    type: "webtoon",
    now: true,
  },
  {
    name: "꽃!!!",
    image: "flower.png",
    rank: 100,
    views: 150.0,
    day: "화",
    type: "webtoon",
    now: true,
  },
  {
    name: "꽃???",
    image: "flower.png",
    rank: 100,
    views: 150.0,
    day: "월",
    type: "webtoon",
    now: false,
  },
  {
    name: "꽃",
    image: "flower.png",
    rank: 87,
    views: 150.0,
    day: "목",
    type: "webtoon",
    now: false,
  },
];

export const daysInfo = {};

const getDaysInfo = () => {
  const days = ["월", "화", "수", "목", "금", "토", "일", "완결"];
  days.forEach((day) => (daysInfo[`${day}`] = []));
  webtoonData.forEach((webtoon) => {
    daysInfo[`${webtoon.day}`].push(webtoon);
  });
};

getDaysInfo();
