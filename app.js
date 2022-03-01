const express = require("express");
const app = express();
const port = 3000;

const genreItemAPI = require("./data/genreItems.json");

app.use(express.static(__dirname + "/static/"));

app.get("/genre/romanceTop", (req, res) => {
    res.json(genreItemAPI.romanceTop);
});

app.get("/*", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
