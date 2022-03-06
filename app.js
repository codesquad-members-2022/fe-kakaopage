let express = require("express");
const webtoonContents = require("./webtoonContents.json");

let app = express();

const PORT = 3000;

app.listen(PORT);

app.get("/category/home", (req, res) => {
  res.status(200).json(webtoonContents);
});

app.use(express.static("./"));
