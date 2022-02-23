export const webtoonCard = (e) => {
  return `<div class="webtoon-card">
    <div class="webtoon-card__img">
      <img
        src=${e.img}
        alt="dow-webtoon"
      />
      <div class="webtoon-card__img-bar">
        <span>${
          isNaN(e.info)
            ? e.info
            : `<img src="https://static-page.kakao.com/static/common/badge-thumbnail-star.svg?c4d2181b65253b0259cfa219fe4506ac"/> ` +
              e.info
        }</span>
        <img
          class="clock-icon"
          src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf"
        />
      </div>
    </div>
    <div class="webtoon-card__title">${e.title}</div>
    <div class="webtoon-card__details">
      <img
        class="up-icon"
        src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f"
      />
      <img
        class="user-icon"
        src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
      />
      <div class="webtoon-card__user">${e.user}</div>
    </div>
  </div>`;
};
