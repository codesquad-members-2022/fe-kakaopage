const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/static/index.html`);
});

app.get('/main', (req, res) => {
  res.sendFile(`${__dirname}/static/index.html`);
});

app.post('search_post', (req, res) => {
  console.log(req.body.search);
});

app.listen(port, () => {
  console.log('Server is working : PORT - ', port);
});
