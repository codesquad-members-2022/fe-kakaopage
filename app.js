const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('[START] express server on!');
});

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

const totalData = require('./router/dataRouter');

app.use('/', totalData);