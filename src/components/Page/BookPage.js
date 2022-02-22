import { AppDownloadLink } from '../index.js';

const BookPage = () => {
  return `<div class="main-contents">
            <section class="contents">
              <p class="temp-text">Book Page</p>
            </section>
            ${AppDownloadLink()}          
          </div>`;
}

export default BookPage;