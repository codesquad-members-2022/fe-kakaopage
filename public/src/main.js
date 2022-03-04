function makeTodayHtml(day, jsonData) {
  let todayList = ''; 
  let todayData = jsonData;
  todayData[`${day}`].forEach((contentData, idx) => {
    todayList += 
    `<a href="${contentData["link"]}" class="webtoon-content">
      <div class="webtoon-img">
        <div class="webtoon-img-1">
          <img src="${contentData["imgUrl"]}" class="webtoon-img-1">
        </div>
        <div class="webtoon-ranking-description">
          <div class="ranking">${contentData["rank"] || contentData["grade"]}</div>
          <div class="ranking-logo">
            <img src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf" class="ranking-logo">
          </div>
        </div>
      </div>
      <div class="webtoon-list-description">
        <span>${contentData["title"]}</span>
      </div>
      <div class="viewers-num">
        <div class="viewers-logo">
          <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" class="viewers-logo">
        </div>
        <div class="num">${contentData["readerNum"]}</div>
      </div>
    </a>`
  });
  return todayList;
}

function makeTodayList(day) {
  return fetch('http://localhost:3000/src/tabData/webtoonData.json')
    .then(response => response.json())
    .then(result => makeTodayHtml(day, result));
  }

function makeTodayEvent(dayIdx, today) {
  const dayArr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun", "end"];
  const day = dayArr[dayIdx];
  const toonList = document.querySelector(`.${day}`);
  const webtoons = document.querySelector(".webtoon-list-1");
  const toonListArr = document.querySelectorAll('.navbar-second-content');
  makeTodayList(day).then(result => webtoons.innerHTML = result);
  if(dayIdx === today) toonList.parentElement.classList.add("makeBold", "makeBackgroundImg");
  toonList.addEventListener('click', function (el) {
    toonListArr.forEach((el, idx) => {
      el.classList.remove("makeBold", "makeBackgroundImg");
    })
    toonList.parentElement.classList.add("makeBold", "makeBackgroundImg");
    makeTodayList(day).then(result => webtoons.innerHTML = result);
  });
};


export { makeTodayList as makeTodayList, makeTodayEvent };