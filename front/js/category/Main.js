import { ELEMENT_ID } from '../constants/variable.js';

const { CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT } = ELEMENT_ID;

export default function Main(content) {
  return {
    [`${CAROUSEL}`]: 'Main',
    [`${EVENT_BOX}`]: `Main`,
    [`${EVENT_CAROUSEL}`]: `Main`,
    [`${MAIN_CONTENT}`]: `Main`,
  };
}
