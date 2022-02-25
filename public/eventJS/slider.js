import { domUtil } from "./util.js";

// prev와 next는 거의 비슷하다. pageCount를 올리냐 마느냐의 차이일뿐
let pageCount = -1;
const img = domUtil.$(".recommand__image--wrapper");
const imgWidth = img.offsetWidth;
const maxPage = domUtil.$(".recommand__image--wrapper").childElementCount - 1;
const imgPage = domUtil.$(".recommand__image--pageCount");

function onClickBannerController(event) {
  if (event.target.className === "next") {
    onclickNext();
  } else if (event.target.className === "prev") {
    onclickPrev();
  }
}

function onclickNext() {
  img.style.transition = `${0.5}s`;
  if (maxPage > -pageCount) {
    pageCount--;
  }
  img.style.transform = `translate(${pageCount * imgWidth}px)`;
  imgPage.innerHTML = `${-pageCount} / ${maxPage - 1} `;
  if (pageCount === -maxPage) {
    loop2first();
  }
}

function onclickPrev() {
  img.style.transition = `${0.5}s`;
  if (0 > pageCount) {
    pageCount++;
  }
  img.style.transform = `translate(${pageCount * imgWidth}px)`;
  imgPage.innerHTML = `${-pageCount} / ${maxPage - 1} `;
  if (pageCount === 0) {
    loop2end();
  }
}

const loop2first = () => {
  imgPage.innerHTML = `${1} / ${maxPage - 1} `;
  setTimeout(() => {
    pageCount = -1;
    img.style.transition = `${0}s`;
    img.style.transform = `translate(${pageCount * imgWidth}px)`;
  }, 500);
};

const loop2end = () => {
  imgPage.innerHTML = `${maxPage - 1} / ${maxPage - 1} `;
  setTimeout(() => {
    pageCount = -(maxPage - 1);
    img.style.transition = `${0}s`;
    img.style.transform = `translate(${pageCount * imgWidth}px)`;
  }, 500);
};

const imageloop = setInterval(() => {
  onclickNext();
}, 2000);

export { onClickBannerController };
