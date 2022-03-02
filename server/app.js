const express = require('express');
const cors = require('cors');
const indexRouter = require('./routes/index');

const server = express();

const port = 3000;

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

server.use(cors());
server.use('/', indexRouter);

module.exports = server;
