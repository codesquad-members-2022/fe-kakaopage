const express = require("express");
const app = express();
const port = 3000;
const index = require("./router/index");
const mainAdBanner = require("./router/main-ad");

app.use(express.static(__dirname));
app.use("/", index);
app.use("/webtoons/main-ad", mainAdBanner);

app.listen(port, () => {
  console.log(`Exapmle app listening on port ${port}`);
});
