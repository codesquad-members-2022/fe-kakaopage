function onclickPrev(target) {
  const maxPage = $(".recommand__image--wrapper").childElementCount - 1;

  if (maxPage > -pageCount) {
    pageCount--;
  }
  const pixel = 1000 * pageCount;
  $(".recommand__image--wrapper").style.transform = `translate(${pixel}px)`;

  //이부분 수정하면 될것같은데
  $(".recommand__image--pageCount").firstChildNode;
}

$(".next").addEventListener("click", onclicknext);

function onclicknext() {
  if (0 > pageCount) {
    pageCount++;
  }
  const pixel = pageCount * 1000;
  document.querySelector(
    ".recommand__image--wrapper"
  ).style.transform = `translate(${pixel}px)`;
}
