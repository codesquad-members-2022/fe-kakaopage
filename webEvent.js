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
  .children[1].addEventListener("click", onclickRecommand__nav);

function onclickRecommand__nav() {
  document.querySelector(".main__cartoonZone").style.flexDirection = "column";
  document.querySelectorAll(".main__cartoonZone__cell").forEach((element) => {
    element.style.flexDirection = "row";
    element.style.alignItems = "flexEnd";
    console.log(element.children[1]);
    element.children[1].style.height = element.children[0].style.height;
    element.querySelector(".main__cartoonZone--hiddenInfo").style.display =
      "block";
  });
}
