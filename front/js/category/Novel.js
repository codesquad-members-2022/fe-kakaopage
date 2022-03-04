import { SubCategory } from '../articles/SubCategory/index.js';
import { ELEMENT_ID } from '../constants/variable.js';
import renderPage from './_renderPage.js';

const { SUB_CATEGORY, CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT } =
  ELEMENT_ID;

export default function Novel(content) {
  const template = {
    [`${SUB_CATEGORY}`]: SubCategory(content[SUB_CATEGORY]),
    [`${CAROUSEL}`]: 'Novel',
    [`${EVENT_BOX}`]: `Novel`,
    [`${EVENT_CAROUSEL}`]: `Novel`,
    [`${MAIN_CONTENT}`]: `Novel`,
  };
  return {
    render() {
      return renderPage(template);
    },
  };
}
