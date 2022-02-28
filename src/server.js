const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const fs = require("fs");
const cors = require('cors');
const { WebtoonData } = require('./dummy.js');

app.use(express.static("public"));
app.use(cors());

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, "../index.html"), (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).end(`<h1>ERROR</h1>`);
        }
        res.status(200).end(data);
      });
});

app.get('/category/:id', (req, res) => {
  res.json(req.params.id);
  // Template engine을 이용하여 html 그려서 응답
});

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});