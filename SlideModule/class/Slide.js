const createImgEl = (src) => {
  const $img = document.createElement('img');
  $img.src = `./img/${src}.png`;
  return $img;
};

export default class Slide {
  constructor(elementWidth) {
    this.$slide = document.querySelector('.slide');
    this.elementWidth = elementWidth;
    this.state = 'mid';
  }
  initSlide({ images, length }) {
    this.$slide.appendChild(createImgEl(images[length - 1]));
    this.$slide.appendChild(createImgEl(images[0]));
    this.$slide.appendChild(createImgEl(images[1]));
    this.$slide.style.transform = `translate3d(-${this.elementWidth}px, 0, 0)`;
  }
  setSlideStateFirst() {
    this.state = 'first';
  }
  setSlideStateMid() {
    this.state = 'mid';
  }
  setSlideStateLast() {
    this.state = 'last';
  }
  moveToPrevPage() {
    this.onTransition();
    this.$slide.style.transform = `translate3D(-${
      this.elementWidth * 0
    }px, 0, 0)`;
  }
  moveToNextPage() {
    this.onTransition();
    this.$slide.style.transform = `translate3d(-${
      this.elementWidth * 2
    }px, 0, 0)`;
  }
  setPageMiddle() {
    this.$slide.style.transform = `translate3d(-${this.elementWidth}px, 0, 0)`;
    this.setSlideStateMid();
  }
  isFirstPage() {
    return this.state === 'first';
  }
  isLastPage() {
    return this.state === 'last';
  }
  onTransition() {
    this.$slide.style.transition = 'transform 300ms';
  }
  offTransition() {
    this.$slide.style.transition = 'none';
  }
}
