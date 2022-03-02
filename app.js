const express = require("express");
const app = express();

const getImageCardAPI = require("./src/data/imageCard-data.json");

app.use(express.static(__dirname + "/"));

app.get("/webtoon/weekly/imageCard", (req, res) => {
  res.json(getImageCardAPI);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("my server is listening on port 3000");
});
