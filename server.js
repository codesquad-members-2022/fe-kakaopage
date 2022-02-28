const express = require('express');
const cors = require('cors');
const data = require('./data/data.json');

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/data', (req, res) => {
  res.send(data);
});

app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/express.html');
});

app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`);
});
