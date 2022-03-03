import datas from "./data.js";
import * as section from "./section.js";
const weekdayContents = datas.weekdayContents;
const eventContents = datas.eventContents;
const sectionContents = datas.sectionContents;
function init() {
  section.renderWebtoonGenreBar();
  // renderEvent("웹툰");
  section.renderEventButtons();
}
init();
checkApi();
function checkApi() {
  const promise = fetch("http://localhost:3000/data/data").then((response) =>
    console.log(response)
  );
}
function changeTabsColor(target) {
  const Tabs = target.parentNode.childNodes;
  for (let i = 1; i < Tabs.length; i += 2) {
    const tab = Tabs[i];
    tab.style.borderBottom = "none";
    tab.style.color = "#999";
  }
  target.style.color = `black`;
}
function removeContents(tag) {
  while (tag.hasChildNodes()) {
    tag.removeChild(tag.firstChild);
  }
}
function changeBorderColor(target) {
  changeTabsColor(target);
  target.style.borderBottom = "3px solid #ffd200";
}
function changeDayAndContents(target) {
  changeBorderColor(target);
  const dayInfo = target.textContent;
  const weekdayContentWrap = document.querySelector("#weekdayContentWrapId");
  removeContents(weekdayContentWrap);
  weekdayContents.map((day) => {
    if (dayInfo === day[0]) {
      let temp = "";
      for (let i = 0; i < 10; i++) {
        temp += `${day[1]}`;
      }
      weekdayContentWrap.insertAdjacentHTML("afterbegin", temp);
    }
  });
}
function changeEventSlideContents(target) {
  const genre = target.textContent;
  const slide = document.querySelector(".eventSlideId");
  const eventTitle = document.querySelector("#eventTitleId");
  const eventFollow = document.querySelector("#eventFollowId");
  let imageUrl, title, follow;
  eventContents.map((content) => {
    if (genre.trim() === content.genre) {
      imageUrl = content.imgsrc;
      title = content.title;
      follow = content.follow;
    }
  });
  slide.style.backgroundImage = `url('${imageUrl}')`;
  eventTitle.textContent = title;
  eventFollow.textContent = follow;
}
function changeSectionContents(target) {
  let navGenre;
  if (target.childElementCount === 0) {
    // 자식요소 갯수 카운팅 해서 클릭한 테그클릭별 navGenre 정의 다르게 할 수 있었음.
    navGenre = target.parentNode.textContent;
  } else {
    navGenre = target.textContent;
  }
  const sections = document.querySelector("#sectionId");
  removeContents(sections);
  let temp;
  sectionContents.map((section) => {
    if (navGenre.trim() === section[0]) {
      temp = section[1];
    }
  });
  sections.insertAdjacentHTML("afterbegin", temp);
}

const daysWrap = document.querySelector("#daysWrap");
daysWrap.addEventListener("click", function (e) {
  changeDayAndContents(e.target);
});
const webtoonGenresWrap = document.querySelector("#webtoonGenresWrap");
webtoonGenresWrap.addEventListener("click", function (e) {
  changeTabsColor(e.target);
  changeEventSlideContents(e.target);
});
const navWrap = document.querySelector("#navWrap");
navWrap.addEventListener("click", function (e) {
  changeSectionContents(e.target);
});
const navTabs = document.querySelectorAll(".navTab");
navTabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    changeBorderColor(e.currentTarget);
  });
});

const prev = document.querySelector("#eventSlidePrevBtn");
const next = document.querySelector("#eventSlideNextBtn");
const eventSlideWrap = document.querySelector("#eventSlideId");
const slideImgs = document.querySelectorAll(".eventSlideBox");
const itemWidth = 720;
let currentWidth = -720;
let curEventPage = document.querySelector("#curEventPage");
let curPage = 1;
makeClone();
eventInitLocation();
function makeClone() {
  // 슬라이드 양 끝에 복사
  const cloneSlideFirst = slideImgs[0].cloneNode(true);
  const cloneSlideLast = slideImgs[slideImgs.length - 1].cloneNode(true);
  eventSlideWrap.append(cloneSlideFirst);
  eventSlideWrap.insertBefore(cloneSlideLast, eventSlideWrap.firstElementChild);
}
function eventInitLocation() {
  // 복사 슬라이드 아닌 첫번째 슬라이드가 보이게!
  eventSlideWrap.style.transform = `translate(-${itemWidth}px)`;
}
next.addEventListener("click", function () {
  if (curPage <= slideImgs.length) {
    console.log(currentWidth);
    currentWidth -= itemWidth;
    eventSlideWrap.style.transform = `translate(${currentWidth}px)`;
    eventSlideWrap.style.transition = "0.5s";
  }
  if (curPage === slideImgs.length) {
    setTimeout(() => {
      currentWidth = -720;
      eventSlideWrap.style.transform = `translate(${currentWidth}px)`;
      eventSlideWrap.style.transition = "0s";
    }, 500);
    curPage = 0;
    curEventPage.textContent = curPage;
  }
  curPage += 1;
  curEventPage.textContent = curPage;
});
prev.addEventListener("click", function () {
  if (curPage >= 1) {
    currentWidth += itemWidth;
    eventSlideWrap.style.transform = `translate(${currentWidth}px)`;
    eventSlideWrap.style.transition = "0.5s";
  }
  if (curPage === 1) {
    setTimeout(() => {
      currentWidth = -((slideImgs.length - 1) * itemWidth);
      console.log(currentWidth);
      eventSlideWrap.style.transform = `translate(${currentWidth}px)`;
      eventSlideWrap.style.transition = "0s";
    }, 500);
    curPage = slideImgs.length + 1;
    curEventPage.textContent = curPage;
  }
  curPage -= 1;
  curEventPage.textContent = curPage;
});
