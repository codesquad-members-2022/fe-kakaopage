export function makeImageSection(list) {
  console.log(list);

  return `
  <section class="image_section">
    <img src="${list.url}" / alt="${list.title}" 이미지">
    <div class="image_text">
      <h2 class="image_title">${list.title}</h2>
      <span class="image_event">${list.status}</span>
      <span class="image_span">🕔웹툰 |</span>
      <span class="image_span">👤${list.people}만명</span>
    </div>
    <div class="image_footer">${list.message}</div>
  </section>
  `;
}

export function makeMenu(list) {
  return `
  <section class="menu_section">
    <ul>
      <li class="menu_top_left">
        <span>${list.firstInfo} </span>
        <div>${list.firstSubInfo}</div>
      </li>
      <li>
        <span>${list.secondInfo} </span>
        <div>${list.secondSubInfo}</div>
      </li>
      <li class="menu_top_right">
        <span>${list.thirdInfo} </span>
        <div>${list.thirdSubInfo}</div>
      </li>
      <li class="menu_bottom_left">
        <span>${list.fourthInfo} </span>
      </li>
      <li>
        <span>${list.fifthInfo}</span>
      </li>
      <li class="menu_bottom_right">
        <span>${list.sixthInfo} </span>
        <div>${list.sixthSunInfo}</div>
      </li>
    </ul>
  </section>`;
}

export function makeAdvert(list) {
  return `
  <section class="advert">
    <img src="${list.url}" / alt="${list.title} 광고 이미지"
    width="550" height="100">
    <div class="back">🔙</div>
    <div class="soon">🔜</div>
</section>
`;
}

export function makeDate(list) {
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
              <li>${list.adtnlInfo}</li>
            </ul>
          </nav>
  `;
}

export function makeTitle(list) {
  return `
  <span class="section_title">${list.title}</span>
  <span class="more_content">${list.contents}</span>
  `;
}

export function addTag(list) {
  const tag = document.createElement(`${list.tagName}`);
  tag.innerText = `${list.content}`;
  document.querySelector(`.${list.className}`).append(tag);
  return '';
}

export function makeNewThings(list) {
  return `
    <div class="${list.className}">
      <img src="${list.url}" / alt="${list.title} 이미지" width="310"
      height="220">
      <div class="new_things_text">
        <h3 class="new_things_title">${list.title}</h3>
        <span class="new_things_new">New</span>
        <span>웹툰 | 👤${list.people}</span>
      </div>
      <div class="new_things_footer">${list.message}</div>
    </div>
    `;
}

export function genreTop(list) {
  return `
    <div class="drama_top">
      <img src="${list.url}" / alt="${list.title} 이미지" width="90" height="110">
      <span>★</span><span>${list.grade}</span><span>🕔</span>
      <div class="info_top">
      <div>${list.title}</div>
        <div><span>UP</span>👤${list.people}만명</div>
      </div>
    </div>`;
}

export function makeRanking(list) {
  return `
  <div class="ranking_1st">
    <div class="ranking_num">${list.rankingNum}</div>
    <img src="${list.url}" / alt="${list.title} 이미지"
    width="95" height="130">
    <span class="time_icon">🕔</span>
    <div class="info_ranking">
      <div><span class="new_icon">${list.icon}</span>${list.title}</div>
      <div>👤${list.people}만명 |기다무 웹툰 | ${list.genre} | ${list.writer}</div>
      <div>${list.date} 연재</div>
    </div>
</div>`;
}

export function makeEvent(list) {
  return `
  <img src="${list.url}" / alt="이벤트 이미지"
  width="615" height="330">`;
}

export function makeTodayRanking(list) {
  return `
  <div class="today_ranking">
    <img src="${list.url}," / alt="${list.title} 이미지" width="110" height="110">
    <span>${list.rankNum}</span><span>🕔</span>
    <div class="info_top">
      <div>${list.title}</div>
      <div><span>UP</span>👤${list.people}만명</div>
    </div>
  </div>
  `;
}

export function makeTodayWebtoon(list) {
  return `
  <div class="today_recommend">
    <img src="${list.url}," / alt="${list.title} 이미지" width="110" height="110">
    <span>${list.star}</span><span>${list.grade}</span><span>🕔</span>
    <div class="info_top">
      <div>${list.title}</div>
      <div><span>UP</span>👤${list.people}만명</div>
    </div>
  </div>
  `;
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

export function makeTodayRecommend(url, title, icon, people) {
  return `
  <div class="wait_contents">
  <img src="${url}" / alt="${title} 이미지"
  width="140" height="200">
  <div class="info_recommend">
  <div>${title}</div>
  <div><span>${icon}</span>👤${people}만명</div>
  </div>
    <div class = "plus_info"><img src="https://static-page.kakao.com/static/common/badge_time.png?4f8e2321988f4826b438a4ab2509e82a / alt="시계 이미지"
  width="20" height="20"</div>
</div>`;
}
