const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
// const bodyParser = require('body-parser');

app.use(cors());

app.use(express.static('static'));
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/static/index.html`);
});

app.get('/:id', (req, res) => {
  const pageData = require(`${__dirname}/static/src/data/${req.params.id}.json`);
  res.send(pageData);
  // res.sendFile(`${__dirname}/static/index.html`);
});

app.listen(PORT, () => {
  console.log('Server is working : PORT - ', PORT);
});
