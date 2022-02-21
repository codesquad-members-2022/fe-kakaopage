import todayData from '../data/webtoonData.js';
import createDom from './createDOM.js';
function makeTodayList(day) {
  const todayList =  todayData[`${day}`].forEach((contentData, idx) => {
    `<a href="${contentData["link"]}" class="webtoon-content">
      <div class="webtoon-img">
        <div class="webtoon-img-1">
          <img src="${contentData["imgUrl"]}">
        </div>
        <div class="webtoon-ranking-description">
          <div class="ranking">${contentData["rank"]}</div>
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

function makeTodayEvent(dayIdx) {
  const dayArr = ["mon", "tue", "wed", "thu", "fri", "sat", "sun", "end"];
  const day = dayArr[dayIdx];
  const toonList = document.querySelector(`.${day}`);
  const webtoons = document.querySelector(".webtoon-list-1");
  const toonListArr = document.querySelectorAll('.navbar-second-content');
  toonList.addEventListener('mousedown', function (el) {
    toonListArr.forEach((el, idx) => {
      el.classList.remove("makeBold", "makeBackgroundImg");
    })
    toonList.parentElement.classList.add("makeBold", "makeBackgroundImg");
    webtoons.innerHTML = makeTodayList(day);
  });
};

export { makeTodayList, makeTodayEvent };