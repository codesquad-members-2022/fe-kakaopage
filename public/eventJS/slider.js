import { domUtil } from "./util.js";

let pageCount = 0;

// prev와 next는 거의 비슷하다. pageCount를 올리냐 마느냐의 차이일뿐
function onclickNext(target) {
  const img = domUtil.$(".recommand__image--wrapper");
  const imgWidth = img.offsetWidth;
  const maxPage = domUtil.$(".recommand__image--wrapper").childElementCount - 1;
  img.style.transition = `${0.5}s`;
  if (maxPage > -pageCount) {
    pageCount--;
  }
  const pixel = imgWidth * pageCount;
  img.style.transform = `translate(${pixel}px)`;
  loop2first();
}

function onclickPrev() {
  const img = domUtil.$(".recommand__image--wrapper");
  const imgWidth = img.offsetWidth;
  if (0 > pageCount) {
    pageCount++;
  }

  const pixel = imgWidth * pageCount;
  img.style.transform = `translate(${pixel}px)`;
}

// const imageloop = setInterval(() => {
//   onclickNext();
// }, 10000);

const loop2first = () => {
  const img = domUtil.$(".recommand__image--wrapper");
  const imgWidth = img.offsetWidth;
  if (pageCount === -(img.childElementCount - 1)) {
    pageCount = 0;
    img.style.transition = `${0}s`;
    img.style.transform = `translate(${pageCount * imgWidth})`;
    setTimeout(() => {
      img.style.transition = `${0.5}s`;
    }, 0);
  }
};

const loop2last = () => {
  const img = domUtil.$(".recommand__image--wrapper");
  const imgWidth = img.offsetWidth;
};

export { onclickPrev, onclickNext };
