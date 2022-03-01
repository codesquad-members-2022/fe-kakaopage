import { $ } from "../utils.js";

const slideWidth = $(".main-ad-banner__img").clientWidth;
const slideSpeed = 0.4;
const sec = 1000;
const delay = slideSpeed * sec;
const initPosition = 0;
const autoTime = 3 * sec;
let clickFlag = false;

const position = {
  value: -slideWidth,
  setValue(newValue) {
    this.value = newValue;
  },
};

const timerInterval = () => {
  return setInterval(() => {
    if (clickFlag) return;
    clickFlag = true;
    playEvent();
    isEnd();
  }, autoTime);
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
  const slides = $(".event-slider");
  const slideImg = document.querySelectorAll(".event-slider li");
  const cloneSlide_first = slideImg[0].cloneNode(true);
  const cloneSlide_last = slides.lastElementChild.cloneNode(true);
  slides.append(cloneSlide_first);
  slides.insertBefore(cloneSlide_last, slides.firstElementChild);
};

const autoPlayStart = () => {
  autoPlay.start();
};

const autoPlayStop = () => {
  autoPlay.stop();
};

const returnOriginSlide = (containerWidth) => {
  if (position.value >= initPosition) position.setValue(-containerWidth);
  else if (position.value < -containerWidth) position.setValue(-slideWidth);
};

const nonBlockingClick = () => {
  setTimeout(() => {
    clickFlag = false;
  }, delay);
};

const isEnd = () => {
  const slideLength = document.querySelectorAll(".event-slider li").length;
  const clonedSlide = 2;
  const containerWidth = slideWidth * (slideLength - clonedSlide);
  if (position.value < initPosition && position.value > -containerWidth) return;
  returnOriginSlide(containerWidth);
  const slideSpeed = initPosition;
  setTimeout(() => {
    moveSlide(position.value, slideSpeed);
  }, delay);
};

const moveSlide = (positionValue, slideSpeed) => {
  const slides = $(".event-slider");
  slides.style.transition = `${slideSpeed}s ease-out`;
  slides.style.transform = `translateX(${positionValue}px)`;
};

const changePosition = (btnEvent) => {
  position.value += btnEvent === "prev" ? slideWidth : -slideWidth;
};

const changeTab = () => {
  moveSlide(-slideWidth, 0);
  position.value = -slideWidth;
};

const playEvent = (btnEvent) => {
  changePosition(btnEvent);
  moveSlide(position.value, slideSpeed);
  nonBlockingClick();
};

const slideShow = (e) => {
  if (clickFlag) return;
  clickFlag = true;
  const btnEvent = e.target.parentNode.dataset.event;
  playEvent(btnEvent);
  isEnd();
};

makingClone();

export { slideShow, autoPlayStart, autoPlayStop, makingClone, changeTab };
