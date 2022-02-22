import { AppDownloadLink } from '../index.js';

const NovelPage = () => {
  return `<div class="main-contents">
            <section class="contents">
              <p class="temp-text">Novel Page</p>
            </section>
            ${AppDownloadLink()}
          </div>`;
}

export default NovelPage;