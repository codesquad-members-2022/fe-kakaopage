const express = require('express');
const cors = require('cors');

const server = express();
const PORT = 3000;

server.use(cors());
server.use(express.static(__dirname));
server.set('port', process.env.PORT || 3000);

server.get('/', (req, res) => {
    res.render(__dirname + './index.html');
});

server.listen(PORT, () => {
    console.log('서버 시작 : ' + server.get('port'));
})