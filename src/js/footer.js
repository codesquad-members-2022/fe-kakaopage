import { $ } from "./util/dom.js"
import { SECTION } from './data/dataSet.js';

export const toggleCompanyInfo = () => {
  $(`.${SECTION.FOOTER} .btn__toggle`).addEventListener('click', e => {
      $('.footer__company-info').classList.toggle('d-none');
  })
}
