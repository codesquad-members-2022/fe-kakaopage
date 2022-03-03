const express = require("express");
const router = express.Router();
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./public/data/data.json", "utf-8"));
<<<<<<< HEAD
=======

console.log(data);
>>>>>>> fda4f73 (.gitingore 오류 해결, json data server 등록 해결중)
router.get("/data", (req, res) => {
  res.json(data);
});

module.exports = router;
