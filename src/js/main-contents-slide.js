const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slides li");
const slideCount = slide.length;
const slideWidth = 720;
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIdx = 0;

makeClone();

function makeClone() {
  for (let i = 0; i < slideCount; i++) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.appendChild(cloneSlide);
  }

  for (let i = slideCount - 1; i >= 0; i--) {
    const cloneSlide = slide[i].cloneNode(true);
    cloneSlide.classList.add("clone");
    slides.prepend(cloneSlide);
  }

  updateWidth();
  setInitialPos();
  setTimeout(function () {
    slides.classList.add("animated");
  }, 100);
}

function updateWidth() {
  const currentSlides = document.querySelectorAll(".slides li");
  const newSlideCount = currentSlides.length;
  const newWidth = `${slideWidth * newSlideCount}px`;
  slides.style.width = newWidth;
}

function setInitialPos() {
  const initialTranslateValue = -slideWidth * slideCount;
  slides.style.transform = `translateX(${initialTranslateValue}px)`;
}

prevBtn.addEventListener("click", function () {
  moveSlide(currentIdx - 1);
});

nextBtn.addEventListener("click", function () {
  moveSlide(currentIdx + 1);
});

function moveSlide(num) {
  slides.style.left = `${-num * slideWidth}px`;
  currentIdx = num;
  if (currentIdx === slideCount || currentIdx === -slideCount) {
    setTimeout(function () {
      slides.classList.remove("animated");
      slides.style.left = "0px";
      currentIdx = 0;
    }, 500);
    setTimeout(function () {
      slides.classList.add("animated");
    }, 600);
  }
}
