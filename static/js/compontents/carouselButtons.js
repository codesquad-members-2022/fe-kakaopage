export function CarouselButtons({
  idx,
  carouselsArrLength,
  slideToPrev,
  slideToNext,
}) {
  const $buttonCatainer = document.createElement('div');
  $buttonCatainer.innerHTML = `
  <div class="c-carousel__buttons">
    <button type="button" data-move="prev" class="c-carousel__button move-button">
      <i class="fas fa-angle-left"></i>
    </button>
    <button type="button" data-move="next" class="c-carousel__button move-button">
      <i class="fas fa-angle-right"></i>
    </button>
    </div>
  <div class="c-carousel__index">${idx + 1} / ${carouselsArrLength}</div>
  `;

  $buttonCatainer.addEventListener('click', (event) => {
    const $targetBtn = event.target.closest('button');
    if ($targetBtn && $targetBtn.matches('[data-move]')) {
      const moveType = event.target.dataset.move;
      if (moveType == 'next') {
        slideToNext();
      } else {
        slideToPrev();
      }
    }
  });
  return $buttonCatainer;
}
