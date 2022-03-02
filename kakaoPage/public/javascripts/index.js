const express = require("express");
const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);
app.get("/", function (req, res) {
  res.render("kakopageMain.html");
});

// server.use(cors()); // 안쓰면 에러!!
let server = app.listen(3000, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("Server is working : PORT - ", port);
});
