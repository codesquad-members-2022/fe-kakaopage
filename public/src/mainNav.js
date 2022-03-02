//슬라이드 구조 뿌려줌
// 아래 다른 구조 뿌려줌
import { makeSlide } from "./render/slide.js";
import { makeMainMenu }  from "./render/mainMenu.js";


function makeSlideEvent() {
  const tabArr = ["home", "dayWebtoon", "webtoon", "boy", "drama", "romance", "roFan", "action", "BL"];
  // const currTab = tabArr[tabIdx];
  const tabList = document.querySelector('.navbar-second-2');
  const tabListArr = document.querySelectorAll('.navbar-second-content-2')
  const slide = document.querySelector('.slidebox');
  const mainMenu = document.querySelector('.menu');
  tabList.addEventListener('click', function (e) {
    slide.innerHTML = makeSlide(e.target.className);
    mainMenu.innerHTML = makeMainMenu(e.target.className);
    tabListArr.forEach((el, idx) => {
      el.firstChild.classList.remove("makeBold");
    });
    e.target.classList.add('makeBold');
  });

}



export { makeSlideEvent };

