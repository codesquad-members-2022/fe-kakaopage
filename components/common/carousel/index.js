import { BANNER } from "../../../js/constants.js";
import { createBanner } from "../banner/index.js";

export function createCarousel() {
  const banner = createBanner(BANNER.LARGE);

  const template = `
  <div class="carousel__wrapper">
    <div class="carousel__container">
      <div class="caraousel__banners">
      ${banner.repeat(5)}
      </div>
    </div>
    <div class="carousel__btn-container">
      <div data-button="prev" class="carousel__btn-prev"></div>
      <div data-button="next" class="carousel__btn-next"></div>
    </div>
  </div>
  `;

  return template;
}
