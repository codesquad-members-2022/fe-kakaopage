import { $ } from "./utils.js";
const slides = $(".main-ad-banner__img-container");
const slideImg = document.querySelectorAll(".main-ad-banner__img-container li");
const slideWidth = $(".main-ad-banner__img-container li img").clientWidth;
const slideSpeed = 0.2;
const delay = slideSpeed * 1000;
const initPosition = 0;
const time = 3000;

const clickFlag = {
  value: false,
  setTrue() {
    this.value = true;
  },
  setFalse() {
    this.value = false;
  },
  isTrue() {
    return !!this.value;
  },
};

const position = {
  value: -slideWidth,
  setValue(newValue) {
    this.value = newValue;
  },
};

const timerInterval = () => {
  return setInterval(() => {
    playEvent();
    isEnd();
  }, time);
};

const autoPlay = {
  timer: timerInterval(),
  start() {
    this.timer = timerInterval();
  },
  stop() {
    clearInterval(this.timer);
  },
};

const makingClone = () => {
  const cloneSlide_first = slideImg[0].cloneNode(true);
  const cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first);
  slides.insertBefore(cloneSlide_last, slides.firstElementChild);
};

const returnOriginSlide = () => {
  if (position.value >= initPosition)
    position.setValue(-slideWidth * slideImg.length);
  else if (position.value < -slideWidth * slideImg.length)
    position.setValue(-slideWidth);
};

const isEnd = () => {
  if (
    position.value < initPosition &&
    position.value > -slideWidth * slideImg.length
  )
    return;
  returnOriginSlide();
  const slideSpeed = initPosition;
  setTimeout(() => {
    moveSlide(position.value, slideSpeed);
  }, delay);
};

const moveSlide = (positionValue, slideSpeed) => {
  slides.style.transition = `${slideSpeed}s ease-out`;
  slides.style.transform = `translateX(${positionValue}px)`;
};

const changePosition = (btnEvent) => {
  position.value += btnEvent === "prev" ? slideWidth : -slideWidth;
};

const setEvent = (btnEvent) => {
  slides.classList.add(`slideshow-${btnEvent}`);
};

const playEvent = (btnEvent) => {
  changePosition(btnEvent);
  setEvent(btnEvent);
  moveSlide(position.value, slideSpeed);
};

export const slideShow = (e) => {
  if (clickFlag.isTrue()) return;
  clickFlag.setTrue();
  autoPlay.stop();
  autoPlay.start();
  const btnEvent = e.target.parentNode.dataset.event;
  playEvent(btnEvent);
  isEnd();
  clickFlag.setFalse();
};

makingClone();
