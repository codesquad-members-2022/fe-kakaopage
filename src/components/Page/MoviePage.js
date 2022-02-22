import { AppDownloadLink } from '../index.js';

const MoviePage = () => {
  return `<div class="main-contents">
            <section class="contents">
              <p class="temp-text">Movie Page</p>
            </section>
            ${AppDownloadLink()}
          </div>`;
}

export default MoviePage;