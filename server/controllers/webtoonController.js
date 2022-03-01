const webtoonData = require('../public/data/webtoon.json');

const webtoon = {
  getAll: async (req, res) => {
    try {
      res.json(webtoonData);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

module.exports = webtoon;
