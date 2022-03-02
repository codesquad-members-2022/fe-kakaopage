var express = require("express");
var router = express.Router();

/* GET home page. */
exports.index = function (req, res) {
  res.render("index", { title: "Page title" });
};

// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
