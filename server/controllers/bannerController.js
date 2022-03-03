const bannerData = require('../public/data/banner.json');

const banner = {
  getAll: (req, res) => {
    try {
      res.json(bannerData);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

module.exports = banner;
