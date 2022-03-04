const categoryData = require('../public/data/category.json');

const category = {
  getAll: (req, res) => {
    try {
      res.json(categoryData);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};

module.exports = category;
