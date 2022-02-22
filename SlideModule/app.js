class CarouselImages {
  constructor(images) {
    this.images = images;
    this.length = this.images.length;
    this.curIdx = 0;
    console.log(this);
  }
  getPrevImage() {
    const prevIdx = this.getPrevIdx();
    return this.images[prevIdx];
  }
  getNextImage() {
    const nextIdx = this.getNextIdx();
    return this.images[nextIdx];
  }
  getCurIdx() {
    return this.curIdx;
  }
  getPrevIdx() {
    if (this.curIdx === 0) return this.length - 1;
    else return this.curIdx - 1;
  }
  getNextIdx() {
    if (this.curIdx === this.length - 1) return 0;
    else return this.curIdx + 1;
  }
  decreaseIdx() {
    this.curIdx = this.getPrevIdx();
  }
  increaseIdx() {
    this.curIdx = this.getNextIdx();
  }
}

const slide = {
  $slide: document.querySelector('.slide'),
  elementWidth: 720,
  initSlide({ images, length }) {
    this.$slide.appendChild(createImgEl(images[length - 1]));
    this.$slide.appendChild(createImgEl(images[0]));
    this.$slide.appendChild(createImgEl(images[1]));
    this.$slide.style.transform = `translate3d(-${this.elementWidth}px, 0, 0)`;
  },
  setSlideStateFirst() {
    this.$slide.dataset.state = 'first';
  },
  setSlideStateMid() {
    this.$slide.dataset.state = 'mid';
  },
  setSlideStateLast() {
    this.$slide.dataset.state = 'last';
  },
  moveToPrevPage() {
    onTransition(this.$slide);
    this.$slide.style.transform = `translate3D(-${
      this.elementWidth * 0
    }px, 0, 0)`;
  },
  moveToNextPage() {
    onTransition($slide);
    this.$slide.style.transform = `translate3d(-${
      this.elementWidth * 2
    }px, 0, 0)`;
  },
  setPageMiddle() {
    this.$slide.style.transform = `translate3d(-${this.elementWidth}px, 0, 0)`;
    this.setSlideStateMid();
  },
  isFirstPage() {
    return this.$slide.dataset.state === 'first';
  },
  isLastPage() {
    return this.$slide.dataset.state === 'last';
  },
};

const createImgEl = (src) => {
  const $img = document.createElement('img');
  $img.src = `./img/${src}.png`;
  return $img;
};

const onTransition = (element) => {
  element.style.transition = 'transform 300ms';
};

const offTransition = (element) => {
  element.style.transition = 'none';
};

const onPrevBtn = (event) => {
  if (!flag) return;
  flag = false;
  slide.moveToPrevPage();
  carouselImages.decreaseIdx();
  slide.setSlideStateFirst();
  console.log(carouselImages.images[carouselImages.getCurIdx()]);
};

const onNextBtn = (event) => {
  if (!flag) return;
  flag = false;
  slide.moveToNextPage();
  carouselImages.increaseIdx();
  slide.setSlideStateLast();
  console.log(carouselImages.images[carouselImages.getCurIdx()]);
};

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let flag = true;

const myimages = ['여우신랑', '던전리셋', '에스티오'];
// 시작 : [에스티오, 여우신랑, 던전리셋]
// 이전버튼 : [던전리셋, 에스티오, 여우신랑]
// 다음버튼 : [여우신랑, 던전리셋, 에스티오]
const carouselImages = new CarouselImages(myimages);
const { $slide } = slide;
slide.initSlide(carouselImages);

prevBtn.addEventListener('click', onPrevBtn);
nextBtn.addEventListener('click', onNextBtn);

$slide.addEventListener('transitionend', (event) => {
  offTransition(event.target);

  if (slide.isFirstPage()) {
    const prevImage = carouselImages.getPrevImage();
    const $prevImage = createImgEl(prevImage);
    $slide.removeChild($slide.lastChild);
    $slide.insertBefore($prevImage, $slide.firstElementChild);
  }
  if (slide.isLastPage()) {
    const nextImage = carouselImages.getNextImage();
    const $nextImage = createImgEl(nextImage);
    $slide.removeChild($slide.firstChild);
    $slide.appendChild($nextImage);
  }

  slide.setPageMiddle();
  flag = true;
});
