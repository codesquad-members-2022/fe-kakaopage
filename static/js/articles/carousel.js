export function renderCarousel(carouselsArr) {
  let idx = 0;
  const carouselsArrLength = carouselsArr.length;

  const carouselLayout = document.createElement('div');
  carouselLayout.classList.add('c-carousel__wrapper');

  const carouselContentsLayout = document.createElement('div');
  carouselContentsLayout.classList.add('l-carousel__content');

  carouselsArr.forEach((element) => {
    const { title, views, genre, subTitle, imgUrl } = element;
    const carouselElement = document.createElement('div');

    carouselElement.innerHTML = `
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
    carouselElement.classList.add('c-carousel');
    carouselContentsLayout.appendChild(carouselElement);
  });

  carouselLayout.append(carouselContentsLayout);

  const buttonCatainer = document.createElement('div');
  buttonCatainer.innerHTML = `
  <div class="c-carousel__buttons">
    <button type="button" data-move="prev" class="c-carousel__button move-button">
      <i class="fas fa-angle-left"></i>
    </button>
    <button type="button" data-move="next" class="c-carousel__button move-button">
      <i class="fas fa-angle-right"></i>
    </button>
    </div>
  <div class="c-carousel__index">${1} / ${carouselsArrLength}</div>
  `;
  buttonCatainer.addEventListener('click', (event) => {
    // event.preventDefault();
    // debugger;
    const targetBtn = event.target.closest('button');
    if (targetBtn && targetBtn.matches('[data-move]')) {
      console.log(targetBtn.dataset.move);
    }
  });
  carouselLayout.append(buttonCatainer);
  return carouselLayout;
}
