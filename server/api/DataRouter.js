const express = require('express');
const router = express.Router();
const menuData = require('../data/Menu.json');
const iconSrc = require('../data/IconSrc.json');
const dailyTopData = require('../data/DailyTop.json');
const genreTopData = require('../data/GenreTop.json');
const sliderBannerData = require('../data/SliderBanner.json');

router.get('/daily', (req, res) => {
    res.json(dailyTopData);
})

router.get('/daily/:week', (req, res) => {
    const week = req.params.week;
    const weekData = dailyTopData[week];

    if (!weekData) {
        return res.status(404).end();
    }

    res.json(weekData);
});

router.get('/genre', (req, res) => {
    res.json(genreTopData);
});

router.get('/genre/:type', (req, res) => {
    const type = req.params.type;
    const genreData = genreTopData[type];

    if (!genreData) {
        return res.status(404).end();
    }

    res.json(genreData);
});

router.get('/menu', (req, res) => {
    res.json(menuData);
});

router.get('/menu/:tab', (req, res) => {
    const tabName = req.params.tab;
    const data = menuData[tabName];

    if (!data) {
        return res.status(404).end();
    }

    res.json(data);
});

router.get('/slider', (req, res) => {
    res.json(sliderBannerData);
});

router.get('/slider/:tab', (req, res) => {
    const tabName = req.params.tab;
    const data = sliderBannerData[tabName];

    if (!data) {
        return res.status(404).end();
    }

    res.json(data);
});

router.get('/icon-src', (req, res) => {
    res.json(iconSrc);
});

router.get('/icon-src/:name', (req, res) => {
    const name = req.params.name;
    const iconSrc = iconSrc[name];

    if (!iconSrc) {
        return res.status(404).end();
    }

    res.json(iconSrc);
});

module.exports = router;