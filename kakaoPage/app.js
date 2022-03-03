const express = require("express");
const router = require("./routes/dataRouter.js");
const app = express();
const cors = require("cors");
const PORT = 3000;
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use("/data", router);

// app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/" + "views/kakaopageMain.html");
});

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
});
