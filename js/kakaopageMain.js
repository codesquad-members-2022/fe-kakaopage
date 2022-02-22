import { datas } from "/FE/FE01-html/js/data.js";
const weekdayContents = datas.weekdayContents;
const eventContents = datas.eventContents;
const sectionContents = datas.sectionContents;

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
  const slide = document.querySelector("#eventSlideId");
  eventContents.map((content) => {
    if (genre.trim() === content[0]) {
      const imageUrl = content[1];
      slide.style.backgroundImage = `url('${imageUrl}')`;
    }
  });
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
