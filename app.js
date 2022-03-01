const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('[START] express server on port 3000');
});

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

const mainBanner = require('./router/mainBanner');
const promotionBanner = require('./router/promotionBanner');
const themeMenu = require('./router/themeMenuData');
const dailyTop = require('./router/dailyTop');
const dailyRanking = require('./router/dailyRanking');
const homeGenreTop = require('./router/homeGenreTop.js');

app.use('/main-banner', mainBanner);
app.use('/promotion-banner', promotionBanner);
app.use('/theme-Menu', themeMenu);
app.use('/daily-top', dailyTop);
app.use('/daily-ranking', dailyRanking);
app.use('/home-genre-top', homeGenreTop);