import {
  createEl,
  $,
  remove,
  replaceInner,
  resetDefault,
  cloneAndDsiplay,
} from "./eventJS/util.js";
import { changeMainSecHome, changeMainSecWoD } from "./eventJS/recEvent.js";

$(".prev").addEventListener("click", () => {});

let pageCount = 0;
let contentsChecker = "";

cloneAndDsiplay($(".main__cartoonZone"), $(".main__cartoonZone__cell"), 9);

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

$(".recommand__nav--ul").addEventListener("click", function (event) {
  if (
    event.target.textContent === "홈" &&
    event.target.textContent !== contentsChecker
  ) {
    changeMainSecHome(contentsChecker);
  } else if (
    event.target.textContent === "요일연재" &&
    event.target.textContent !== contentsChecker
  ) {
    changeMainSecWoD(contentsChecker);
  }
});

$(".main__nav__dow--ul").addEventListener("click", function (event) {});

// 메인화면 홈으로 레이아웃 변경
// function chageMainSecHome() {
//   const $mainComponet = document.querySelector(".main");
//   const leftNavToggleFont = [
//     "기다리면 무료웹툰",
//     "인기웹툰",
//     "기다리면 무료 소설",
//     "인기 웹소설",
//   ];
//   const $navBar = document.querySelector(".main__nav__dow");

//   $navBar.style.display = "none";

//   cartoonZoneSwitchVertical();

//   for (let i = 0; i < 3; i++) {
//     const $cloneMain = $mainComponet.cloneNode(true);
//     document.querySelector("body").appendChild($cloneMain);
//   }

//   switchToggleText(leftNavToggleFont);
//   contentsChecker = "요일연재";
// }

// function switchToggleText(textArray) {
//   const $toggleLeftAll = document.querySelectorAll(".main--toggle--left");
//   const $toggleRightAll = document.querySelectorAll(".main--toggle--right");

//   $toggleLeftAll.forEach((toggle, idx) => {
//     for (let i = 0; i < toggle.children.length; i++) {
//       if (i <= 0) {
//         toggle.children[0].textContent = textArray[i];
//       } else if (i > 0) {
//         toggle.children[i].classList.add("ev__main--toggle--sort");
//       }
//     }
//   });

//   $toggleRightAll.forEach((el) => (el.textContent = "더보기"));
// }

// // 메인컨텐츠(만화로)수직배치
// function cartoonZoneSwitchVertical() {
//   const $cartoonZone = document.querySelector(".main__cartoonZone");
//   $cartoonZone.classList.add("ev__main__cartoonZone");

//   const $imgShell = document.querySelectorAll(".main__cartoonZone__cell");
//   $imgShell.forEach((el) => el.classList.add("ev__main__cartoonZone__cell"));

//   const $imgTag = document.querySelectorAll(".main__cartoonZone--imgTag");
//   $imgTag.forEach((el) => el.classList.add("ev__main__cartoonZone--imgTag"));

//   const $imgInfo = document.querySelectorAll(".main__cartoonZone--info");
//   $imgInfo.forEach((el) => el.classList.add("ev__main__cartoonZone--info"));

//   const $newCartoonZone = document.querySelector(
//     ".main__cartoonZone.ev__main__cartoonZone"
//   );

//   while ($newCartoonZone.hasChildNodes()) {
//     $newCartoonZone.removeChild($newCartoonZone.firstChild);
//   }

//   for (let i = 0; i < 4; i++) {
//     const $cloneimgShell = $imgShell[0].cloneNode(true);
//     $newCartoonZone.append($cloneimgShell);
//   }
// }