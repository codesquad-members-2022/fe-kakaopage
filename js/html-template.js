class Contents {
  makeImageSection(list) {
    return `
    <li class="image_element">
      <img src="${list.url}" / alt="${list.title}" 이미지">
      <div class="image_text pos-abs">
      <h2 class="image_title mg-l-30 mg-b-5 pd-10 txt-l">${list.title}</h2>
      <span class="image_event ">${list.status}</span>
        <span class="image_span">🕔웹툰 |</span>
        <span class="image_span">👤${list.people}만명</span>
      </div>
      <div class="image_footer pos-abs pd-10">${list.message}</div>
      </li>
    `;
  }

  makeMenu(list) {
    if (list.firstSubInfo === undefined) {
      return `
      <section class="section dp-flex mg-t-20">
      <ul class="menu_ul pd-10">
          <li class="menu_top_left">
            <span>${list.firstInfo} </span>
          </li>
          <li>
            <span>${list.secondInfo} </span>
          </li>
          <li class="menu_top_right">
            <span>${list.thirdInfo} </span>
          </li>
          <li class="menu_bottom_left">
            <span>${list.fourthInfo} </span>
          </li>
          <li>
            <span>${list.fifthInfo}</span>
          </li>
          <li class="menu_bottom_right">
            <span>${list.sixthInfo} </span>
          </li>
        </ul>
      </section>
      `;
    } else {
      return `
    <section class="section dp-flex mg-t-20">
    <ul class="menu_ul pd-10">
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
  }

  makeAdvert(list) {
    return `
    <section class="advert dp-flex pos-rel mg-t-20 pd-20">
      <img src="${list.url}" / alt="${list.title} 광고 이미지"
      width="550" height="100">
      <div class="back pos-abs">🔙</div>
      <div class="soon pos-abs">🔜</div>
  </section>
  `;
  }

  makeDate(list) {
    return `
            <nav class="date">
            <ul class="dp-flex mg-b-10">
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

  makeTitle(list) {
    return `
    <span class="section_title txt-l mg-b-10 pd-10 width-80"
    >${list.title}<span>${list.webtoonNum}</span></span>
    <span class="more_content pd-10 txt-r width-20">${list.contents}</span>
    `;
  }

  makeFiveWebtoon(list) {
    return `
    <div class="five_webtoon txt-l pos-rel">
      <img src="${list.url}," / alt="${list.title} 이미지" width="110" height="110">
      <span>${list.webtoonInfo}</span><span>🕔</span>
      <div class="five_info pos-rel">
        <div>${list.title}</div>
        <div><img src="${list.update}," / alt="웹툰 상태 이미지" width="16" height="14"><span>👤${list.people}만명</span></div>
      </div>
    </div>
    `;
  }

  makeNewThings(list) {
    return `
    <div class="new_thing pos-rel">
        <img src="${list.url}" / alt="${list.title} 이미지" width="310"
        height="220">
        <div class="new_things_text pos-abs">
        <h3 class="new_things_title txt-l">${list.title}</h3>
        <span class="new_things_new txt-l mg-l-10">New</span>
          <span>웹툰 | 👤${list.people}</span>
        </div>
        <div class="new_things_footer pos-abs">${list.message}</div>
      </div>
      `;
  }

  makeRanking(list) {
    return `
    <div class="ranking width-100 pos-rel mg-b-10">
    <div class="ranking_num pos-abs mg-r-20">${list.rankingNum}</div>
      <img src="${list.url}" / alt="${list.title} 이미지"
      width="95" height="130">
      <img
    src="../src/image/기다리면 무료.png"
    alt="시계 이미지"
    width="25"
    height="25"
  />
  <div class="info_ranking pos-abs">
        <div><span class="new_icon">${list.icon}</span>${list.title}</div>
        <div>👤${list.people}만명 |기다무 웹툰 | ${list.genre} | ${list.writer}</div>
        <div>${list.date} 연재</div>
      </div>
  </div>`;
  }

  makeEvent(list) {
    return `
    <img src="${list.url}" / alt="이벤트 이미지"
    width="615" height="330">`;
  }

  makeTodayWebtoon(list) {
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

  makeWebtoonInfo(list) {
    if (list.subImage === undefined) {
      return `
      <div class="wait_contents txt-l pos-rel width-100 mg-b-10">
        <img src="${list.url}" / alt="${list.title} 이미지"
        width="130" height="100">
        <div class="info_contents pos-abs">
          <div><span>${list.status === undefined ? '' : list.status}</span>${
        list.title
      }</div>
          <div>${list.explain}</div>
          <div>👤${list.people}만명 | ${list.writer}</div>
        </div>
    </div>
    `;
    } else {
      return `
      <div class="wait_contents txt-l pos-rel width-100 mg-b-10">
      <img src="${list.url}" / alt="${list.title} 이미지"
      width="130" height="100">
      <img src="${list.subImage}" / alt="시계 이미지"
      width="25" height="25">
      <div class="info_contents pos-abs">
        <div><span>${list.status} </span>${list.title}</div>
        <div>${list.explain}</div>
        <div>👤${list.people}만명 | ${list.writer}</div>
        </div>
        </div>
        `;
    }
  }

  makeThreeMenu(list) {
    return `
    <section class="section dp-flex mg-t-20">
      <ul class="menu_ul mg-b-10">
        <li class=" menu_border_left ">
          <span>${list.infoLt} </span>
        </li>
        <li>
          <span>${list.infoCnt} </span>
        </li>
        <li class="class= menu_border_right">
          <span>${list.infoRgh}</span>
        </li>
      </ul>
    </section>`;
  }

  makeLongImageWebtoon(list) {
    return `
    <div class="long_webtoon txt-l pos-rel mg-b-10">
    <img src="${list.url}" / alt="${list.title} 이미지"
    width="140" height="200">
    <img
    src="../src/image/기다리면 무료.png"
    alt="시계 이미지"
    width="25"
    height="25"
  />
  <div class="info_long">
    <div><span>${list.icon}</span>${list.title}</div>
    <div>👤${list.people}만명</div>
    </div>
  </div>`;
  }
}
export const contents = new Contents();
