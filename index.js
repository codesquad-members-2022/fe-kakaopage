const express = require("express");
const server = express();
const port = 3000;

server.use(express.static(__dirname + "/"))

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

server.listen(port, (err) => {
    if (err) return console.log(err);
    console.log(`The server is listening on port ${port}`);
})