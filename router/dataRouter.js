const express = require('express');
const router = express.Router();

const data = require('../database/data.json');

const encodeString = (param) => `/${encodeURIComponent(param)}`;

router.get(encodeString('홈'), (req, res) => res.json(data.home));
router.get(encodeString('웹툰'), (req, res) => res.json(data.webtoon));
router.get(encodeString('웹소설'), (req, res) => res.json(data.webnovel));
router.get(encodeString('영화'), (req, res) => res.json(data.movie));
router.get(encodeString('방송'), (req, res) => res.json(data.broadcast));
router.get(encodeString('책'), (req, res) => res.json(data.book));

module.exports = router;
