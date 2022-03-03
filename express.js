const dataOfDrama = require("./data/drama.js");
const dataOfDailyRank = require("./data/dailyRank.js");
const dataOfsBanner = require("./data/smallBanner.js");
const dataOfBanner = require("./data/banner.js");
const dataOfEventAd = require("./data/event.js");
const dataOfDays = require("./data/days.js");
const dataOfCategoryName = require("./data/cateBtnText.js");
const dataOfPromotion = require("./data/promotion.js");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/webtoons/drama/home", (req, res) => {
  res.json(dataOfDrama);
});

app.get("/webtoons/top3", (req, res) => {
  res.json(dataOfDailyRank);
});

app.get("/category-btn", (req, res) => {
  res.json(dataOfCategoryName);
});

app.get("/webtoons/promotion", (req, res) => {
  res.json(dataOfPromotion);
});

app.get("/webtoons/banner/small", (req, res) => {
  res.json(dataOfsBanner);
});

app.get("/webtoons/banner", (req, res) => {
  res.json(dataOfBanner);
});

app.get("/webtoons/event", (req, res) => {
  res.json(dataOfEventAd);
});

app.get("/webtoons/days", (req, res) => {
  res.json(dataOfDays);
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
