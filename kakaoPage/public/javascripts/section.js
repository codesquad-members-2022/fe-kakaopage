import datas from "./data.js";

const section = document.querySelector("#sectionId");
function renderWebtoonGenreBar() {
  const webtoonGenreBar = `
    <div class="webtoonGenreBar" id ="webtoonGenresWrap">
    <div class="genreHome">홈
    </div>
    <div class="weekday">요일연재
    </div>
    <div class="webtoon">웹툰
    </div>
    <div class="boy">소년
    </div>
    <div class="drama">드라마
    </div>
    <div class="romance">로맨스
    </div>
    <div class="romanticFantasy">로판
    </div>
    <div class="action">액션무협
    </div>
    <div class="bl">BL
    </div>
</div>
    `;
  section.insertAdjacentHTML("afterbegin", webtoonGenreBar);
}
function renderEvent(genreInfo) {
  const eventContents = datas.eventContents;
  let title, src, follow;
  for (let i = 0; i < eventContents.length; i++) {
    const content = eventContents[i];
    if (content.genre === genreInfo) {
      title = content.title;
      src = content.imgsrc;
      follow = content.follow;
    }
  }
  const event = `
  <div class="event" id = "eventId">
  <div className="eventSlideWrap">
  <div className="eventSlideBox">
  <div class="eventSlide">
      <div class="eventSlideInfo">
          <div class="slideMoveBtn">
              <img src="/FE/FE01-html/images/previous button.svg" alt="">
              <img src="/FE/FE01-html/images/next button.svg" alt="">
          </div>
          <div class="eventTitle" id="eventTitleId">${title}</div>
          <div class="eventInfoWrap">
              <div class="eventLeft">
                  <div class="eventStatusWrap heightCenterSort">
                      <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt="" class="eventStatus">
                  </div>
                  <img src="/FE/FE01-html/images/ico-bigthum-wait.svg" class="clock"></img>
                  <div class="eventGenreInfo">${genreInfo}</div>
                  <div class="eventSlash">|</div>
                  <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt="" class="readCountEvent">
                  <div class="eventFollow" id="eventFollowId">${follow}</div>
              </div>
              <div class="eventRight">
                  <div class="eventPageNum">1</div>
                  <div class="eventPageTotalNum">/3</div>
              </div>
          </div>
      </div>
  </div>
  <div class="imgCopyWrap centerSort">
      <div class="imgCopy">확인하러 가기</div>
  </div>
</div>
</div>
</div>
  `;
  const genreBar = document.querySelector("#webtoonGenresWrap");
  genreBar.insertAdjacentHTML("afterend", event);
}
function renderEventButtons() {
  const eventButtons = `
  <div class="eventButtons centerSort">
  <div class="todayUp">
      <div class="todayUpCopy">오늘 UP</div>
      <div class="countNew">185</div>
  </div>
  <div class="todayNew">
      <div class="todayNewCopy">오늘 신작</div>
      <div class="countNew">10</div>
  </div>

  <div class="original">
      <div class="originalCopy">오리지널</div>
      <div class="countNew">2,322</div>
  </div>
  <div class="straightRun">
      <div class="straightRunCopy">완결까지 정주행</div>
  </div>
  <div class="independence">
      <div class="independenceCopy">독립운동가 웹툰</div>
  </div>
  <div class="todayLanking">
      <div class="todayLankingCopy">오늘랭킹</div>
      <div class="countNew centerSort">1위</div>
  </div>
</div>
  `;
  const event = document.querySelector("#eventId");
  event.insertAdjacentHTML("afterend", eventButtons);
}

export { renderWebtoonGenreBar, renderEvent, renderEventButtons };
