const server = require('express');
const router = server.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/webtoon', require('./webtoon'));
router.use('/nav-item', require('./navItem'));
router.use('/banner', require('./banner'));
router.use('/category', require('./category'));

module.exports = router;
