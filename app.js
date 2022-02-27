const express = require("express");
const app = express();
const port = 3030;
const path = require("path");
const fs = require("fs");

app.use(express.static("dist"));

app.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "/index.html"), (error, data) => {
    if (error) {
      console.log(error);
      return res.status(500).send("<h1>500 ERROR</h1>");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
});

app.listen(port, () => {
  console.log(`✅ Front Server Listening on localhost:${port}`);
});
