import { $ } from "../components/selector.js";

const imageBoxContainer = $(".image-box-container");
const containerBox = imageBoxContainer.querySelector(
  ".image-box-container__box"
);
const imageBoxInfo = imageBoxContainer.querySelector(".image-box__page-info");
const TRANSLATE_RANGE = 100;
const lastIdx =
  containerBox.childElementCount * TRANSLATE_RANGE - TRANSLATE_RANGE;
const firstIdx = 0;
const IMAGE_CNT = lastIdx / TRANSLATE_RANGE - 1;
const SLIDER_INTERVAL = 2000;
const TRANSITION_INTERVAL = 100;

const resetIntervalTimer = (timer) => {
  clearInterval(timer);
  return setInterval(() => {
    nextImage();
  }, SLIDER_INTERVAL);
};

const selectContainerBoxRange = (containerBox) => {
  let classArray = containerBox.className.split(" ");
  return Number(classArray[1].split("-")[1]);
};

const imageBoxCntChangeAndTimerReset = (cnt) => {
  imageBoxInfo.innerHTML = `${cnt} / ${IMAGE_CNT}`;
  bannerTimer = resetIntervalTimer(bannerTimer);
};

const nextImage = () => {
  let transformRange = selectContainerBoxRange(containerBox);
  containerBox.className = `image-box-container__box translateX-${
    transformRange + TRANSLATE_RANGE
  } transition-ease-in-out-millisecond`;
  const classArray = containerBox.className.split(" ");
  if (classArray[1] === `translateX-${lastIdx}`) {
    setTimeout(() => {
      containerBox.className = `image-box-container__box translateX-${TRANSLATE_RANGE}`;
      transformRange = 0;
    }, TRANSITION_INTERVAL);
  }
  let nextImgCnt = transformRange / TRANSLATE_RANGE + 1;
  if (nextImgCnt > IMAGE_CNT) nextImgCnt = 1;
  imageBoxCntChangeAndTimerReset(nextImgCnt);
};

const prevImage = () => {
  let transformRange = selectContainerBoxRange(containerBox);
  containerBox.className = `image-box-container__box translateX-${
    transformRange - TRANSLATE_RANGE
  } transition-ease-in-out-millisecond`;
  const classArray = containerBox.className.split(" ");
  if (classArray[1] === `translateX-${firstIdx}`) {
    setTimeout(() => {
      transformRange = lastIdx - TRANSLATE_RANGE;
      containerBox.className = `image-box-container__box translateX-${transformRange}`;
    }, TRANSITION_INTERVAL);
  }
  let prevImgCnt = transformRange / TRANSLATE_RANGE - 1;
  if (prevImgCnt === 0) prevImgCnt = IMAGE_CNT;
  imageBoxCntChangeAndTimerReset(prevImgCnt);
};

let bannerTimer = setInterval(() => {
  nextImage();
}, SLIDER_INTERVAL);

imageBoxContainer.addEventListener("click", (evt) => {
  if (evt.target.parentNode.className === "image-box__rightbutton") {
    nextImage();
  } else if (evt.target.parentNode.className === "image-box__leftbutton") {
    prevImage();
  }
});
