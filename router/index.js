const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

module.exports = router;
