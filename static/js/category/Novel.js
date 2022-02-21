import { renderMainChildDOM } from '../utils.js';

export const Novel = async () => {
  const subCategory = `<h1>Novel</h1>`;
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
