import { $ } from "./utils.js";
const slides = $(".main-ad-banner__img-container");
const slideImg = document.querySelectorAll(".main-ad-banner__img-container li");
const slideWidth = 720;
const slideSpeed = 0.2;
const delay = slideSpeed * 1000;
const originFirstSlide = 1;
const originLastSlide = slideImg.length;
const cloneFirstSlide = originFirstSlide - 1;
const cloneLastSlide = originLastSlide + 1;

let order = 1;
let position = -slideWidth;

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

const returnOriginSlide = () => {
  if (order === cloneFirstSlide) order = originLastSlide;
  else if (order === cloneLastSlide) order = originFirstSlide;
  position = order * -slideWidth;
};

const isEnd = () => {
  if (order !== cloneFirstSlide && order !== cloneLastSlide) return;
  const slideSpeed = 0;
  returnOriginSlide();
  setTimeout(() => {
    moveSlide(position, slideSpeed);
  }, delay);
};

const moveSlide = (position, slideSpeed) => {
  slides.style.transition = `${slideSpeed}s ease-out`;
  slides.style.transform = `translateX(${position}px)`;
};

const setEvent = (btnEvent) => {
  position += btnEvent === "prev" ? slideWidth : -slideWidth;
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
