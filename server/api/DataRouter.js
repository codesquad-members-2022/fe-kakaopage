const express = require('express');
const router = express.Router();

const iconSrc = require('../data/IconSrc.json');
const dailyTopData = require('../data/DailyTop.json');
const genreTopData = require('../data/GenreTop.json');
const menuData = require('../data/Menu.json');
const sliderBannerData = require('../data/SliderBanner.json');

router.get('/daily-top', (req, res) => {
    res.json(dailyTopData);
});

router.get('/genre-top', (req, res) => {
    res.json(genreTopData);
});

router.get('/menu', (req, res) => {
    res.json(menuData);
});

router.get('/slider-banner', (req, res) => {
    res.json(sliderBannerData);
});

router.get('/icon-src', (req, res) => {
    res.json(iconSrc);
});

module.exports = router;