import { initMainPage } from "./js/Util/init.js";
let WHOLE_DATA;

fetch("/index/wholeData")
  .then((response) => response.json())
  .then((serverData) => {
    WHOLE_DATA = serverData;
    initMainPage();
  });

export { WHOLE_DATA };
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
