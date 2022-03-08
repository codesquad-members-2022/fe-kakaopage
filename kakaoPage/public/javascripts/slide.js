function eventSlide() {
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
    eventSlideWrap.insertBefore(
      cloneSlideLast,
      eventSlideWrap.firstElementChild
    );
  }
  function eventInitLocation() {
    // 복사 슬라이드 아닌 첫번째 슬라이드가 보이게!
    eventSlideWrap.style.transform = `translate(-${itemWidth}px)`;
  }
  next.addEventListener("click", function () {
    if (curPage <= slideImgs.length) {
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

        eventSlideWrap.style.transform = `translate(${currentWidth}px)`;
        eventSlideWrap.style.transition = "0s";
      }, 500);
      curPage = slideImgs.length + 1;
      curEventPage.textContent = curPage;
    }
    curPage -= 1;
    curEventPage.textContent = curPage;
  });
}
export default eventSlide;
