import { contentWrapper } from './contentWrapper.js';
import { CarouselButtons } from './buttons.js';

export default function Carousel(carouselsArr) {
  let idx = 0;
  const carouselsArrLength = carouselsArr.length;

  // 레이아웃 렌더링
  const $carouselLayout = document.createElement('div');
  $carouselLayout.classList.add('c-carousel__wrapper');

  // carousel 이미지들 렌더링
  const $carouselContentsWrapper = contentWrapper({
    carouselsArr,
  });
  $carouselLayout.append($carouselContentsWrapper);

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
  // idx 때문에 따로 뺄 수가 없음.

  function handleCarousel() {
    $carouselContentsWrapper.style.transition = 'all 0.5s ease-in-out';
    $carouselContentsWrapper.style.transform = `translateX(-${idx * 720}px)`;
    renderCarouselIndex();
  }

  function handlePageIndex({ idx, carouselsArrLength }) {
    const $carouselIndex = document.createElement('div');
    $carouselIndex.classList.add('c-carousel__index');
    $carouselIndex.innerHTML = `${idx + 1} / ${carouselsArrLength}`;
    return $carouselIndex;
  }

  function slideToPrev() {
    idx <= 0 ? (idx = 2) : idx--;
    handleCarousel();
  }

  function slideToNext() {
    idx >= carouselsArrLength - 1 ? (idx = 0) : idx++;
    handleCarousel();
  }

  function renderCarouselIndex() {
    const $prevCarouselIndex =
      $carouselLayout.querySelector('.c-carousel__index');
    if ($prevCarouselIndex) {
      $prevCarouselIndex.remove();
    }

    const $carouselPageIndex = handlePageIndex({ idx, carouselsArrLength });
    $carouselLayout.append($carouselPageIndex);
  }

  // carousel을 3초마다 이동
  function moveCarousel() {
    setInterval(() => {
      slideToNext();
    }, 3000);
  }

  moveCarousel();

  return $carouselLayout;
}
