function CarouselElement({ title, views, genre, subTitle, imgUrl }) {
  const $carouselElement = document.createElement('div');

  $carouselElement.innerHTML = `
    <img  class="c-carousel__img" src=${imgUrl} alt="carousel image" />
    <div class="c-carousel__content">
      <h3 class="c-carousel__title">${title}</h3>
      <div class="c-carousel__footer">
        <div class="c-carousel__indicator indicator">
          <span class="c-carousel__new indicator__new">UP</span>
          <span class="c-carousel__genre"><i class="fas fa-clock"></i> ${genre}</span>
          <div class="divider"></div>
          <span class="c-carousel__views indicator__view"><i class="fas fa-user"></i> ${views}</span>
        </div>
      </div>
      <div class="c-carousel__sub-title">
        ${subTitle}
      </div>
    </div>
  `;
  $carouselElement.classList.add('c-carousel');
  return $carouselElement;
}

export function CarouselLayout({ carouselsArr }) {
  const $carouselContentsLayout = document.createElement('div');
  $carouselContentsLayout.classList.add('l-carousel__content');
  carouselsArr.forEach((element) => {
    const $carouselElement = CarouselElement(element);
    $carouselContentsLayout.appendChild($carouselElement);
  });

  function handleCarousel(idx) {
    $carouselContentsLayout.style.transition = 'all 0.5s ease-in-out';
    $carouselContentsLayout.style.transform = `translateX(-${idx * 720}px)`;
    return idx;
  }

  return [$carouselContentsLayout, handleCarousel];
}
