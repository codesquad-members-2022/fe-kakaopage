const express = require("express");
const webtoonsData = require("./data/webtoon.json");

const app = express();
const port = 3000;

app.get("/webtoons", (req, res) => {
  res.send(webtoonsData);
});

app.listen(port, () => {
  console.log(`✅ Back Server Listening on port ${port}`);
  console.log(`  webtoons data → GET /webtoons `);
});
