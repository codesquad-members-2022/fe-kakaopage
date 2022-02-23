import { $ } from "./utils.js";
const slides = $(".main-ad-banner__img-container");
const slideImg = document.querySelectorAll(".main-ad-banner__img-container li");
const slideWidth = $(".main-ad-banner__img-container li img").clientWidth;
const slideSpeed = 0.2;
const delay = slideSpeed * 1000;
const initPosition = 0;

let position = -slideWidth;

const makingClone = () => {
  const cloneSlide_first = slideImg[0].cloneNode(true);
  const cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first);
  slides.insertBefore(cloneSlide_last, slides.firstElementChild);
};

const returnOriginSlide = () => {
  if (position >= initPosition) position = -slideWidth * slideImg.length;
  else if (position < -slideWidth * slideImg.length) position = -slideWidth;
};

const isEnd = () => {
  if (position < initPosition && position > -slideWidth * slideImg.length)
    return;

  returnOriginSlide();

  const slideSpeed = initPosition;
  setTimeout(() => {
    moveSlide(position, slideSpeed);
  }, delay);
};

const moveSlide = (position, slideSpeed) => {
  slides.style.transition = `${slideSpeed}s ease-out`;
  slides.style.transform = `translateX(${position}px)`;
};

const changePosition = (btnEvent) => {
  position += btnEvent === "prev" ? slideWidth : -slideWidth;
};

const setEvent = (btnEvent) => {
  slides.classList.add(`slideshow-${btnEvent}`);
};

const playEvent = (btnEvent) => {
  changePosition(btnEvent);
  setEvent(btnEvent);
  moveSlide(position, slideSpeed);
};

export const slideShow = (e) => {
  const btnEvent = e.target.parentNode.dataset.event;
  playEvent(btnEvent);
  isEnd();
};

makingClone();
