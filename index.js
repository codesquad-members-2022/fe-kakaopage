const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`The server is listening on port ${port}`);
});
