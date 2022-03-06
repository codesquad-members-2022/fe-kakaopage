import { $, $$, delay } from "./dom-lib.js";
let $slideContainer;
let $slide;
let $$slides;
let slideWidth;
let getSlide;
let index = 1;
let timeFlag = true;

export const initCarouselEvent = ({
  slideContainer,
  slide,
  slides,
  INTERVAL,
}) => {
  $slideContainer = $(slideContainer);
  $slide = $(slide);
  $$slides = $$(slides);

  let slideId;

  const firstClone = $$slides[0].cloneNode(true);
  const lastClone = $$slides[$$slides.length - 1].cloneNode(true);
  firstClone.id = "first-clone";
  lastClone.id = "last-clone";
  $slide.append(firstClone);
  $slide.prepend(lastClone);

  slideWidth = $$slides[index].clientWidth;
  $slide.style.transform = `translateX(${-slideWidth * index}px)`;

  getSlide = () => $$(slides);

  const moveToNextSlide = () => {
    $$slides = getSlide();
    if (index >= $$slides.length - 1) return;
    index++;
    $slide.style.transform = `translateX(${-slideWidth * index}px)`;
    $slide.style.transition = "0.3s ease-out";
  };

  const startSlide = () => {
    slideId = setInterval(() => {
      moveToNextSlide();
    }, INTERVAL);
  };

  startSlide();

  $slide.addEventListener("transitionend", () => {
    $$slides = getSlide();
    if ($$slides[index].id === firstClone.id) {
      index = 1;
      $slide.style.transition = "none";
      $slide.style.transform = `translateX(${-slideWidth * index}px)`;
    } else if ($$slides[index].id === lastClone.id) {
      index = $$slides.length - 2;
      $slide.style.transition = "none";
      $slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
  });

  $slideContainer.addEventListener("mouseenter", () => {
    clearInterval(slideId);
  });

  $slideContainer.addEventListener("mouseleave", startSlide);
};

export const playCarousel = {
  left: async () => {
    if (index <= 0 || !timeFlag) return;
    timeFlag = false;
    index--;
    $slide.style.transform = `translateX(${-slideWidth * index}px)`;
    $slide.style.transition = "0.4s ease-out";
    await delay(500);
    timeFlag = true;
  },

  right: async () => {
    if (index >= $$slides.length - 1 || !timeFlag) return;
    timeFlag = false;
    index++;
    $slide.style.transform = `translateX(${-slideWidth * index}px)`;
    $slide.style.transition = "0.4s ease-out";
    await delay(500);
    timeFlag = true;
  },
};
