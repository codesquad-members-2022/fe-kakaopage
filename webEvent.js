document.querySelector(".prev").addEventListener("click", onclickPrev);

let pageCount = 0;
let contentsChecker = "";

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
  .addEventListener("click", onclickRecNav);

const $mainComponet = document.querySelector(".main");

function onclickRecNav(event) {
  //추후 target의 textContent에 따라 내용이 달라지게 구성할 예정
  if (event.target.textContent !== contentsChecker) {
    chageMainSecHome();
  }
}

function chageMainSecHome() {
  const leftNavToggleFont = [
    "기다리면 무료웹툰",
    "인기웹툰",
    "기다리면 무료 소설",
    "인기 웹소설",
  ];
  const $navBar = document.querySelector(".main__nav__dow");
  $navBar.style.display = "none";

  // [...$mainNavSort].forEach((toggle, idx) => {
  //   if (idx > 0) {
  //     toggle.classList.add("ev__main--toggle--left");
  //   }
  // });
  const $mainCartoonZone = document.querySelector(".main__cartoonZone");
  switchMainCartoonZone($mainCartoonZone);

  for (let i = 0; i < 3; i++) {
    const $cloneMain = $mainComponet.cloneNode(true);
    document.querySelector("body").appendChild($cloneMain);
  }

  switchToggleText(leftNavToggleFont);
  contentsChecker = "홈";
}

function switchToggleText(textArray) {
  const $toggleleftAll = document.querySelectorAll(".main--toggle--left");

  $toggleleftAll.forEach((toggle, idx) => {
    let toggleArr = toggle.children;
    [...toggleArr].forEach((el, el_idx) => {
      console.log(el);
      if (el_idx === 0) {
        el.textContent = textArray[idx];
      } else {
        el.classList.add("ev__main--toggle--sort");
      }
    });
  });
}
function switchMainCartoonZone() {}
