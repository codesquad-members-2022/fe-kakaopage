import { renderSubCategory } from '../articles/subCategory.js';
import { ELEMENT_ID } from '../constants/variable.js';

const { SUB_CATEGORY, CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT } =
  ELEMENT_ID;

export const Novel = async (subCategoryUid) => {
  return {
    [`${SUB_CATEGORY}`]: renderSubCategory(subCategoryIndexArr),
    [`${CAROUSEL}`]: 'Novel',
    [`${EVENT_BOX}`]: 'Novel',
    [`${EVENT_CAROUSEL}`]: 'Novel',
    [`${MAIN_CONTENT}`]: 'Novel',
  };
};

// mock: 임시데이터 - categoryUid에 해당하는 데이터를 서버에서 불러올 예정
const subCategoryIndexArr = [
  '홈',
  '요일연재',
  '웹소설',
  '판타지',
  '현판',
  '로맨스',
  '로판',
  '무협',
  '판드',
  'BL',
  '단행본',
];
