import { AppDownloadLink } from '../index.js';
import { convertStringToHTML } from '../../js/util';

const TempPage = (tab) => {

  const template = convertStringToHTML(
          `<div class="main-contents">
            <section class="contents">
              <p class="temp-text">${tab} Page</p>
            </section>
          </div>`);

  template.appendChild(AppDownloadLink());

  return template;
};

export default TempPage;
