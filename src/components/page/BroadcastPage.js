import { AppDownloadLink } from '../index.js';

const BroadcastPage = () => {
  return `<div class="main-contents">
            <section class="contents">
              <p class="temp-text">Broadcast Page</p>
            </section>
            ${AppDownloadLink()}
          </div>`;
}

export default BroadcastPage;