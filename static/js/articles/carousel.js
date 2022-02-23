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
  });
  $carouselLayout.append($carouselContentsLayout);

  // carousel을 움직이게하는 버튼 렌더링
  const $buttonCatainer = CarouselButtons({
    idx,
    carouselsArrLength,
    slideToPrev,
    slideToNext,
  });
  $carouselLayout.append($buttonCatainer);

  // carousel을 3초마다 이동
  function moveCarousel() {
    setInterval(() => {
      slideToNext();
      idx = handleCarousel(idx);
    }, 3000);
  }

  moveCarousel();

  return $carouselLayout;
}
