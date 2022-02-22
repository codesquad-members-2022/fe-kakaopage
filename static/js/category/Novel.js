import { renderSubCategory } from '../articles/subCategory.js';
import { renderMainChildDOM } from '../utils.js';

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

export const Novel = async () => {
  const subCategory = renderSubCategory(subCategoryIndexArr);
  const carousel = 'Novel';
  const eventBox = 'Novel';
  const evenCarouel = 'Novel';
  const mainContent = 'Novel';
  return renderMainChildDOM({
    subCategory,
    carousel,
    eventBox,
    evenCarouel,
    mainContent,
  });
};
