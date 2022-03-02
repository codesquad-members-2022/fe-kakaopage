import { BANNER } from "../../../js/constants.js";
import { createBanner } from "../banner/index.js";

export function createCarousel() {
  const banner = createBanner(BANNER.LARGE);

  const template = `
  <div>
  ${banner}
  </div>
  `;

  return template;
}
