import datas from "./data.js";
import * as webtoonSection from "./section.js";
import getData from "./render.js";
import eventSlide from "./slide.js";
getData("/data").then((data) => init(data));
function init(datas) {
  // const weekdayContents = datas.weekdayContents;
  const eventContents = datas.eventContents;
  // const sectionContents = datas.sectionContents;
  const webtoons = datas.webtoon;
  webtoonSection.renderWebtoonGenreBar();
  // renderEvent("웹툰");
  webtoonSection.renderEventButtons();
  eventSlide();
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
    let temp = "";
    webtoons.map((webtoon) => {
      if (dayInfo === webtoon.day) {
        let daytoonTemp = `
        <div class="toonContent">
        <div class="toonContentTop">
            <img src="${webtoon.imgsrc}" alt="" class="contentImage">
        </div>
        <div class="contentLank heightCenterSort ">
            <div class="contentLankInfo">${webtoon.rating}</div>
            <img src="/images/bmbadge_waitfree.svg" class="contentClock"></img>
        </div>
        <div class="contentTitle">${webtoon.title}</div>
        <div class="contentInfo">
            <img src="/images/새 작품.svg" alt="" class="contentStatus">
            <img src="/images/icon_read_count.png" alt="" class="contentCount">
            <span class="contentFollow">${webtoon.fallow}만 명</span>
        </div>
    </div>`;
        for (let i = 0; i < 10; i++) {
          temp += `${daytoonTemp}`;
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
}
