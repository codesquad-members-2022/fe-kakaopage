import { $ } from '../../util/utility.js';

const addNewSlide = (newSlideTemplate, insertPosition) => {
  $('.main-banners__contents').insertAdjacentHTML(insertPosition, newSlideTemplate);
};

const moveSlide = (slideName, [oldSlide, newSlide]) => {
  $(`.${slideName} .${oldSlide}`).remove();
  $(`.${slideName} .current-slide`).classList.add(oldSlide);
  $(`.${slideName} .current-slide`).classList.remove('current-slide');
  $(`.${slideName} .${newSlide}`).classList.add('current-slide');
  $(`.${slideName} .${newSlide}`).classList.remove(newSlide);
};

const sliderIdx = currentIdx => {
  $('.main-banners .slide-paging-number__current').textContent = currentIdx;
};

const slideTimer = (slideName, sliderData, parmToMoveMainBanner) => {
  setTimeout(() => {
    SLIDER_INFO[parmToMoveMainBanner.idxFun](parmToMoveMainBanner.slideLength);
    moveSlide(slideName, parmToMoveMainBanner.moveSlide);
    addNewSlide(newSlideTemplate, parmToMoveMainBanner.insertPosition);
    sliderIdx(SLIDER_INFO.viewIdx);
    slideTimer(sliderData, parmToMoveMainBanner);
  }, SLIDER_INFO.slideTime);
};

export const startSlide = (slideName, sliderData, parmToMoveMainBanner) => {
  const SLIDER_INFO = {
    slideTimer: 0,
    currentIdx: 1,
    viewIdx: 1,
    subtractIdx: function (slideLength) {
      this.currentIdx--;
      this.viewIdx--;
      if (this.currentIdx <= 0) this.currentIdx = slideLength;
      if (this.viewIdx <= 0) this.viewIdx = slideLength;
    },
    addIdx: function (slideLength) {
      this.currentIdx++;
      this.viewIdx++;
      if (this.currentIdx >= slideLength - 1) this.currentIdx = -1;
      if (this.viewIdx > slideLength) this.viewIdx = 1;
    },
    slideTime: 3000,
    throttling: null
  };

  slideTimer(slideName, sliderData, parmToMoveMainBanner);
};
