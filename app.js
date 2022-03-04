const fs = require('fs');
const express = require('express');
const app = express();
const port = 3000;

app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/view');
app.set('view engine', 'html');
app.use(express.static(__dirname + '/public'));

app.use('/db', express.static('db'));

app.get('/api/:file', (req, res) => {
  fs.readFile(__dirname + '/api/' + req.params.file + '.json', 'utf8', function (err, data) {
    res.json(data);
    res.end(data);
  });
});

app.get('/toon/:id', (req, res) => {
  switch (req.params.id) {
    case 'home':
      res.render('toon/home.ejs');
    case 'daily':
      res.render('toon/daily.ejs');
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
