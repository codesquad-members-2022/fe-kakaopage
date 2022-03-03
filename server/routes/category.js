const server = require('express');
const categoryController = require('../controllers/categoryController.js');

const router = server.Router();

router.get('/', categoryController.getAll);

module.exports = router;
