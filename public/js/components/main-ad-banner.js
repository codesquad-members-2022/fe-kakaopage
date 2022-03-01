export const mainAdBanner = (ad, index, length) => {
  return `<li>
    <img
      src=${ad.img}
      alt="main-ad-banner-card"
      class="main-ad-banner__img"
    />
    <h3 class="webtoon-card--big__sub-title">
      ${ad.subTitle}
    </h3>
    <div class="webtoon-card--big__info-bar">
      <h1 class="webton-big-card__title">${ad.title}</h1>
      <div class="webtoon-card--big__details">
        <img
          class="webtoon-card--big__badge"
          src="https://static-page.kakao.com/static/pc/badge-bigthum-event.svg?2c00fc6eb18517e8f006adfaf464530b"
        />
        <img
          class="clock-icon"
          src="https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858"
        />
        <span>웹툰</span>
        <span class="separator">|</span>
        <img
          class="user-icon"
          src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e"
        />
        <span class="webtoon-card--big__user">${ad.user}</span>
        <span class="main-ad-banner__page">${index + 1} / ${length}</span>
      </div>
    </div>
    </li>`;
};
