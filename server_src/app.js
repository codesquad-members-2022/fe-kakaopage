const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/webtoons/:category', (req, res) => {
  const webtoons = require(`./database/webtoons/${req.params.category}.json`);
  res.send(webtoons);
});

app.get('/api/taglists', (req, res) => {
  const taglists = require('./database/taglists/taglists.json');
  res.send(taglists);
});

app.get('/api/previews', (req, res) => {
  const previews = require('./database/previews/previews.json');
  res.send(previews);
});

app.listen(port, () => {
  console.log(`server on, port ${port}`);
});
