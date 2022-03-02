import { AppDownloadLink } from '../index.js';
import { convertStringToHTML } from '../../utils.js';

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