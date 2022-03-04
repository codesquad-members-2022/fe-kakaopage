const express = require("express");
const router = express.Router();
const mainAdData = require("../data/ad-data.json");

router.get("/", (request, response, next) => {
  response.json(mainAdData);
});

module.exports = router;
