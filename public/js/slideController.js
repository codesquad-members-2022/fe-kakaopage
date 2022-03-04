let webtoonSlideIndex = 0;
let isMovable = true;
let isAutoSlideScheduled = null;

function moveWebtoonSlide() {
  const promotionWebtoonSection = document.querySelector(".promotion_webtoon_section");
  if (!promotionWebtoonSection) {
    return; // "웹툰", "소년", "드라마", "로맨스", "로판", "액션무협", "BL"의 promotionWebtoonSection은 구현하지 않았으므로 막아두었습니다.
  }
  const slideSize = promotionWebtoonSection.clientWidth;
  const promotionWebtoonSlide = document.querySelector(".promotion_webtoon_slide");
  const promotionWebtoons = promotionWebtoonSlide.children;
  if (webtoonSlideIndex < 0) {
    webtoonSlideIndex = promotionWebtoons.length;
    promotionWebtoonSlide.style.transform = `translateX(${- slideSize * (promotionWebtoons.length - 1)}px)`;
    isMovable = true;
    return;
  }
  if (webtoonSlideIndex >= promotionWebtoons.length) {
    promotionWebtoonSlide.style.transform = "";
    webtoonSlideIndex = 0;
    isMovable = true;
    return;
  }
  promotionWebtoonSlide.style.translate = "transform 1s ease-in-out";
  promotionWebtoonSlide.style.transform = `translateX(${-slideSize * webtoonSlideIndex}px)`;
  isMovable = true;
}

function autoWebtoonSlide() {
  webtoonSlideIndex++;
  moveWebtoonSlide();
  isAutoSlideScheduled = null;
  executeAutoSlide();
}

export function attachSlideButtonHandler() {
  const slideButtonDiv = document.querySelector(".slide_button");
  slideButtonDiv.addEventListener("click", ({target}) => {
    isMovable = false;
    if (target.closest(".next_button")) {
      webtoonSlideIndex++;
      moveWebtoonSlide();
      return;
    }
    if (target.closest(".previous_button")) {
      webtoonSlideIndex--;
      moveWebtoonSlide();
      return;
    }
  });
}

export function executeAutoSlide() {
  const delayTime = 3000;
  if (!isMovable || isAutoSlideScheduled) {
    return;
  }
  isAutoSlideScheduled = setTimeout(() => {
    autoWebtoonSlide();
  }, delayTime);
}
