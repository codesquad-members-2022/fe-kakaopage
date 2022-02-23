import { $ } from "./utils.js";
const slides = $(".main-ad-banner__img-container");
const slideImg = document.querySelectorAll(".main-ad-banner__img-container li");
const slideWidth = 720;
let order = 1;
let position = -720;

const makingClone = () => {
  const cloneSlide_first = slideImg[0].cloneNode(true);
  const cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first);
  slides.insertBefore(cloneSlide_last, slides.firstElementChild);
};

const initEvent = () => {
  slides.classList.remove("slideshow-prev");
  slides.classList.remove("slideshow-next");
};

const changingOrder = (btnEvent) => {
  return btnEvent === "prev" ? order-- : order++;
};

const isEnd = () => {
  if (order !== 0 && order !== 4) return;
  const slideSpeed = 0;
  if (order === 0) order = 3;
  else if (order === 4) order = 1;
  position = order * -slideWidth;
  setTimeout(() => {
    moveSlide(position, slideSpeed);
  }, 0);
};

const moveSlide = (position, slideSpeed) => {
  slides.style.transition = `${slideSpeed}s ease-out`;
  slides.style.transform = `translateX(${position}px)`;
};

const setEvent = (btnEvent) => {
  const slideSpeed = 0.3;
  position += slideWidth * (btnEvent === "prev" ? 1 : -1);
  slides.classList.add(`slideshow-${btnEvent}`);
  moveSlide(position, slideSpeed);
};

export const slideShow = (e) => {
  const btnEvent = e.target.parentNode.dataset.event;
  initEvent();
  changingOrder(btnEvent);
  setEvent(btnEvent);
  isEnd();
};

makingClone();
