// TODO: status로 아이콘 구분해서 랜더링
export function createBanner({ title, status, type, views, progress, ad }) {
  return `
  <div class="banner">
    <ul class="slide">
      <li>
        <div class="picture-large picture1"></div>
        <div></div>
        <div></div>
      </li>
      <div class="btn btn-move btn-prev"></div>
      <div class="btn btn-move btn-next"></div>
      <div class="banner-info col">
        <div class="banner-title">${title}</div>
        <div class="banner-category row">
          <div class="banner__info-container row">
            <div class="banner__icon"></div>
            <div class="banner__icon2"></div>
            <div class="banner__category">${type}</div>
            <div class="banner__block-icon"></div>
            <div class="banner__views-icon"></div>
            <div class="banner__views">${views}만명</div>
          </div>
          <div class="banner__progress">${progress}</div>
        </div>
      </div>
    </ul>
    <div class="banner__ad">
      <div class="banner__ad-text">${ad}</div>
    </div>
  </div>`;
}
