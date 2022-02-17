export function makeImageSection(url, title, status, people, message) {
  return `<section class="image_section">
  <img src="${url}" / alt="${title}" 이미지">
  <div class="image_text">
    <h2 class="image_title">${title}</h2>
    <span class="image_event">${status}</span>
    <span class="image_span">웹툰 |</span>
    <span class="image_span">👤${people}만명</span>
  </div>
  <div class="image_footer">${message}</div>
</section>`;
}

export function makeDate(notes) {
  return `<section class="today_top">
          <nav class="date">
            <ul>
              <li>월</li>
              <li>화</li>
              <li>수</li>
              <li>목</li>
              <li>금</li>
              <li>토</li>
              <li>일</li>
              <li>${notes}</li>
            </ul>
          </nav>`;
}

export function makeTodayRanking(url, span1, title, people) {
  return `<div class="today_ranking">
    <img src="${url}," / alt="${title} 이미지" width="110" height="110">
    <span>${span1}</span><span>🕔</span>
    <div class="info_top">
      <div>${title}</div>
      <div><span>UP</span>👤${people}만명</div>
    </div>
  </div>`;
}

export function makeTodayRecommend(url, span1, span2, title, people) {
  return `<div class="today_recommend">
    <img src="${url}," / alt="${title} 이미지" width="110" height="110">
    <span>${span1}</span><span>${span2}</span><span>🕔</span>
    <div class="info_top">
      <div>${title}</div>
      <div><span>UP</span>👤${people}만명</div>
    </div>
  </div>`;
}

export function makeWebtoonInfo(url, title, people, genre, writer) {
  return `

<div class="wait_contents">
<img src="${url}" / alt="${title} 이미지"
width="130" height="100">
<div class="info_contents">
  <div><span>UP</span>${title}</div>
  <div>${explain}</div>
  <div>👤${people}만명 | ${genre} | ${writer}</div>
</div>
</div>`;
}
