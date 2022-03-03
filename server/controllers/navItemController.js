const navItemData = require('../public/data/navItem.json');

const navItem = {
  getAll: (req, res) => {
    try {
      res.json(navItemData);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

module.exports = navItem;
