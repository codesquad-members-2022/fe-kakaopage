export const webtoonLongCard = (e) => {
  return `<li class="webtoon-card--long">
    <h1 class="romance-top__ranking">${e.rank}</h1>
    <div class="webtoon-card--long__img-card">
      <img
        src="https://static-page.kakao.com/static/common/badge_time.png?4f8e2321988f4826b438a4ab2509e82a"
        alt="clock-bar"
        class="clock-bar"
      />
      <img
        src=${e.img}
        alt="romance-top"
        class="webtoon-card--long_img"
      />
    </div>
    <div class="webtoon-card--long__info">
      <h2 class="webtoon-card--long__title">${e.title}</h2>
      <div class="webtoon-card--long__info-bar">
        <img
          src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
          class="user-icon"
        />
        <span class="webtoon-card--long__user">${e.user}</span>
        <span class="separator">|</span>
        <span class="webtoon-card--long__type">${e.info.type}</span>
        <span class="separator">|</span>
        <span class="webtoon-card--long__webtoon-type">${e.info.webtoonType}</span>
        <span class="separator">|</span>
        <span class="webtoon-card--long__writer"
          >${e.info.writer}</span
        >
      </div>
      <div class="webtoon-card--long__serialization">${e.serialization} 연재</div>
    </div>
  </li>`;
};
