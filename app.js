const express = require("express");
const path = require("path");
const logger = require("morgan");
const app = express();
const port = 3000;

app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use("/weeklyPromotionWebtoonList", function(req, res, next) {
  const weeklyPromotionWebtoonList = require("./public/data/weeklyPromotionWebtoonList.json");
  res.json(weeklyPromotionWebtoonList);
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Example app listening on port ${port}`);
});
