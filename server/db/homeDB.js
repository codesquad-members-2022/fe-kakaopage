const { SUBCATEGORY_CHILD_ID } = require('../constants/uid.js');

const { CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT } =
  SUBCATEGORY_CHILD_ID;

function getHomeData() {
  return {
    [`${CAROUSEL}`]: 'Main',
    [`${EVENT_BOX}`]: `Main`,
    [`${EVENT_CAROUSEL}`]: `Main`,
    [`${MAIN_CONTENT}`]: `Main`,
  };
}

module.exports = getHomeData;
