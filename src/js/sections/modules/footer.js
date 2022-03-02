import { $ } from '../../util/index.js';
import { SECTION } from '../../data/dataSet.js';

const toggleCompanyInfo = () => {
  $(`.${SECTION.FOOTER} .btn__toggle`).addEventListener('click', e => {
    $('.footer__company-info').classList.toggle('d-none');
  });
};

const initFooter = () => {
  toggleCompanyInfo();
};

export { initFooter };
