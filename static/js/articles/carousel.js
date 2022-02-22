const mock_carouselElementArr = [
  {
    title: '홈 서브 카테고리',
    views: 25.6,
    genre: '웹툰',
    subTitle: '홈 서브 카테고리: 서브 타이틀 입니다',
    imgUrl:
      'https://dn-img-page.kakao.com/download/resource?kid=c0XBz/hzp2jFzCR9/JCvx5dagQ345yKhVf2m5SK',
  },
  {
    title: '요일연재 서브 카테고리',
    views: 30.6,
    genre: '웹툰',
    subTitle: '요일연재 서브 카테고리: 서브 타이틀 입니다',
    imgUrl:
      'https://dn-img-page.kakao.com/download/resource?kid=bJ0Aku/hzp2moMU6e/cEihkdBNG70ikK3gfKUK81',
  },
  {
    title: '웹툰 서브 카테고리',
    views: 10.2,
    genre: '웹툰',
    subTitle: '웹툰 서브 카테고리: 서브 타이틀 입니다',
    imgUrl:
      'https://dn-img-page.kakao.com/download/resource?kid=b1GVlh/hzp2nOLuZJ/qq3oH7NLIRt6ApNh6TadUK',
  },
];
export function renderCarousel(subCategoryUid) {
  const carouselElement = mock_carouselElementArr[subCategoryUid];
  const mockDataLength = mock_carouselElementArr.length;
  const { title, views, genre, subTitle, imgUrl } = carouselElement;
  const newDiv = document.createElement('div');
  newDiv.classList.add('c-carousel');
  newDiv.innerHTML = `
  <img
  class="c-carousel__img"
  src=${imgUrl}
  alt="carousel image"
/>
<div class="l-carousel__content">
  <div class="c-carousel__buttons">
    <button type="button" class="c-carousel__button move-button">
      <i class="fas fa-angle-left"></i>
    </button>
    <button type="button" class="c-carousel__button move-button">
      <i class="fas fa-angle-right"></i>
    </button>
  </div>
  <div class="c-carousel__content">
    <h3 class="c-carousel__title">${title}</h3>
    <div class="c-carousel__footer">
      <div class="c-carousel__indicator indicator">
        <span class="c-carousel__new indicator__new">UP</span>
        <span class="c-carousel__genre"
          ><i class="fas fa-clock"></i> ${genre}</span
        >
        <div class="divider"></div>
        <span class="c-carousel__views indicator__view"
          ><i class="fas fa-user"></i> ${views}</span
        >
      </div>
      <div class="c-carousel__index">${1}/${mockDataLength}</div>
    </div>
  </div>
  </div>
  <div class="c-carousel__sub-title">
    ${subTitle}
  </div>
  `;
  return newDiv;
}
