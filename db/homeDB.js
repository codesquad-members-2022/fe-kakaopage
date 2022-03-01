const { ELEMENT_ID } = require('./subCategoryID');

const { CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT } = ELEMENT_ID;

function getHomeData() {
  return {
    [`${CAROUSEL}`]: 'Main',
    [`${EVENT_BOX}`]: `Main`,
    [`${EVENT_CAROUSEL}`]: `Main`,
    [`${MAIN_CONTENT}`]: `Main`,
  };
}

module.exports = getHomeData;
