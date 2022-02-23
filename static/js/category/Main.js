import { renderMainChildDOM } from '../utils.js';

export const Main = async (subCategoryUid) => {
  const subCategory = `Main`;
  const carousel = `Main`;
  const eventBox = `Main`;
  const evenCarouel = `Main`;
  const mainContent = `Main`;
  return renderMainChildDOM({
    subCategory,
    carousel,
    eventBox,
    evenCarouel,
    mainContent,
  });
};
