const express = require("express");
const app = express();
const port = 3000;
const dataAd = require("./data/ad-data.json");

app.use(express.static(__dirname));

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/ad-data", (request, response, next) => {
  response.json(dataAd);
});

app.listen(port, () => {
  console.log(`Exapmle app listening on port ${port}`);
});
