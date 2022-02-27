import { domUtil } from "./util.js";

// prev와 next는 거의 비슷하다. pageCount를 올리냐 마느냐의 차이일뿐
let pageCount = -1;

function onClickBannerController(event) {
  const img = domUtil.$(".recommand__image--wrapper");
  const bannerData = {
    img,
    imgWidth: img.offsetWidth,
    maxPage: domUtil.$(".recommand__image--wrapper").childElementCount - 1,
    imgPage: domUtil.$(".recommand__image--pageCount"),
    TRANSITION_TIME: 500,
    JS_SEC: 1000,
  };
  if (event.target.className === "next") {
    onclickNext(bannerData);
  } else if (event.target.className === "prev") {
    onclickPrev(bannerData);
  }
}
function onclickNext({
  img,
  imgWidth,
  maxPage,
  imgPage,
  TRANSITION_TIME,
  JS_SEC,
} = bannerData) {
  img.style.transition = `${TRANSITION_TIME / JS_SEC}s`;

  if (maxPage > -pageCount) {
    pageCount--;
  }

  img.style.transform = `translate(${pageCount * imgWidth}px)`;
  imgPage.innerHTML = `${-pageCount} / ${maxPage - 1} `;
  if (pageCount === -maxPage) {
    bannerImgLoop2first();
  }
}

function onclickPrev({
  img,
  imgWidth,
  maxPage,
  imgPage,
  TRANSITION_TIME,
  JS_SEC,
} = bannerData) {
  img.style.transition = `${TRANSITION_TIME / JS_SEC}s`;
  if (0 > pageCount) {
    pageCount++;
  }
  img.style.transform = `translate(${pageCount * imgWidth}px)`;
  imgPage.innerHTML = `${-pageCount} / ${maxPage - 1} `;
  if (pageCount === 0) {
    bannerImgLoop2end();
  }
}

const bannerImgLoop2first = () => {
  imgPage.innerHTML = `${1} / ${maxPage - 1} `;
  setTimeout(() => {
    pageCount = -1;
    img.style.transition = `${0}s`;
    img.style.transform = `translate(${pageCount * imgWidth}px)`;
  }, TRANSITION_TIME);
};

const bannerImgLoop2end = () => {
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
export { onClickBannerController };
