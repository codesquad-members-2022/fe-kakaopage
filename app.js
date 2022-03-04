const express = require("express");
const app = express();
const port = 3000;
const data = require("./fakeDB.json");

const { genre, bannerUrl, week, toonItemData, toggleLeft } = data;
app.use(express.static(__dirname + "/public"));

app.get("/index/wholeData", (req, res, next) => {
  res.json(data);
});

app.get("/main/홈", (req, res, next) => {
  res.json(genre);
});

app.get("/main/요일연재", (req, res, next) => {
  res.json({ week, toonItemData, toggleLeft });
});

app.get("/banner/:tab", (req, res, next) => {
  const params = req.params;
  const filterdBytabData = bannerUrl.find(
    (bannerData) => bannerData.tab === params.tab
  );
  const { url } = filterdBytabData;
  res.json(url);
});

app.get("/weekCategory/:day", (req, res, next) => {
  const params = req.params;
  const filterdByDayData = toonItemData.filter(
    (wholeToonData) => wholeToonData.day === params.day
  );
  res.json(filterdByDayData);
});

app.listen(port);
