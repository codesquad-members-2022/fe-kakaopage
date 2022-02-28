import { VAL } from './util.js';

function cloneBanner(parentNode) {
  const firstBanner = parentNode.firstElementChild.cloneNode(true);
  const lastBanner = parentNode.lastElementChild.cloneNode(true);
  parentNode.append(firstBanner);
  parentNode.insertBefore(lastBanner, parentNode.firstElementChild);
}

function initSlider(bannerList, bannerCount) {
  cloneBanner(bannerList);
  bannerList.style.width = `${
    VAL.bannerWidth * (bannerCount + VAL.CLONENODE_COUNT)
  }px`;
  bannerList.style.transform = `translateX(${-VAL.bannerWidth}px)`;
}

function transformBanner(bannerList, pixel, second) {
  bannerList.style.transform = `translateX(${pixel}px)`;
  bannerList.style.transition = `${second}s ease-out`;
}

let currentIdx = 0;

function slideBanner(bannerList, direction, bannerCount) {
  if (currentIdx > bannerCount) currentIdx = 0;

  function prev() {
    if (currentIdx >= 0) {
      const px = -currentIdx * VAL.bannerWidth;
      transformBanner(bannerList, px, VAL.TRANSITION_TIME);
    }
    if (currentIdx === 0) {
      const px = -bannerCount * VAL.bannerWidth;
      setTimeout(() => {
        transformBanner(bannerList, px, 0);
      }, VAL.SWICHING_TIME);
      currentIdx = bannerCount;
    }
    currentIdx--;
  }
  function next() {
    if (currentIdx <= bannerCount - 1) {
      const px = -(currentIdx + VAL.CLONENODE_COUNT) * VAL.bannerWidth;
      transformBanner(bannerList, px, VAL.TRANSITION_TIME);
    }
    if (currentIdx === bannerCount - 1) {
      const px = -VAL.bannerWidth;
      setTimeout(() => {
        transformBanner(bannerList, px, 0);
      }, VAL.SWICHING_TIME);
      currentIdx = -1;
    }
    currentIdx++;
  }

  direction === 'prev' ? prev() : next();
}

export { initSlider, slideBanner };
