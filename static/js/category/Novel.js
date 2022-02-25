import { renderSubCategory } from '../articles/subCategory.js';
import { ELEMENT_ID } from '../constants/variable.js';

const { SUB_CATEGORY, CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT } =
  ELEMENT_ID;

export default function Novel(content) {
  return {
    [`${SUB_CATEGORY}`]: renderSubCategory(content[SUB_CATEGORY]),
    [`${CAROUSEL}`]: 'Novel',
    [`${EVENT_BOX}`]: `Novel`,
    [`${EVENT_CAROUSEL}`]: `Novel`,
    [`${MAIN_CONTENT}`]: `Novel`,
  };
}
