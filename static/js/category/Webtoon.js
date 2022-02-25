import Carousel from '../articles/Carousel/index.js';
import { renderSubCategory } from '../articles/subCategory.js';
import { ELEMENT_ID } from '../constants/variable.js';

const { SUB_CATEGORY, CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT } =
  ELEMENT_ID;

export default function Webtoon(content) {
  return {
    [`${SUB_CATEGORY}`]: renderSubCategory(content[SUB_CATEGORY]),
    [`${CAROUSEL}`]: Carousel(content[CAROUSEL]),
    [`${EVENT_BOX}`]: `Webtoon`,
    [`${EVENT_CAROUSEL}`]: `Webtoon`,
    [`${MAIN_CONTENT}`]: `Webtoon`,
  };
}
