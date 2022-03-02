import express from "express";

const app = express();
app.use(express.static("./"));

app.listen(3000, function () {
  console.log("서버 실행중");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});
