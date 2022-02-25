import ImageCarousel from './class/ImageCarousel.js';
import Slide from './class/Slide.js';

const ELEMENT_WIDTH = 720;

const slide = new Slide(ELEMENT_WIDTH);
const { $slide } = slide;

const stopFlag = {
  flag: true,
  setTrue() {
    this.flag = true;
  },
  setFalse() {
    this.flag = false;
  },
  isTrue() {
    return this.flag;
  },
};

const createImgEl = (src) => {
  const $img = document.createElement('img');
  $img.src = `./img/${src}.png`;
  return $img;
};

const onPrevBtn = (event) => {
  if (!stopFlag.isTrue()) return;
  stopFlag.setFalse();
  slide.moveToPrevPage();
  imageCarousel.decreaseIdx();
  slide.setSlideStateFirst();
  console.log(imageCarousel.images[imageCarousel.getCurIdx()]);
};

const onNextBtn = (event) => {
  if (!stopFlag.isTrue()) return;
  stopFlag.setFalse();
  slide.moveToNextPage();
  imageCarousel.increaseIdx();
  slide.setSlideStateLast();
  console.log(imageCarousel.images[imageCarousel.getCurIdx()]);
};

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const myimages = [
  '여우신랑',
  '던전리셋',
  '에스티오',
  '롱리브더킹',
  '따봉으로레벨업',
];
// 시작 : [에스티오, 여우신랑, 던전리셋]
// 이전버튼 : [던전리셋, 에스티오, 여우신랑]
// 다음버튼 : [여우신랑, 던전리셋, 에스티오]
const imageCarousel = new ImageCarousel(myimages);
console.log(imageCarousel.images);
slide.initSlide(imageCarousel);

prevBtn.addEventListener('click', onPrevBtn);
nextBtn.addEventListener('click', onNextBtn);

$slide.addEventListener('transitionend', (event) => {
  slide.offTransition();

  if (slide.isFirstPage()) {
    const prevImage = imageCarousel.getPrevImage();
    const $prevImage = createImgEl(prevImage);
    $slide.removeChild($slide.lastChild);
    $slide.insertBefore($prevImage, $slide.firstElementChild);
  }

  if (slide.isLastPage()) {
    const nextImage = imageCarousel.getNextImage();
    const $nextImage = createImgEl(nextImage);
    $slide.removeChild($slide.firstChild);
    $slide.appendChild($nextImage);
  }

  slide.setPageMiddle();
  setTimeout(() => stopFlag.setTrue(), 500);
});
