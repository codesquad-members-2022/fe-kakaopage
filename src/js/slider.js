const CLONENODE_COUNT = 2;
const bannerWidth = 720;
let currentIdx = 0;

function cloneBanner(parentNode) {
  const firstBanner = parentNode.firstElementChild.cloneNode(true);
  const lastBanner = parentNode.lastElementChild.cloneNode(true);
  parentNode.append(firstBanner);
  parentNode.insertBefore(lastBanner, parentNode.firstElementChild);
}

function initSlider(bannerList, bannerCount) {
  bannerList.style.width = `${bannerWidth * (bannerCount + CLONENODE_COUNT)}px`;
  bannerList.style.transform = `translateX(${-bannerWidth}px)`;
}

function transformBanner(bannerList, pixel, second) {
  console.log(bannerList);
  console.log(bannerList.style.transform);
  bannerList.style.transform = `translateX(${pixel})px`;
  bannerList.style.transition = `${second}s ease-out`;
}

function slideBanner(...params) {
  const [bannerList, direction, bannerCount] = params;
  const controller = {
    prev() {
      if (currentIdx >= 0) {
        const px = -currentIdx * bannerWidth;
        bannerList.style.transform = `translateX(${px}px)`;
        bannerList.style.transition = '0.25s ease-out';
        // transformBanner(bannerList, px, 0.25);
      }
      if (currentIdx === 0) {
        const px = -bannerCount * bannerWidth;
        setTimeout(() => {
          bannerList.style.transform = `translateX(${px}px)`;
          bannerList.style.transition = '0s ease-out';
        }, 200);
        currentIdx = bannerCount;
      }
      currentIdx--;
    },
    next() {
      if (currentIdx <= bannerCount - 1) {
        const px = -(currentIdx + CLONENODE_COUNT) * bannerWidth;
        bannerList.style.transform = `translateX(${px}px)`;
        bannerList.style.transition = '0.25s ease-out';
      }
      if (currentIdx === bannerCount - 1) {
        const px = -bannerWidth;
        setTimeout(() => {
          bannerList.style.transform = `translateX(${px}px)`;
          bannerList.style.transition = '0s ease-out';
        }, 200);
        currentIdx = -1;
      }
      currentIdx++;
    },
  };

  controller[direction]();
}

export { cloneBanner, initSlider, slideBanner };
