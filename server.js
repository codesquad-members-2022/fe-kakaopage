const express = require("express");
const api = require("./data/data.json");
const cors = require("cors");
const app = express();
app.use(cors());
const port = 5000;

app.get("/", (req, res) => {
  res.send(`<p>API호출 예제</p>\n<p>/api/*</p>`);
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
