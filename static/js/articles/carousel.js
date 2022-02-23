import { CarouselLayout } from '../compontents/carousel.js';
import { CarouselButtons } from '../compontents/carouselButtons.js';
import { CarouselPageIndex } from '../compontents/carouselPageIndex.js';

export function renderCarousel(carouselsArr) {
  let idx = 0;
  const carouselsArrLength = carouselsArr.length;

  // 레이아웃 렌더링
  const $carouselLayout = document.createElement('div');
  $carouselLayout.classList.add('c-carousel__wrapper');

  // carousel 이미지들 렌더링
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
  renderCarouselIndex();

  // 동적 기능 관련 함수들

  function slideToPrev() {
    if (idx <= 0) {
      idx = handleCarousel(2);
      return;
    }
    idx = handleCarousel(idx - 1);
  }

  function slideToNext() {
    if (idx >= carouselsArrLength - 1) {
      idx = handleCarousel(0);
      return;
    }
    idx = handleCarousel(idx + 1);
  }

  function renderCarouselIndex() {
    const $prevCarouselIndex =
      $carouselLayout.querySelector('.c-carousel__index');
    if ($prevCarouselIndex) {
      $prevCarouselIndex.remove();
    }

    const $carouselPageIndex = CarouselPageIndex({ idx, carouselsArrLength });
    $carouselLayout.append($carouselPageIndex);
  }

  // carousel을 3초마다 이동
  function moveCarousel() {
    setInterval(() => {
      slideToNext();
      renderCarouselIndex({ idx, carouselsArrLength });
    }, 3000);
  }

  moveCarousel();

  return $carouselLayout;
}
