const express = require('express');
const cors = require('cors');
const path = require('path');
const webtoon = require('./data/webtoon.json');
const category = require('./data/category.json');

const app = express();
const PORT = 3001;

app.use(cors());

app.use(express.static('src'));

app.get('/webtoon', (req, res) => {
  res.json(webtoon.list);
});

app.get('/webtoon/:day', (req, res) => {
  const day = req.params.day;
  const filteredWebtoon = data.webtoon.filter(wt => wt.day.includes(day));
  if (!filteredWebtoon) {
    return res.status(400).end();
  }
  res.json(filteredWebtoon);
});

app.get('/category', (req, res) => {
  res.json(category.list);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Example server listening on port ${PORT}`);
});
