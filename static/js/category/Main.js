import { ELEMENT_ID } from '../constants/variable.js';

const { SUB_CATEGORY, CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT } =
  ELEMENT_ID;

export const Main = async (subCategoryUid) => {
  return {
    [`${CAROUSEL}`]: 'Main',
    [`${EVENT_BOX}`]: `Main`,
    [`${EVENT_CAROUSEL}`]: `Main`,
    [`${MAIN_CONTENT}`]: `Main`,
  };
};
