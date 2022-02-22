import { AppDownloadLink } from '../index.js';

const HomePage = () => {
  return `<div class="main-contents">
            <section class="contents">
              <p class="temp-text">Home Page</p>
            </section>
            ${AppDownloadLink()}
          </div>`;
}

export default HomePage;