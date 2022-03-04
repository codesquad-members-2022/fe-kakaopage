const router = require('./server/api/DataRouter.js');
const express = require('express');
const cors = require('cors');
const path = require('path');

const server = express();
const PORT = 3000;

server.use(cors());
server.use(express.static(__dirname));
server.use('/data', router);

server.set('port', process.env.PORT || PORT);

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
});

server.listen(server.get('port'), () => {
    console.log('서버 시작 : ' + server.get('port'));
});