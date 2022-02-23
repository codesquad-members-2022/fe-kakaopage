const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.sendFile(__dirname + "/kakaopage-clone.html");
  response.sendFile(__dirname + "/css/styles.css");
});

app.listen(port, () => {
  console.log(`Exapmle app listening on port ${port}`);
});
