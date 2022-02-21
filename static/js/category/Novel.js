import { renderSubCategory } from '../articles/subCategory.js';
import { renderMainChildDOM } from '../utils.js';

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
  const carousel = `<div>Novel</div>`;
  const eventBox = `<div>Novel</div>`;
  const evenCarouel = `<div>Novel</div>`;
  const mainContent = `<div>Novel</div>`;
  return renderMainChildDOM({
    subCategory,
    carousel,
    eventBox,
    evenCarouel,
    mainContent,
  });
};
