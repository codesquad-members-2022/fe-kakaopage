export function CarouselPageIndex({ idx, carouselsArrLength }) {
  const $carouselIndex = document.createElement('div');
  $carouselIndex.classList.add('c-carousel__index');
  $carouselIndex.innerHTML = `${idx + 1} / ${carouselsArrLength}`;
  return $carouselIndex;
}
