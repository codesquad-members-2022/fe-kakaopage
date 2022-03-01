const express = require('express');
const app = express();

app.listen(3000, function() {
  console.log('[START] express server on port 3000');
});

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
})