import { $ } from "./utils.js";
const slides = $(".main-ad-banner__img-container");
const slideImg = document.querySelectorAll(".main-ad-banner__img-container li");
const slideWidth = 720;
const slideSpeed = 0.2;
const delay = slideSpeed * 1000;

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

const returnOriginSlide = () => {
  if (position > 0) position = -slideWidth * (slideImg.length - 1);
  else if (position < -slideWidth * slideImg.length) position = -slideWidth;
};

const isEnd = () => {
  if (position < 0 && position > -slideWidth * slideImg.length) return;
  returnOriginSlide();
  const slideSpeed = 0;
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
  initEvent();
  playEvent(btnEvent);
  isEnd();
};

makingClone();
