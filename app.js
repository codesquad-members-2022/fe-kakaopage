const express = require("express");
const app = express();

app.use(express.static("src"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/src/index.html");
});

app.listen(3000);
