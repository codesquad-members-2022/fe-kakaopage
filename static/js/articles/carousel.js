import { CarouselLayout } from '../compontents/carousel.js';
import { CarouselButtons } from '../compontents/carouselButtons.js';

export function renderCarousel(carouselsArr) {
  let idx = 0;
  const carouselsArrLength = carouselsArr.length;

  function slideToPrev() {
    if (idx <= 0) {
      idx = carouselsArrLength - 1;
      return;
    }
    idx--;
  }

  function slideToNext() {
    if (idx >= carouselsArrLength - 1) {
      idx = 0;
      return;
    }
    idx++;
  }

  const $carouselLayout = document.createElement('div');
  $carouselLayout.classList.add('c-carousel__wrapper');

  const [$carouselContentsLayout, handleCarousel] = CarouselLayout({
    carouselsArr,
    idx,
  });
  $carouselLayout.append($carouselContentsLayout);

  const $buttonCatainer = CarouselButtons({ idx, carouselsArrLength });
  $carouselLayout.append($buttonCatainer);

  function moveCarousel() {
    setInterval(() => {
      slideToNext();
      idx = handleCarousel(idx);
    }, 3000);
  }

  moveCarousel();

  return $carouselLayout;
}
