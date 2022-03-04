const server = require('express');
const navItemController = require('../controllers/navItemController.js');

const router = server.Router();

router.get('/', navItemController.getAll);

module.exports = router;
