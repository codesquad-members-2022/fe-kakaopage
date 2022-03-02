const server = require('express');
const router = server.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.use('/webtoon', require('./webtoon'));

module.exports = router;
