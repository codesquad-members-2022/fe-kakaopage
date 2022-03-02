const express = require('express');
const app = express();
const bannerJSON = require('./banner.json');
const port = 3000;

app.use(express.static(__dirname + '/'));

app.get('/banner/top', (req, res) => {
    res.json(bannerJSON);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`The server is listening on port ${port}`);
});
