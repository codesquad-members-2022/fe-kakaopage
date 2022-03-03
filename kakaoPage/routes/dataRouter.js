const express = require("express");
const router = express.Router();
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./public/data/data.json", "utf-8"));

console.log(data);
router.get("/data", (req, res) => {
  res.json(data);
});

module.exports = router;
