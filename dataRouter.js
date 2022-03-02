const express = require('express');
const router = express.Router();

const data = require('./database/data.json');

router.get('/home', (req, res) => res.json(data.home));
router.get('/webtoon', (req, res) => res.json(data.webtoon));
router.get('/webnovel', (req, res) => res.json(data.webnovel));
router.get('/movie', (req, res) => res.json(data.movie));
router.get('/broadcast', (req, res) => res.json(data.broadcast));
router.get('/book', (req, res) => res.json(data.book));

module.exports = router;
