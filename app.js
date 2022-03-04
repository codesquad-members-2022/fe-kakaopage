const express = require("express");
const app = express();
const data = require("./src/data/webtoon/home/main-slide.json");

app.use(express.static("src"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/index.html");
});

app.get("/main-slide", function (req, res) {
  res.send(data);
});

app.listen(3000);
