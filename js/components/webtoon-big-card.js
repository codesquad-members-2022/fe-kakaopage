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
      <svg
        class="webtoon-card--big__badge"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="20"
        viewBox="0 0 50 20"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            fill="#000"
            stroke="#FFD200"
            d="M46 .5H4c-.966 0-1.841.392-2.475 1.025C.892 2.16.5 3.034.5 4v12c0 .966.392 1.841 1.025 2.475C2.16 19.108 3.034 19.5 4 19.5h42c.966 0 1.841-.392 2.475-1.025.633-.634 1.025-1.509 1.025-2.475V4c0-.966-.392-1.841-1.025-2.475C47.84.892 46.966.5 46 .5z"
          />
          <path
            fill="#FFD200"
            fill-rule="nonzero"
            d="M8.42 16.262V6.956h.054l5.418 9.306h2.196V3.914h-1.962v8.712h-.054l-5.13-8.712H6.458v12.348H8.42zm18.378 0v-1.746H21.2v-3.744h4.266V9.044H21.2V5.66h5.49V3.914h-7.704v12.348h7.812zm6.75 0l2.448-8.964h.054l2.412 8.964h2.196l3.024-12.348h-1.998l-2.124 9.144h-.054l-2.484-9.144h-1.8l-2.52 9.144h-.054l-2.106-9.144h-2.25l3.078 12.348h2.178z"
          />
        </g>
      </svg>
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
