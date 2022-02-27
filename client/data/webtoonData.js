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
    ad: true,
    adImage: "1.jpg",
  },
  {
    name: "배",
    image: "boat.png",
    rank: 50,
    views: 150.0,
    day: "화",
    type: "웹툰",
    now: true,
    ad: false,
  },
  {
    name: "구름",
    image: "cloud.png",
    rank: 80,
    views: 120.0,
    day: "수",
    type: "없음",
    now: false,
    ad: false,
  },
  {
    name: "산",
    image: "mountain.png",
    rank: 1,
    views: 10.0,
    day: "금",
    type: "웹툰",
    now: true,
    ad: false,
  },
  {
    name: "꽃!!!",
    image: "flower.png",
    rank: 100,
    views: 150.0,
    day: "화",
    type: "웹툰",
    now: true,
    ad: false,
  },
  {
    name: "꽃???",
    image: "flower.png",
    rank: 100,
    views: 150.0,
    day: "월",
    type: "웹툰",
    now: false,
    ad: true,
    adImage: "2.jpg",
  },
  {
    name: "꽃333",
    image: "flower.png",
    rank: 87,
    views: 150.0,
    day: "목",
    type: "웹툰",
    now: false,
    ad: false,
  },
  {
    name: "구름!!!!!",
    image: "cloud.png",
    rank: 80,
    views: 120.0,
    day: "금",
    type: "없음",
    now: true,
    ad: true,
    adImage: "3.jpg",
  },
  {
    name: "산2",
    image: "mountain.png",
    rank: 15,
    views: 9.0,
    day: "완결",
    type: "없음",
    now: true,
    ad: false,
  },
];

const daysInfo = {};
let adsInfo = {};

const getDaysInfo = () => {
  daysNavItems.forEach((day) => (daysInfo[`${day}`] = []));
  webtoonData.forEach((webtoon) => {
    daysInfo[`${webtoon.day}`].push(webtoon);
  });
};

const getAdInfoForm = (data) => {
  const { name, adImage, now, views } = data;
  return {
    name,
    adImage,
    now,
    views,
    pre: null,
    post: null,
    number: null,
  };
};

const getAdsInfo = () => {
  webtoonData.forEach((data) => {
    if (!data.ad) return;

    const info = getAdInfoForm(data);
    const firstInfo = adsInfo.post;
    if (!firstInfo) {
      adsInfo = info;
      adsInfo.pre = adsInfo;
      adsInfo.post = adsInfo;
      adsInfo.number = 1;
    } else {
      info.pre = adsInfo;
      info.post = adsInfo.post;
      info.number = adsInfo.number + 1;
      adsInfo.post = info;
      adsInfo = info;
    }
  });
};
// use linked list

getDaysInfo();
getAdsInfo();

export { daysInfo, adsInfo };
