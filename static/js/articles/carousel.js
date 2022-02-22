export function renderCarousel(carouselsArr) {
  const carouselElement = carouselsArr[0];
  const carouselsArrLength = carouselsArr.length;
  const { title, views, genre, subTitle, imgUrl } = carouselElement;
  const newDiv = document.createElement('div');
  newDiv.classList.add('c-carousel');
  newDiv.innerHTML = `
  <div class="l-carousel__content">
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
        <div class="c-carousel__index">${1}/${carouselsArrLength}</div>
      </div>
      <div class="c-carousel__sub-title">
        ${subTitle}
      </div>
    </div>
  </div>
  <div class="c-carousel__buttons">
    <button type="button" class="c-carousel__button move-button">
      <i class="fas fa-angle-left"></i>
    </button>
    <button type="button" class="c-carousel__button move-button">
      <i class="fas fa-angle-right"></i>
    </button>
  </div>
  `;
  return newDiv;
}
