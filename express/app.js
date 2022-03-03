const express = require('express');
const app = express();
const router = express.Router();
const port = 5050;
const slideImageData = require('./public/js/data/slide-data/slide-data.json');

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/main.html');
});

router.get('/', (req, res) => {
  res.json(slideImageData);
});

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`start! express server on port ${port}`);
});
