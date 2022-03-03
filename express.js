const dataOfDrama = require("./data/home/drama.js");
const dataOfDailyRank = require("./data/home/dailyRank.js");
const dataOfsBanner = require("./data/home/smallBanner.js");
const dataOfHomeBanner = require("./data/home/banner.js");
const dataOfEventAd = require("./data/home/event.js");
const dataOfDays = require("./data/home/days.js");
const dataOfCategoryName = require("./data/home/cateBtnText.js");
const dataOfPromotion = require("./data/home/promotion.js");
const dataOfDailyContentsBanner = require("./data/daily-contents/banner.js");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/home/webtoons/drama", (req, res) => {
  res.json(dataOfDrama);
});

app.get("/home/webtoons/top3", (req, res) => {
  res.json(dataOfDailyRank);
});

app.get("/home/category-btn", (req, res) => {
  res.json(dataOfCategoryName);
});

app.get("/home/webtoons/promotion", (req, res) => {
  res.json(dataOfPromotion);
});

app.get("/home/webtoons/banner/small", (req, res) => {
  res.json(dataOfsBanner);
});

app.get("/home/webtoons/banner", (req, res) => {
  res.json(dataOfHomeBanner);
});

app.get("/home/webtoons/event", (req, res) => {
  res.json(dataOfEventAd);
});

app.get("/home/webtoons/days", (req, res) => {
  res.json(dataOfDays);
});

app.get("/daily-contents/webtoons/banner", (req, res) => {
  res.json(dataOfDailyContentsBanner);
});

app.get("/daily-contents/webtoons/days", (req, res) => {
  res.json(dataOfDays);
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
