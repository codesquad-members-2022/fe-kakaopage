import { domUtil } from "/js/Util/util.js";

// prev와 next는 거의 비슷하다. pageCount를 올리냐 마느냐의 차이일뿐
let pageCount = -1;

function bannerSlide(className) {
  const img = domUtil.$(".recommand__image--wrapper");
  const imgWidth = img.offsetWidth;
  const maxPage = domUtil.$(".recommand__image--wrapper").childElementCount - 1;
  const imgPage = domUtil.$(".recommand__image--pageCount");
  const TRANSITION_TIME = 500;
  const JS_SEC = 1000;

  img.style.transition = `${TRANSITION_TIME / JS_SEC}s`;
  if (className === "next" && maxPage > -pageCount) {
    pageCount--;
  } else if (className === "prev" && 0 > pageCount) {
    pageCount++;
  }

  img.style.transform = `translate(${pageCount * imgWidth}px)`;
  imgPage.innerHTML = `${-pageCount} / ${maxPage - 1} `;

  if (pageCount === -maxPage) {
    bannerImgLoop2first(img, imgWidth, maxPage, imgPage, TRANSITION_TIME);
  } else if (pageCount === 0) {
    bannerImgLoop2end(img, imgWidth, maxPage, imgPage, TRANSITION_TIME);
  }
}

const bannerImgLoop2first = (
  img,
  imgWidth,
  maxPage,
  imgPage,
  TRANSITION_TIME
) => {
  imgPage.innerHTML = `${1} / ${maxPage - 1} `;
  setTimeout(() => {
    pageCount = -1;
    img.style.transition = `${0}s`;
    img.style.transform = `translate(${pageCount * imgWidth}px)`;
  }, TRANSITION_TIME);
};

const bannerImgLoop2end = (
  img,
  imgWidth,
  maxPage,
  imgPage,
  TRANSITION_TIME
) => {
  imgPage.innerHTML = `${maxPage - 1} / ${maxPage - 1} `;
  setTimeout(() => {
    pageCount = -(maxPage - 1);
    img.style.transition = `${0}s`;
    img.style.transform = `translate(${pageCount * imgWidth}px)`;
  }, TRANSITION_TIME);
};

// const imageloop = setInterval(() => {
//   onclickNext();
// }, 2000); // 이부분 2초를 어떻게 표현할 수 있을까?
export { bannerSlide };
