import { daysNavItems } from "./nav.js";

const daysInfo = {};
let adsInfo = {};

const getDaysInfo = (webtoonData) => {
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

const getAdsInfo = (webtoonData) => {
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

const getClassifiedData = (json) => {
  getAdsInfo(json);
  getDaysInfo(json);
};

export { daysInfo, adsInfo, getClassifiedData };
