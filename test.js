const webtoonData = [
  {
    name: "꽃",
    image: "flower.png",
    rank: 100,
    views: 150.0,
    day: "mon",
    type: "webtoon",
    now: true,
  },
  {
    name: "배",
    image: "boat.png",
    rank: 50,
    views: 150.0,
    day: "tue",
    type: "webtoon",
    now: true,
  },
  {
    name: "구름",
    image: "cloud.png",
    rank: 80,
    views: 120.0,
    day: "wed",
    type: "webtoon",
    now: true,
  },
  {
    name: "산",
    image: "mountain.png",
    rank: 1,
    views: 10.0,
    day: "fri",
    type: "webtoon",
    now: true,
  },
  {
    name: "꽃!!!",
    image: "flower.png",
    rank: 100,
    views: 150.0,
    day: "tue",
    type: "webtoon",
    now: true,
  },
  {
    name: "꽃???",
    image: "flower.png",
    rank: 100,
    views: 150.0,
    day: "mon",
    type: "webtoon",
    now: true,
  },
  {
    name: "꽃",
    image: "flower.png",
    rank: 87,
    views: 150.0,
    day: "thu",
    type: "webtoon",
    now: true,
  },
];

const daysInformation = {};
const getDaysInfo = () => {
  webtoonData.forEach((webtoon) => {
    const { day } = webtoon;
    if (!daysInformation[`${day}`]) daysInformation[`${day}`] = [];
    daysInformation[`${day}`].push(webtoon);
  });
};
getDaysInfo();
console.log(daysInformation);
