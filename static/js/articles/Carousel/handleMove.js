export function handleMove(layout, wrapper, array) {
  const $carouselLayout = layout;
  const $carouselContentsWrapper = wrapper;
  let idx = 0;
  let carouselsArrLength = array.length;

  function moveCarousel(type) {
    type === 'next' ? slideToNext() : slideToPrev();
    $carouselContentsWrapper.style.transition = 'all 0.5s ease-in-out';
    $carouselContentsWrapper.style.transform = `translateX(-${idx * 720}px)`;
    renderCarouselIndex();
  }
  function renderCarouselIndex() {
    const $prevIndex = $carouselLayout.querySelector('.c-carousel__index');
    if ($prevIndex) {
      $prevIndex.remove();
    }
    const $newIndex = renderIndexLayout();
    $carouselLayout.append($newIndex);
  }
  function renderIndexLayout() {
    const $indexLayout = document.createElement('div');
    $indexLayout.classList.add('c-carousel__index');
    $indexLayout.innerHTML = `${idx + 1} / ${carouselsArrLength}`;
    return $indexLayout;
  }
  function slideToPrev() {
    idx <= 0 ? (idx = 2) : idx--;
  }
  function slideToNext() {
    idx >= carouselsArrLength - 1 ? (idx = 0) : idx++;
  }
  return {
    renderCarouselIndex,
    renderButtons() {
      const $buttonCatainer = document.createElement('div');
      $buttonCatainer.classList.add('c-carousel__buttons');
      $buttonCatainer.innerHTML = `
        <button type="button" data-move="prev" class="c-carousel__button move-button">
          <i class="fas fa-angle-left"></i>
        </button>
        <button type="button" data-move="next" class="c-carousel__button move-button">
          <i class="fas fa-angle-right"></i>
        </button>`;
      $buttonCatainer.addEventListener('click', (event) => {
        const $targetBtn = event.target.closest('button');
        if ($targetBtn && $targetBtn.matches('[data-move]')) {
          const moveType = $targetBtn.dataset.move;
          moveCarousel(moveType);
        }
      });
      return $buttonCatainer;
    },
    initMove() {
      setInterval(() => {
        const moveType = 'next';
        moveCarousel(moveType);
      }, 3000);
    },
  };
}
