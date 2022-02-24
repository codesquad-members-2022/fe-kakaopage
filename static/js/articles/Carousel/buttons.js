export function CarouselButtons({ slideToPrev, slideToNext }) {
  const $buttonCatainer = document.createElement('div');
  $buttonCatainer.classList.add('c-carousel__buttons');
  $buttonCatainer.innerHTML = `
    <button type="button" data-move="prev" class="c-carousel__button move-button">
      <i class="fas fa-angle-left"></i>
    </button>
    <button type="button" data-move="next" class="c-carousel__button move-button">
      <i class="fas fa-angle-right"></i>
    </button>
  `;

  $buttonCatainer.addEventListener('click', (event) => {
    const $targetBtn = event.target.closest('button');
    if ($targetBtn && $targetBtn.matches('[data-move]')) {
      const moveType = $targetBtn.dataset.move;
      if (moveType == 'next') {
        slideToNext();
      } else {
        slideToPrev();
      }
    }
  });
  return $buttonCatainer;
}
