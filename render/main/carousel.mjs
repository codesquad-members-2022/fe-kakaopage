import { $ } from "../../util/util.mjs";

const renderMainCarousel = (carouselInfo, num) => {
  renderCarouselFrame();
  renderCarouselItem(carouselInfo[num][carouselInfo[num].length - 1]);
  carouselInfo[num].forEach((val) => {
    renderCarouselItem(val);
  });
  renderCarouselItem(carouselInfo[num][0]);
  const total = $(".carousel__total").firstChild;
  total.nodeValue = carouselInfo[num].length;
};

const renderCarouselFrame = () => {
  $(".main__inner").innerHTML += /*html*/ `
  <div class="main__carousel">
    <img class="carousel__left" src="https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg?85bef3b447d17ee7cbefa349c973fe56" alt="<"/>
    <div class="carousel__inner"></div>
    <img class="carousel__right" src="https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg?cf6a870397c04c13add6c27f1f735d93" alt=">"/>
    <div class="carousel__countBox">
      <span class="carousel__counts">1</span>
      <span>/</span>
      <span class="carousel__total">total</span>
    </div>
  </div>`;
};

const renderCarouselItem = (info) => {
  const carouselInner = document.querySelector(".carousel__inner");

  carouselInner.innerHTML += /* html */ `
  <div class="carousel__card">
    <img class="carousel__img" src="${info.img}" alt="메인 이미지">
    <div class="carousel__items">
      <div class="carousel__title">${info.title}</div>
      <img class="carousel__info" src="https://static-page.kakao.com/static/pc/badge-bigthum-event.svg?2c00fc6eb18517e8f006adfaf464530b" alt="이벤트">
      <img class="carousel__info" src="https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858" alt="기다무">
      <span class="carousel__info"> 웹툰 | 
        <img src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e" alt="조회수">${info.user}
      </span>
      </div>
      <div class="carousel__script">${info.script}
    </div>
  </div>
  `;
};

export { renderMainCarousel };
