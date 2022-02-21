import { renderMainChildDOM } from '../utils.js';

export const Main = async () => {
  const subCategory = `<h1>Main</h1>`;
  const carousel = `<div>Main</div>`;
  const eventBox = `<div>Main</div>`;
  const evenCarouel = `<div>Main</div>`;
  const mainContent = `<div>Main</div>`;
  return renderMainChildDOM({
    subCategory,
    carousel,
    eventBox,
    evenCarouel,
    mainContent,
  });
};
