import { AppDownloadLink } from '../index.js';

const TempPage = (tab) => {
  return `<div class="main-contents">
            <section class="contents">
              <p class="temp-text">${tab} Page</p>
            </section>
            ${AppDownloadLink()}          
          </div>`;
}

export default TempPage;