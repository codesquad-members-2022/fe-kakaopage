const MainBanner = data => {
  const mainBanner = document.createElement('div');
  mainBanner.classList.add('mainbox', 'main-banner');
  mainBanner.innerHTML = `
  <ul class="main-banner__list">
  ${createMainBannerItem(data)}
  </ul>
  <button class="main-banner__btn btn--prev">
  <img
    class="main-banner__btn-img"
    src="https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg?85bef3b447d17ee7cbefa349c973fe56"
    alt="main banner previous button"/>
    </button>
    <button class="main-banner__btn btn--next">
    <img
    class="main-banner__btn-img"
     src="https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg?cf6a870397c04c13add6c27f1f735d93"
        alt="main banner next button"
    />
</button>`;

  return mainBanner;
};

const createMainBannerItem = data => {
  let item = '';

  data.forEach((b, i) => {
    item += ` <li class="main-banner__item">
            <div class="main-banner__poster">
              <img
                src="${b.url}"
                alt="main banner poster"
              />
            </div>
            <div class="main-banner__description-box">
              <div class="description__title">${b.title}</div>
              <div class="description__sub-box flex-box">
                <div class="description__badge-img flex-box">
                  <img
                    src="https://static-page.kakao.com/static/pc/badge-bigthum-event.svg?2c00fc6eb18517e8f006adfaf464530b"
                    alt="event badge"
                  />
                </div>
                <div class="description__category-box flex-box">
                  <img
                    src="https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858"
                    alt="clock icon"
                  />
                  <span class="description__category">웹툰</span>
                </div>
                <div class="description__separator"></div>
                <div class="description__view-box flex-box">
                  <img
                    src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e"
                    alt="person icon"
                  />
                  <span class="description__view">${b.view}</span>
                </div>
              </div>
            </div>
            <div class="description__pages">${i + 1}/${data.length}</div>
            <div class="main-banner__caption">${b.summary}</div>
          </li>`;
  });

  return item;
};

export { MainBanner };
