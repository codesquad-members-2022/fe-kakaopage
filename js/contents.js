export function makeImageSection(url, title, status, people, message) {
  return `
  <section class="image_section">
    <img src="${url}" / alt="${title}" 이미지">
    <div class="image_text">
      <h2 class="image_title">${title}</h2>
      <span class="image_event">${status}</span>
      <span class="image_span">🕔웹툰 |</span>
      <span class="image_span">👤${people}만명</span>
    </div>
    <div class="image_footer">${message}</div>
  </section>`;
}

export function makeMenu(
  info1,
  info1_1,
  info2,
  info2_1,
  info3,
  info3_1,
  info4,
  info5,
  info6,
  info6_1
) {
  return `
  <section class="menu_section">
    <ul>
      <li class="menu_top_left">
        <span>${info1} </span>
        <div>${info1_1}</div>
      </li>
      <li>
        <span>${info2} </span>
        <div>${info2_1}</div>
      </li>
      <li class="menu_top_right">
        <span>${info3} </span>
        <div>${info3_1}</div>
      </li>
      <li class="menu_bottom_left">
        <span>${info4} </span>
      </li>
      <li>
        <span>${info5}</span>
      </li>
      <li class="menu_bottom_right">
        <span>${info6} </span>
        <div>${info6_1}</div>
      </li>
    </ul>
  </section>`;
}

export function makeAdvert(url, title) {
  return `
  <section class="advert">
    <img src="${url}" / alt="${title} 광고 이미지"
    width="550" height="100">
    <div class="back">🔙</div>
    <div class="soon">🔜</div>
</section>`;
}

export function makeDate(notes) {
  return `
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

export function makeTitle(title, content) {
  return `
  <span class="section_title">${title}</span>
  <span class="more_content">${content}</span>`;
}

export function addTag(tagName, content, className) {
  const tag = document.createElement(`${tagName}`);
  tag.innerText = `${content}`;
  document.querySelector(`.${className}`).append(tag);
  return '';
}

export function makeNewThings(url, className, title, people, message) {
  return `
    <div class="${className}">
      <img src="${url}" / alt="${title} 이미지" width="310"
      height="220">
      <div class="new_things_text">
        <h3 class="new_things_title">${title}</h3>
        <span class="new_things_new">New</span>
        <span>웹툰 | 👤${people}</span>
      </div>
      <div class="new_things_footer">${message}</div>
    </div>`;
}

export function genreTop(url, title, grade, people) {
  return `
    <div class="drama_top">
      <img src="${url}" / alt="${title} 이미지" width="90" height="110">
      <span>★</span><span>${grade}</span><span>🕔</span>
      <div class="info_top">
      <div>${title}</div>
        <div><span>UP</span>👤${people}만명</div>
      </div>
    </div>`;
}

export function makeTodayRanking(url, span1, title, people) {
  return `
  <div class="today_ranking">
    <img src="${url}," / alt="${title} 이미지" width="110" height="110">
    <span>${span1}</span><span>🕔</span>
    <div class="info_top">
      <div>${title}</div>
      <div><span>UP</span>👤${people}만명</div>
    </div>
  </div>`;
}

export function makeTodayRecommend(url, span1, span2, title, people) {
  return `
  <div class="today_recommend">
    <img src="${url}," / alt="${title} 이미지" width="110" height="110">
    <span>${span1}</span><span>${span2}</span><span>🕔</span>
    <div class="info_top">
      <div>${title}</div>
      <div><span>UP</span>👤${people}만명</div>
    </div>
  </div>`;
}

export function makeWebtoonInfo(url, title, explain, people, writer) {
  return `
  <div class="wait_contents">
    <img src="${url}" / alt="${title} 이미지"
    width="130" height="100">
    <div class="info_contents">
      <div><span>UP</span>${title}</div>
      <div>${explain}</div>
      <div>👤${people}만명 | ${writer}</div>
    </div>
</div>
`;
}

export function makePromotion(url, title, explain, people, writer, info) {
  return `
  <div class="wait_contents">
    <img src="${url}" / alt="${title} 이미지"
    width="130" height="100">
    <div class="info_promotion">
      <div>${title}</div>
      <div>${explain}</div>
      <div>👤${people}만명 | ${writer}</div>
      </div>
      <div class = "plus_info">${info}</div>
  </div>`;
}

export function makeClockImage(url, title, explain, people, writer) {
  return `
  <div class="wait_contents">
    <img src="${url}" / alt="${title} 이미지"
    width="130" height="100">
    <div class="info_promotion">
      <div>${title}</div>
      <div>${explain}</div>
      <div>👤${people}만명 | ${writer}</div>
      </div>
      <div class = "plus_info"><img src="https://static-page.kakao.com/static/common/badge_time.png?4f8e2321988f4826b438a4ab2509e82a / alt="시계 이미지"
    width="20" height="20"</div>
  </div>`;
}

export function makeThreeMenu(liInfo1, liInfo2, liInfo3) {
  return `
  <section class="menu_section">
    <ul>
      <li class="menu_top_left", class="menu_top_right">
        <span>${liInfo1} </span>
      </li>
      <li>
        <span>${liInfo2} </span>
      </li>
      <li class="menu_bottom_left", class="menu_bottom_right">
        <span>${liInfo3}</span>
      </li>
    </ul>
  </section>`;
}

export function makeRanking(rankingNum, url, title, people, writer, date) {
  return `
  <div class="ranking_1st">
    <div class="ranking_num">${rankingNum}</div>
    <img src="${url}" / alt="${title} 이미지"
    width="95" height="130">
    <span class="time_icon">🕔</span>
    <div class="info_ranking">
      <div>${title}</div>
      <div>👤${people}만명 |기다무 웹툰 | 소년 | ${writer}</div>
      <div>${date} 연재</div>
    </div>
</div>`;
}
