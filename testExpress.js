const express = require("express");
const app = express();
const port = 3000;
const data = require("./test.json");

const { genre, bannerUrl, week } = data;
app.use(express.static(__dirname + "/public"));

app.get("/subCategory/home", (req, res, next) => {
  res.json(genre);
});

app.get("/subCategory/week", (req, res, next) => {
  res.json(week);
});

app.get("/banner/home", (req, res, next) => {
  res.json(bannerUrl);
});

app.listen(port);
