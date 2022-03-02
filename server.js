const router = require('./server/api/DataRouter.js');
const express = require("express");
const cors = require('cors');

const server = express();
const PORT = 3000;

server.use(cors());
server.use(express.static(__dirname));
server.use('/data', router);

server.set('port', process.env.PORT || 3000);

server.get('/', (req, res) => {
    res.sendFile(__dirname + './index.html');
});

server.listen(PORT, () => {
    console.log('서버 시작 : ' + server.get('port'));
});