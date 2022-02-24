import { createMainSlideItem } from "./main-slide-item.js";
const ITEMWIDTH = 720;
const LEFT = -1;
const RIGHT = 1;

function createMainSlide(titles) {
  const itemLength = titles.length;
  const maxIndex = itemLength + 1;
  titles.unshift(titles[itemLength - 1]);
  titles.push(titles[1]);

  const section = document.createElement("div");
  section.className = "main-slide-section";
  section.innerHTML = `
  <div class="main-slide-wrapper" data-current-index="1" style="transform: translateX(-${ITEMWIDTH}px)">
    ${titles.map((title, index) => createMainSlideItem(title, index)).join("")}
  </div>
  <button class="main-slide-prevBtn" data-direction="${LEFT}">
    <img src="https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg?85bef3b447d17ee7cbefa349c973fe56"/>
  </button>
  <button class="main-slide-nextBtn" data-direction="${RIGHT}">
    <img src="https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg?cf6a870397c04c13add6c27f1f735d93"/>
  </button>
  <div class="index-monitor"> <span>1</span> / ${itemLength}</div>
  `;

  function moveSlide(direction) {
    const wrapper = section.querySelector(".main-slide-wrapper");
    const nextIndex = Number(wrapper.dataset.currentIndex) + direction;
    wrapper.dataset.currentIndex = nextIndex;
    wrapper.style.transition = "500ms";
    wrapper.style.transform = `translateX(${-ITEMWIDTH * nextIndex}px)`;
    if (direction === RIGHT && nextIndex === maxIndex) {
      wrapper.dataset.currentIndex = 1;
      setTimeout(() => {
        wrapper.style.transition = "0ms";
        wrapper.style.transform = `translateX(-${ITEMWIDTH}px)`;
      }, 500);
    } else if (direction === LEFT && nextIndex === 0) {
      wrapper.dataset.currentIndex = itemLength;
      setTimeout(() => {
        wrapper.style.transition = "0ms";
        wrapper.style.transform = `translateX(${-ITEMWIDTH * itemLength}px)`;
      }, 500);
    }
  }
  function setIndex() {
    section.querySelector(".index-monitor > span").innerText = `${
      section.querySelector(".main-slide-wrapper").dataset.currentIndex
    }`;
  }
  section.addEventListener("click", (e) => {
    const button = e.target.closest("button");
    if (button) {
      moveSlide(Number(button.dataset.direction));
      setIndex();
    }
  });

  return section;
}

export { createMainSlide };
