import { $ } from '../../util/utility.js';

const moveSlide = (sliderName, oldSlide, newSlide) => {
  $(`.${sliderName} .${oldSlide}`).remove();
  $(`.${sliderName} .current-slide`).classList.add(oldSlide);
  $(`.${sliderName} .current-slide`).classList.remove('current-slide');
  $(`.${sliderName} .${newSlide}`).classList.add('current-slide');
  $(`.${sliderName} .${newSlide}`).classList.remove(newSlide);
};

const moveToPrev = (sliderIdx, sliderOption) => {
  const slideTemplate = sliderOption.slideFun(sliderOption.data[sliderIdx.currentIdx]);
  const slideLength = sliderOption.data.length;
  moveSlide(sliderOption.name, 'next-slide', 'prev-slide');
  $(`.${sliderOption.name}__contents`).insertAdjacentHTML('afterbegin', slideTemplate);
  sliderIdx.currentIdx--;
  sliderIdx.viewIdx--;
  if (sliderIdx.currentIdx <= 0) sliderIdx.currentIdx = slideLength;
  if (sliderIdx.viewIdx <= 0) sliderIdx.viewIdx = slideLength;
  $(`.${sliderOption.name} .slide-paging-number__current`).textContent = sliderIdx.currentIdx;
};

const moveToNext = (sliderIdx, sliderOption) => {
  const slideTemplate = sliderOption.slideFun(sliderOption.data[sliderIdx.currentIdx]);
  const slideLength = sliderOption.data.length;
  moveSlide(sliderOption.name, 'prev-slide', 'next-slide');
  $(`.${sliderOption.name}__contents`).insertAdjacentHTML('beforeend', slideTemplate);
  sliderIdx.currentIdx++;
  sliderIdx.viewIdx++;
  if (sliderIdx.currentIdx >= slideLength - 1) sliderIdx.currentIdx = -1;
  if (sliderIdx.viewIdx > slideLength) sliderIdx.viewIdx = 1;
  $(`.${sliderOption.name} .slide-paging-number__current`).textContent = sliderIdx.currentIdx;
};

const addSlideButtonEvent = (sliderIdx, sliderOption) => {
  $(`.${sliderOption.name} .slide-buttons`).addEventListener('click', ({ target }) => {
    target.classList.contains('slide-button--prev')
      ? moveToPrev(sliderIdx, sliderOption)
      : moveToNext(sliderIdx, sliderOption);
  });
};

const sliderTimer = (sliderIdx, sliderOption) => {
  setTimeout(() => {
    moveToNext(sliderIdx, sliderOption);
    sliderTimer(sliderIdx, sliderOption);
  }, sliderOption.time);
};

export const startSlider = sliderOption => {
  const sliderIdx = {
    currentIdx: 1,
    viewIdx: 1
  };
  sliderTimer(sliderIdx, sliderOption);
  addSlideButtonEvent(sliderIdx, sliderOption);
};
