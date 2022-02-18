document.querySelector(".prev").addEventListener("click", onclickPrev);

let pageCount = 0;
let contentsChecker = "";

cloneAndDsiplay(
  document.querySelector(".main__cartoonZone"),
  document.querySelector(".main__cartoonZone__cell"),
  9
);

function cloneAndDsiplay(parent, contents, loop) {
  for (let i = 0; i < loop; i++) {
    const $cloneEl = contents.cloneNode(true);
    parent.appendChild($cloneEl);
  }
}

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

function onclickRecNav(event) {
  if (
    event.target.textContent === "요일연재" &&
    event.target.textContent !== contentsChecker
  ) {
    chageMainSecHome();
  } else if (
    event.target.textContent === "홈" &&
    event.target.textContent !== contentsChecker
  ) {
    chageMainSecWoD();
  }
}

// 메인화면 홈으로 레이아웃 변경
function chageMainSecHome() {
  const $mainComponet = document.querySelector(".main");
  const leftNavToggleFont = [
    "기다리면 무료웹툰",
    "인기웹툰",
    "기다리면 무료 소설",
    "인기 웹소설",
  ];
  const $navBar = document.querySelector(".main__nav__dow");

  $navBar.style.display = "none";

  cartoonZoneSwitchVertical();

  for (let i = 0; i < 3; i++) {
    const $cloneMain = $mainComponet.cloneNode(true);
    document.querySelector("body").appendChild($cloneMain);
  }

  switchToggleText(leftNavToggleFont);
  contentsChecker = "요일연재";
}

function switchToggleText(textArray) {
  const $toggleleftAll = document.querySelectorAll(".main--toggle--left");
  const $toggleRightAll = document.querySelectorAll(".main--toggle--right");

  $toggleRightAll.forEach((el) => (el.textContent = "더보기"));

  $toggleleftAll.forEach((toggle, idx) => {
    let toggleArr = toggle.children;
    [...toggleArr].forEach((el, el_idx) => {
      if (el_idx === 0) {
        el.textContent = textArray[idx];
      } else {
        el.classList.add("ev__main--toggle--sort");
      }
    });
  });
}

// 메인컨텐츠(만화로)수직배치
function cartoonZoneSwitchVertical() {
  const $cartoonZone = document.querySelector(".main__cartoonZone");
  $cartoonZone.classList.add("ev__main__cartoonZone");

  const $imgShell = document.querySelectorAll(".main__cartoonZone__cell");
  $imgShell.forEach((el) => el.classList.add("ev__main__cartoonZone__cell"));

  const $imgTag = document.querySelectorAll(".main__cartoonZone--imgTag");
  $imgTag.forEach((el) => el.classList.add("ev__main__cartoonZone--imgTag"));

  const $imgInfo = document.querySelectorAll(".main__cartoonZone--info");
  $imgInfo.forEach((el) => el.classList.add("ev__main__cartoonZone--info"));

  const $newCartoonZone = document.querySelector(
    ".main__cartoonZone.ev__main__cartoonZone"
  );

  while ($newCartoonZone.hasChildNodes()) {
    $newCartoonZone.removeChild($newCartoonZone.firstChild);
  }

  for (let i = 0; i < 4; i++) {
    const $cloneimgShell = $imgShell[0].cloneNode(true);
    $newCartoonZone.append($cloneimgShell);
  }
}

// 메인화면을 요일연재로 바꾸는함수
function chageMainSecWoD() {}
