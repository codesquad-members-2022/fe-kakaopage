const server = require('express');
const webtoonController = require('../controllers/webtoonController.js');

const router = server.Router();

router.get('/', webtoonController.getAll);

module.exports = router;
