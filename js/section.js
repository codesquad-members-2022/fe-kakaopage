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
  const section = document.querySelector("#sectionId");
  section.insertAdjacentHTML("afterbegin", webtoonGenreBar);
}
function renderEvent() {}
export { renderWebtoonGenreBar };
