const express = require('express');
const router = express.Router();
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./public/data/dailyTopData.json', 'utf-8'));

router.get('/', function(req, res, next) {
  res.json(data);
});

module.exports = router;