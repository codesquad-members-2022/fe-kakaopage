const dataOfDrama = require("./data/drama.js");

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/webtoons/drama/home", (req, res) => {
  res.json(dataOfDrama);
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
