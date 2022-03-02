const express = require("express");
const router = express.Router();

const path = require("path");
const genreItemAPI = require("../data/genreItems.json");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "index.html"));
});

router.get("/genre/romanceTop", (req, res) => {
    res.json(genreItemAPI.romanceTop);
});

module.exports = router;
