//슬라이드 구조 뿌려줌
// 아래 다른 구조 뿌려줌
import { makeSlide }  from "./slide.js";
const showSlide = () => {

}

function makeSlideEvent() {
  const tabArr = ["home", "dayWebtoon", "webtoon", "boy", "drama", "romance", "roFan", "action", "BL"];
  // const currTab = tabArr[tabIdx];
  const tabList = document.querySelector('.navbar-second-2');
  const slide = document.querySelector('.slidebox');
  tabList.addEventListener('click', function (e) {
    slide.innerHTML = makeSlide(e.target.className);
  });

}

export { makeSlideEvent };

