const express = require("express");
const app = express();

app.use(express.static(__dirname + "/"))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/kakaopage.html");
});

app.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("The app is listening on port 3000");
});