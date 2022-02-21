import { renderSubCategory } from '../articles/subCategory.js';
import { renderMainChildDOM } from '../utils.js';

const subCategoryIndexArr = [
  '홈',
  '요일연재',
  '웹툰',
  '소년',
  '드라마',
  '로맨스',
  '로판',
  '액션무협',
  'BL',
];

export const Webtoon = async () => {
  const subCategory = renderSubCategory(subCategoryIndexArr);
  const carousel = `<div>Webtoon</div>`;
  const eventBox = `<div>Webtoon</div>`;
  const evenCarouel = `<div>Webtoon</div>`;
  const mainContent = `<div>Webtoon</div>`;
  return renderMainChildDOM({
    subCategory,
    carousel,
    eventBox,
    evenCarouel,
    mainContent,
  });
};
