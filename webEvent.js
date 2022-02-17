document.querySelector(".prev").addEventListener("click", onclickPrev);

let pageCount = 0;

function onclickPrev(target) {
  const maxPage =
    document.querySelector(".recommand__image--wrapper").childElementCount - 1;

  if (maxPage > -pageCount) {
    pageCount--;
  }
  const pixel = 1000 * pageCount;
  document.querySelector(
    ".recommand__image--wrapper"
  ).style.transform = `translate(${pixel}px)`;

  //이부분 수정하면 될것같은데
  document.querySelector(".recommand__image--pageCount").firstChildNode;
}

document.querySelector(".next").addEventListener("click", onclicknext);

function onclicknext() {
  if (0 > pageCount) {
    pageCount++;
  }
  const pixel = pageCount * 1000;
  document.querySelector(
    ".recommand__image--wrapper"
  ).style.transform = `translate(${pixel}px)`;
}

document
  .querySelector(".recommand__nav--ul")
  .children[0].addEventListener("click", onclickRecNavHome);

const $mainComponet = document.querySelector(".main");

function onclickRecNavHome() {
  const $navBar = document.querySelector(".main__nav__dow");
  $navBar.style.display = "none";
}
