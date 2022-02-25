const { ELEMENT_ID } = require('./subCategoryID');

const { SUB_CATEGORY, CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT } =
  ELEMENT_ID;

function novelData(subUid) {
  return {
    [`${SUB_CATEGORY}`]: subCategoryIndexArr,
    [`${CAROUSEL}`]: 'Novel',
    [`${EVENT_BOX}`]: `Webtoon`,
    [`${EVENT_CAROUSEL}`]: `Webtoon`,
    [`${MAIN_CONTENT}`]: `Webtoon`,
  };
}

module.exports = novelData;

const subCategoryIndexArr = [
  { key: 0, value: '홈' },
  { key: 1, value: '요일연재' },
  { key: 2, value: '웹소설' },
  { key: 3, value: '판타지' },
  { key: 4, value: '현판' },
  { key: 5, value: '로맨스' },
  { key: 6, value: '로판' },
  { key: 7, value: '무협' },
  { key: 8, value: '판드' },
  { key: 9, value: 'BL' },
  { key: 10, value: '단행본' },
];
