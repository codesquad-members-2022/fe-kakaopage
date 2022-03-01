const express = require("express");
const app = express();
const api = require("./data/data.json");
const cors = require("cors");
const port = 5000;

app.locals.pretty = true;
app.set("views", "./views");
app.set("view engine", "pug");

app.use(cors());

app.get("/", (req, res) => {
  res.render("hello", {
    title: "KakaoPage API",
    message: "Welcome to kakaoAPI ",
    fontcolor: "<font color='blue'>font color</font>",
    desc: `<div style="color: green">
    <p>/api => toonList</p>
    <p>/api/toon/:id => 해당하는 id에 맞는 toon 찾기</p>
    </div>`,
  });
});

app.get("/api", (req, res) => {
  const resultJSON = api;
  res.json(resultJSON);
});

app.get(`/api/toon/:id`, (req, res) => {
  const resultJSON = api.toonTest.find((v) => v.id === req.params.id);
  res.json(resultJSON);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
