const express = require('express');
const router = express.Router();
const fs = require('fs');

const mainBanner = JSON.parse(fs.readFileSync('./data/mainBannerData.json', 'utf-8'));
const promotionBanner = JSON.parse(fs.readFileSync('./data/promotionBannerData.json', 'utf-8'));
const themeMenu = JSON.parse(fs.readFileSync('./data/themeMenuData.json', 'utf-8'));
const dailyTop = JSON.parse(fs.readFileSync('./data/dailyTopData.json', 'utf-8'));
const dailyRanking = JSON.parse(fs.readFileSync('./data/dailyRanking.json', 'utf-8'));
const homeGenreTop = JSON.parse(fs.readFileSync('./data/homeGenreTopData.json', 'utf-8'));

router.get('/main-banner', function(req, res, next) {
  res.json(mainBanner);
});

router.get('/promotion-banner', function(req, res, next) {
  res.json(promotionBanner);
});

router.get('/theme-Menu', function(req, res, next) {
  res.json(themeMenu);
});

router.get('/daily-top', function(req, res, next) {
  res.json(dailyTop);
});

router.get('/daily-ranking', function(req, res, next) {
  res.json(dailyRanking);
});

router.get('/home-genre-top', function(req, res, next) {
  res.json(homeGenreTop);
});


module.exports = router;