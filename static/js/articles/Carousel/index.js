import { contentWrapper } from './contentWrapper.js';
import { handleMove } from './handleMove.js';

export default function Carousel(carouselsArr) {
  // 레이아웃 렌더링
  const $carouselLayout = document.createElement('div');
  $carouselLayout.classList.add('c-carousel__wrapper');

  // carousel 이미지들 렌더링
  const $carouselContentsWrapper = contentWrapper({
    carouselsArr,
  });
  $carouselLayout.append($carouselContentsWrapper);
  // 동적 기능 함수 생성
  const moveEventHandler = handleMove(
    $carouselLayout,
    $carouselContentsWrapper,
    carouselsArr
  );
  // carousel을 움직이게하는 버튼 렌더링
  const $buttonCatainer = moveEventHandler.renderButtons();
  $carouselLayout.append($buttonCatainer);

  moveEventHandler.renderCarouselIndex();
  moveEventHandler.moveCarousel();

  return $carouselLayout;
}
