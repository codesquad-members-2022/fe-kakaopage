import { domUtil } from "./util.js";

let pageCount = -1;
const img = domUtil.$(".recommand__image--wrapper");
const imgWidth = img.offsetWidth;
const maxPage = domUtil.$(".recommand__image--wrapper").childElementCount - 1;
// prev와 next는 거의 비슷하다. pageCount를 올리냐 마느냐의 차이일뿐
function onclickNext(target) {
  domUtil.$(".recommand__image--pageCount").innerHTML = `${-pageCount} / ${
    maxPage - 1
  } `;
  img.style.transition = `${0.5}s`;
  if (maxPage > -pageCount) {
    pageCount--;
  }
  img.style.transform = `translate(${pageCount * imgWidth}px)`;
  if (pageCount === -5) {
    setTimeout(() => {
      pageCount = -1;
      img.style.transition = `${0}s`;
      img.style.transform = `translate(${pageCount * imgWidth}px)`;
    }, 500);
  }
}

function onclickPrev() {
  domUtil.$(".recommand__image--pageCount").innerHTML = `${-pageCount} / ${
    maxPage - 1
  } `;
  img.style.transition = `${0.5}s`;
  if (0 > pageCount) {
    pageCount++;
  }
  const pixel = imgWidth * pageCount;
  img.style.transform = `translate(${pageCount * imgWidth}px)`;
  console.log(pageCount);
  if (pageCount === 0) {
    setTimeout(() => {
      pageCount = -(maxPage - 1);
      img.style.transition = `${0}s`;
      img.style.transform = `translate(${pageCount * imgWidth}px)`;
    }, 500);
  }
}

// const imageloop = setInterval(() => {
//   onclickNext();
// }, 1000);

const loop2first = () => {
  if (pageCount === -5) {
    // debugger;
    pageCount = 0;
    img.style.transition = `${0}s`;
    img.style.transform = `translate(${img.childElementCount * imgWidth})`;
    setTimeout(() => {
      img.style.transition = `${0.5}s`;
    }, 0);
  }
};

const loop2last = () => {
  if (pageCount === 0) {
    pageCount = -(img.childElementCount - 2);
    console.log(pageCount);
    img.style.transition = `${0}s`;
    img.style.transform = `translate(${pageCount * imgWidth})`;
    setTimeout(() => {
      img.style.transition = `${0.5}s`;
    }, 0);
  }
};

export { onclickPrev, onclickNext };
