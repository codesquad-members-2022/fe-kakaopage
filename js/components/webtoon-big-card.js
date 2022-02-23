export const webtoonBigCard = (e) => {
  return `
  <div class="expected-top__webtoon webtoon-card--big">
  <img
    src=${e.img}
    alt="expected-top-webtoon"
    class="expected-top__img"
  />
  <div class="webtoon-card--big__info-bar">
    <h1 class="webton-big-card__title">${e.title}</h1>
    <div class="webtoon-card--big__details">
      <img src="https://static-page.kakao.com/static/pc/badge-bigthum-event.svg?2c00fc6eb18517e8f006adfaf464530b" alt="event-badge"/>
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
      <span class="webtoon-card--big__user">${e.user}</span>
    </div>
  </div>
  <h3 class="webtoon-card--big__sub-title">
    ${e.subTitle}
  </h3>
</div>`;
};
