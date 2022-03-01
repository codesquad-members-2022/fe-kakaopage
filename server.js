const express = require('express');
const cors = require('cors');
const data = require('./data/data.json');

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.static('src'));

app.get('/data', (req, res) => {
  res.send(data);
});

app.get('/webtoon', (req, res) => {
  res.json(data.webtoon);
});

app.get('/webtoon/:day', (req, res) => {
  const day = req.params.day;
  const filteredWebtoon = data.webtoon.filter(wt => wt.day.includes(day));
  if (!filteredWebtoon) {
    return res.status(400).end();
  }
  res.json(filteredWebtoon);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/express.html');
});

app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`);
});
