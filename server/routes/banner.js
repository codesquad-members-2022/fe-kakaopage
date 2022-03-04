const server = require('express');
const bannerController = require('../controllers/bannerController.js');

const router = server.Router();

router.get('/', bannerController.getAll);

module.exports = router;
