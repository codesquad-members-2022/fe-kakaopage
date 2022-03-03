import { ELEMENT_ID } from '../constants/variable.js';
import renderPage from './_renderPage.js';

const { CAROUSEL, EVENT_BOX, EVENT_CAROUSEL, MAIN_CONTENT } = ELEMENT_ID;

export default function Main(content) {
  const template = {
    [`${CAROUSEL}`]: 'Main',
    [`${EVENT_BOX}`]: `Main`,
    [`${EVENT_CAROUSEL}`]: `Main`,
    [`${MAIN_CONTENT}`]: `Main`,
  };
  return {
    render() {
      return renderPage(template);
    },
  };
}
