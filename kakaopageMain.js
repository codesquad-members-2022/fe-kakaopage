const weekdayContents = [
  [
    "월",
    `
<div class="toonContent">
    <div class="toonContentTop">
        <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
    </div>
    <div class="contentLank">
        <div class="contentLankInfo">1위</div>
        <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
    </div>
    <div class="contentTitle">웹툰 제목</div>
    <div class="contentInfo">
        <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
        <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
        <span class="contentFollow">28.8만명</span>
    </div>
</div>`,
  ],
  [
    "화",
    `
  <div class="toonContent">
  <div class="toonContentTop">
    <img src="/FE/FE01-html/images/도굴왕.png" alt="" class="contentImage">
  </div>
  <div class="contentLank">
      <div class="contentLankInfo">1위</div>
      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
  </div>
  <div class="contentTitle">웹툰 제목</div>
  <div class="contentInfo">
      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
      <span class="contentFollow">28.8만명</span>
  </div>
</div>
  `,
  ],
  [
    "수",
    `
<div class="toonContent">
<div class="toonContentTop">
    <img src="/FE/FE01-html/images/던전 리셋.png" alt="" class="contentImage">
</div>
<div class="contentLank">
    <div class="contentLankInfo">1위</div>
    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
</div>
<div class="contentTitle">웹툰 제목</div>
<div class="contentInfo">
    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
    <span class="contentFollow">28.8만명</span>
</div>
</div>
`,
  ],
  [
    `목`,
    `
    <div class="toonContent">
    <div class="toonContentTop">
        <img src="/FE/FE01-html/images/용사의 전 여친입니다.png" alt="" class="contentImage">
    </div>
    <div class="contentLank">
        <div class="contentLankInfo">1위</div>
        <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
    </div>
    <div class="contentTitle">웹툰 제목</div>
    <div class="contentInfo">
        <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
        <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
        <span class="contentFollow">28.8만명</span>
    </div>
</div>  
      `,
  ],
  [
    "금",
    `
      <div class="toonContent">
      <div class="toonContentTop">
          <img src="/FE/FE01-html/images/시한부라서 흑막의 며느리가 되었는데.png" alt="" class="contentImage">
      </div>
      <div class="contentLank">
          <div class="contentLankInfo">1위</div>
          <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
      </div>
      <div class="contentTitle">웹툰 제목</div>
      <div class="contentInfo">
          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
          <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
          <span class="contentFollow">28.8만명</span>
      </div>
  </div>
      `,
  ],
  [
    "토",
    `
      <div class="toonContent">
      <div class="toonContentTop">
          <img src="/FE/FE01-html/images/다정한 그대를 지키는 방법.png" alt="" class="contentImage">
      </div>
      <div class="contentLank">
          <div class="contentLankInfo">1위</div>
          <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
      </div>
      <div class="contentTitle">웹툰 제목</div>
      <div class="contentInfo">
          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
          <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
          <span class="contentFollow">28.8만명</span>
      </div>
  </div>  
      `,
  ],
  [
    "일",
    `
  <div class="toonContent">
  <div class="toonContentTop">
      <img src="/FE/FE01-html/images/흑막을 버리는 데 실패했다.png" alt="" class="contentImage">
  </div>
  <div class="contentLank">
      <div class="contentLankInfo">1위</div>
      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
  </div>
  <div class="contentTitle">웹툰 제목</div>
  <div class="contentInfo">
      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
      <span class="contentFollow">28.8만명</span>
  </div>
</div>
  `,
  ],
];
const eventContents = [
  ["홈", "/FE/FE01-html/images/소설 _ 회귀자의 증권사 생활 6타 _ 15-24.png"],
  [
    "요일연재",
    "/FE/FE01-html/images/소설 _ 마법 아카데미의 육체파 천재 8타 _ 0-24.png",
  ],
  [
    "웹툰",
    "/FE/FE01-html/images/소설 _ 그 악녀가 검을 든 이유 2타 _ 10-24.png",
  ],
  ["소년", "/FE/FE01-html/images/웹툰 _ 롱리브더킹 1타 _ 21-24.png"],
  [
    "드라마",
    "/FE/FE01-html/images/웹툰 _ 8클래스 마법사의 회귀 0타 _ 21-23.png",
  ],
  ["로맨스", "/FE/FE01-html/images/웹툰 _ 학사재생 9타 _ 0-24.png"],
  [
    "로판",
    "/FE/FE01-html/images/웹툰 _ 남주를 주웠더니 남편이 생겨버렸다 3타 _ 15-23.png",
  ],
  ["액션무협", "/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png"],
  ["BL", "/FE/FE01-html/images/소설 _ 그 악녀가 검을 든 이유 2타 _ 10-24.png"],
];
const sectionContents = [
  [
    "홈",
    `
<div class="event">
    <div class="eventSlide" id="eventSlideId">
        <div class="eventSlideInfo">
            <div class="slideMoveBtn">
                <img src="/FE/FE01-html/images/previous button.svg" alt="">
                <img src="/FE/FE01-html/images/next button.svg" alt="">
            </div>
            <div class="eventTitle">에스티오</div>
            <div class="eventInfoWrap">
                <div class="eventLeft">
                    <div class="eventStatusWrap">
                        <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt="" class="eventStatus">
                    </div>
                    <img src="/FE/FE01-html/images/ico-bigthum-wait.svg" class="clock"></img>
                    <div class="eventGenreInfo">웹툰</div>
                    <div class="eventSlash">|</div>
                    <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt="" class="readCountEvent">
                    <div class="eventFollow">31.3만명</div>
                </div>
                <div class="eventRight">
                    <div class="eventPageNum">1</div>
                    <div class="eventPageTotalNum">/3</div>
                </div>
            </div>
        </div>
    </div>
    <div class="imgCopyWrap">
        <div class="imgCopy">확인하러 가기</div>
    </div>
</div>
<div class="eventButtons">
    <div class="todayNew">
        <div class="todayNewCopy">오늘 신작</div>
        <div class="countNew">10</div>
    </div>
    <div class="gift">
        <div class="giftCopy">달콤한 선물❤️</div>
        <div class="heart"></div>
    </div>
    <div class="hiddenMasterPiece">
        <div class="hiddenMasterCopy">숨겨진 명작</div>  
    </div>            
</div>
<div class="waitForFreeWebtoon">
    <div class="waitFreeTop contentTop">
        <div class="copyAndCount">
            <div class="waitFreeWebtoonCopy sectionTitle">기다리면 무료 웹툰</div>
            <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
        </div>
        <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
    </div>
    <div class="contentWrap">
        <div class="content">
            <div class="contentImageWrap">
                <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                    class="contentImageStatus waitFreeImageStatus">
            </div>
            <div class="contentDetailWrap">
                <div class="status">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                    <div class="contantTitle">에스티오</div>
                </div>

                <div class="synopsis">날 부른게... 당신입니까?</div>
                <div class="followAndCreator">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                    <div class="follow">30.8만명</div>
                    <div class="contentSlash">|</div>
                    <div class="creator">탱커,뿡빠, 공든탑</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="contentImageWrap">
                <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                    class="contentImageStatus waitFreeImageStatus">
            </div>
            <div class="contentDetailWrap">
                <div class="status">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                    <div class="contantTitle">에스티오</div>
                </div>

                <div class="synopsis">날 부른게... 당신입니까?</div>
                <div class="followAndCreator">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                    <div class="follow">30.8만명</div>
                    <div class="contentSlash">|</div>
                    <div class="creator">탱커,뿡빠, 공든탑</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="contentImageWrap">
                <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                    class="contentImageStatus waitFreeImageStatus">
            </div>
            <div class="contentDetailWrap">
                <div class="status">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                    <div class="contantTitle">에스티오</div>
                </div>

                <div class="synopsis">날 부른게... 당신입니까?</div>
                <div class="followAndCreator">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                    <div class="follow">30.8만명</div>
                    <div class="contentSlash">|</div>
                    <div class="creator">탱커,뿡빠, 공든탑</div>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="contentImageWrap">
                <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                    class="contentImageStatus waitFreeImageStatus">
            </div>
            <div class="contentDetailWrap">
                <div class="status">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                    <div class="contantTitle">에스티오</div>
                </div>

                <div class="synopsis">날 부른게... 당신입니까?</div>
                <div class="followAndCreator">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                    <div class="follow">30.8만명</div>
                    <div class="contentSlash">|</div>
                    <div class="creator">탱커,뿡빠, 공든탑</div>
                </div>
            </div>
        </div>
    </div>
</div>        <div class="dayRankingTop">
    <div class="contentTop dayRankingTopTop">
        <div class="copyAndCount">
            <div class="waitFreeWebtoonCopy sectionTitle">일간랭킹 TOP</div>
        </div>
        <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
    </div>
    <div class="dayRankingContentWrap">
        <div class="rankingNumWrap">
            <div class="rankingNum">1</div>
        </div>
        <div class="dayRankingImageWrap">
            <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
            <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
        </div>
        <div class="dayRankingDataWrap">
            <div class="statusAndTitle">
                <div class="dayRankingStatus">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                </div>
                <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
            </div>
            <div class="dayRankingInfo">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
                <span class="dayRankSlash">|</span>
                <span class="dayRankwebtoonType">기다무웹툰</span>
                <span class="dayRankSlash">|</span>
                <span class="dayRankWebtoonType">로판</span>
                <span class="creator">ASSAM,숭늉,지은향</span>
            </div>
            <div class="dayRankingUpdateDay">수 연재</div>
        </div>
    </div>
    <div class="dayRankingContentWrap">
        <div class="rankingNumWrap">
            <div class="rankingNum">2</div>
        </div>
        <div class="dayRankingImageWrap">
            <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
            <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
        </div>
        <div class="dayRankingDataWrap">
            <div class="statusAndTitle">
                <div class="dayRankingStatus">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                </div>
                <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
            </div>
            <div class="dayRankingInfo">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
                <span class="dayRankSlash">|</span>
                <span class="dayRankwebtoonType">기다무웹툰</span>
                <span class="dayRankSlash">|</span>
                <span class="dayRankWebtoonType">로판</span>
                <span class="creator">ASSAM,숭늉,지은향</span>
            </div>
            <div class="dayRankingUpdateDay">수 연재</div>
        </div>
    </div>
    <div class="dayRankingContentWrap">
        <div class="rankingNumWrap">
            <div class="rankingNum">3</div>
        </div>
        <div class="dayRankingImageWrap">
            <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
            <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
        </div>
        <div class="dayRankingDataWrap">
            <div class="statusAndTitle">
                <div class="dayRankingStatus">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                </div>
                <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
            </div>
            <div class="dayRankingInfo">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
                <span class="dayRankSlash">|</span>
                <span class="dayRankwebtoonType">기다무웹툰</span>
                <span class="dayRankSlash">|</span>
                <span class="dayRankWebtoonType">로판</span>
                <span class="creator">ASSAM,숭늉,지은향</span>
            </div>
            <div class="dayRankingUpdateDay">수 연재</div>
        </div>
    </div>
</div>
<div class="slideAd">
    <div class="slideBtn">
        <img src="/FE/FE01-html/images/ic-paging-back-nor.svg" alt="">
    </div>
    <img src="/FE/FE01-html/images/pkJfplo35eZ6KPVd803O11.jpg" alt="" class="slideAdImg">
    <div class="slideBtn">
        <img src="/FE/FE01-html/images/ic-paging-next-nor.svg" alt="">
    </div>
</div>
<div class="weekdayTop">
    <div class="weekdayTopTop contentTop">
        <div class="copyAndCount">
            <div class="waitFreeWebtoonCopy sectionTitle">요일 연제 TOP</div>
            <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
        </div>
        <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
    </div>
    <div class="weekdayTopWeekInfo" Id="weekdayTopweekInfoId">
        <div class="monday" onclick="changeBorderColor(this),changeDayAndContents(this)">월</div>
        <div class="tuesday" onclick="changeBorderColor(this),changeDayAndContents(this)">화</div>
        <div class="wendesday" onclick="changeBorderColor(this),changeDayAndContents(this)">수</div>
        <div class="thursday" onclick="changeBorderColor(this),changeDayAndContents(this)">목</div>
        <div class="friday" onclick="changeBorderColor(this),changeDayAndContents(this)">금</div>
        <div class="saturday" onclick="changeBorderColor(this),changeDayAndContents(this)">토</div>
        <div class="sunday" onclick="changeBorderColor(this),changeDayAndContents(this)">일</div>
        <div class="theEnd" onclick="changeBorderColor(this),changeDayAndContents(this)">완결</div>
    </div>
    <div class="weekdayContentWrap" id="weekdayContentWrapId">
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
    </div>
</div>
<div class="expectedWebtoon">
    <div class="contentTop">
        <div class="copyAndCount">
            <div class="waitFreeWebtoonCopy sectionTitle">기다리면 무료 웹툰</div>
            <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
        </div>
        <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
    </div>
    <div class="expectToonContentWrap">
        <div class="event expectToonContentWRapper">
            <div class="eventSlide expectToonContent">
                <div class="eventSlideInfo expectToonInfo">
                    <div class="eventTitle expectToonTitle">에스티오</div>
                    <div class="eventInfoWrap expectToonInfoWrap">
                        <div class="eventStatusWrap ">
                            <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt=""
                                class="eventStatus expectStatus">
                        </div>
                        <img src="/FE/FE01-html/images/ico-bigthum-wait.svg"
                            class="clock expectToonClock"></img>
                        <div class="eventGenreInfo">웹툰</div>
                        <div class="eventSlash expectToonSlash">|</div>
                        <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt=""
                            class="readCountEvent readCountExpectToon">
                        <div class="eventFollow">31.3만명</div>
                    </div>
                </div>
            </div>
            <div class="imgCopyWrap expectToonCopyWrap">
                <div class="imgCopy">확인하러 가기</div>
            </div>
        </div>
        <div class="event expectToonContentWRapper">
            <div class="eventSlide expectToonContent">
                <div class="eventSlideInfo expectToonInfo">
                    <div class="eventTitle expectToonTitle">에스티오</div>
                    <div class="eventInfoWrap expectToonInfoWrap">
                        <div class="eventStatusWrap ">
                            <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt=""
                                class="eventStatus expectStatus">
                        </div>
                        <img src="/FE/FE01-html/images/ico-bigthum-wait.svg"
                            class="clock expectToonClock"></img>
                        <div class="eventGenreInfo">웹툰</div>
                        <div class="eventSlash expectToonSlash">|</div>
                        <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt=""
                            class="readCountEvent readCountExpectToon">
                        <div class="eventFollow">31.3만명</div>
                    </div>
                </div>
            </div>
            <div class="imgCopyWrap expectToonCopyWrap">
                <div class="imgCopy">확인하러 가기</div>
            </div>
        </div>
    </div>
</div>
<div class="genreTop">
    <div class="contentTop">
        <div class="copyAndCount">
            <div class="waitFreeWebtoonCopy sectionTitle">로맨스 TOP</div>
        </div>
        <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
    </div>
    <div class="toonContentWrap">
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
    </div>
</div>
<div class="genreTop">
    <div class="contentTop">
        <div class="copyAndCount">
            <div class="waitFreeWebtoonCopy sectionTitle">로판 TOP</div>
        </div>
        <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
    </div>
    <div class="toonContentWrap">
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
    </div>
</div>
<div class="genreTop">
    <div class="contentTop">
        <div class="copyAndCount">
            <div class="waitFreeWebtoonCopy sectionTitle">드라마 TOP</div>
        </div>
        <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
    </div>
    <div class="toonContentWrap">
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
    </div>
</div>
<div class="genreTop">
    <div class="contentTop">
        <div class="copyAndCount">
            <div class="waitFreeWebtoonCopy sectionTitle">BL/GL TOP</div>
        </div>
        <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
    </div>
    <div class="toonContentWrap">
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
    </div>
</div>
<div class="genreTop">
    <div class="contentTop">
        <div class="copyAndCount">
            <div class="waitFreeWebtoonCopy sectionTitle">소년 TOP</div>
        </div>
        <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
    </div>
    <div class="toonContentWrap">
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
    </div>
</div>
<div class="genreTop">
    <div class="contentTop">
        <div class="copyAndCount">
            <div class="waitFreeWebtoonCopy sectionTitle">액션 TOP</div>
        </div>
        <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
    </div>
    <div class="toonContentWrap">
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
        <div class="toonContent">
            <div class="toonContentTop">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
            </div>
            <div class="contentLank">
                <div class="contentLankInfo">1위</div>
                <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
            </div>
            <div class="contentTitle">웹툰 제목</div>
            <div class="contentInfo">
                <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                <span class="contentFollow">28.8만명</span>
            </div>
        </div>
    </div>
</div>
`,
  ],
  [
    "웹툰",
    `
    <div class="webtoonGenreBar">
        <div class="genreHome" onclick="changeTabsColor(this),  changeEventSlideContents(this)">홈
        </div>
        <div class="weekday" onclick="changeTabsColor(this),  changeEventSlideContents(this)">요일연재
        </div>
        <div class="webtoon" onclick="changeTabsColor(this),  changeEventSlideContents(this)">웹툰
        </div>
        <div class="boy" onclick="changeTabsColor(this),  changeEventSlideContents(this)">소년
        </div>
        <div class="drama" onclick="changeTabsColor(this),  changeEventSlideContents(this)">드라마
        </div>
        <div class="romance" onclick="changeTabsColor(this),  changeEventSlideContents(this)">로맨스
        </div>
        <div class="romanticFantasy" onclick="changeTabsColor(this),  changeEventSlideContents(this)">로판
        </div>
        <div class="action" onclick="changeTabsColor(this),  changeEventSlideContents(this)">액션무협
        </div>
        <div class="bl" onclick="changeTabsColor(this),  changeEventSlideContents(this)">BL
        </div>

    </div>
    <div class="event">
        <div class="eventSlide" id="eventSlideId">
            <div class="eventSlideInfo">
                <div class="slideMoveBtn">
                    <img src="/FE/FE01-html/images/previous button.svg" alt="">
                    <img src="/FE/FE01-html/images/next button.svg" alt="">
                </div>
                <div class="eventTitle">에스티오</div>
                <div class="eventInfoWrap">
                    <div class="eventLeft">
                        <div class="eventStatusWrap">
                            <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt="" class="eventStatus">
                        </div>
                        <img src="/FE/FE01-html/images/ico-bigthum-wait.svg" class="clock"></img>
                        <div class="eventGenreInfo">웹툰</div>
                        <div class="eventSlash">|</div>
                        <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt="" class="readCountEvent">
                        <div class="eventFollow">31.3만명</div>
                    </div>
                    <div class="eventRight">
                        <div class="eventPageNum">1</div>
                        <div class="eventPageTotalNum">/3</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="imgCopyWrap">
            <div class="imgCopy">확인하러 가기</div>
        </div>
    </div>
    <div class="eventButtons">
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
            <div class="countNew">1위</div>
        </div>
    </div>
    <!-- <div class="waitForFreeWebtoon">
        <div class="waitFreeTop contentTop">
            <div class="copyAndCount">
                <div class="waitFreeWebtoonCopy sectionTitle">기다리면 무료 웹툰</div>
                <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
            </div>
            <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
        </div>
        <div class="contentWrap">
            <div class="content">
                <div class="contentImageWrap">
                    <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                    <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                        class="contentImageStatus waitFreeImageStatus">
                </div>
                <div class="contentDetailWrap">
                    <div class="status">
                        <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                        <div class="contantTitle">에스티오</div>
                    </div>

                    <div class="synopsis">날 부른게... 당신입니까?</div>
                    <div class="followAndCreator">
                        <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                        <div class="follow">30.8만명</div>
                        <div class="contentSlash">|</div>
                        <div class="creator">탱커,뿡빠, 공든탑</div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="contentImageWrap">
                    <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                    <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                        class="contentImageStatus waitFreeImageStatus">
                </div>
                <div class="contentDetailWrap">
                    <div class="status">
                        <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                        <div class="contantTitle">에스티오</div>
                    </div>

                    <div class="synopsis">날 부른게... 당신입니까?</div>
                    <div class="followAndCreator">
                        <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                        <div class="follow">30.8만명</div>
                        <div class="contentSlash">|</div>
                        <div class="creator">탱커,뿡빠, 공든탑</div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="contentImageWrap">
                    <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                    <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                        class="contentImageStatus waitFreeImageStatus">
                </div>
                <div class="contentDetailWrap">
                    <div class="status">
                        <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                        <div class="contantTitle">에스티오</div>
                    </div>

                    <div class="synopsis">날 부른게... 당신입니까?</div>
                    <div class="followAndCreator">
                        <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                        <div class="follow">30.8만명</div>
                        <div class="contentSlash">|</div>
                        <div class="creator">탱커,뿡빠, 공든탑</div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="contentImageWrap">
                    <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                    <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                        class="contentImageStatus waitFreeImageStatus">
                </div>
                <div class="contentDetailWrap">
                    <div class="status">
                        <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                        <div class="contantTitle">에스티오</div>
                    </div>

                    <div class="synopsis">날 부른게... 당신입니까?</div>
                    <div class="followAndCreator">
                        <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                        <div class="follow">30.8만명</div>
                        <div class="contentSlash">|</div>
                        <div class="creator">탱커,뿡빠, 공든탑</div>
                    </div>
                </div>
            </div>
        </div>
    </div> -->
    <div class="slideAd">
        <div class="slideBtn">
            <img src="/FE/FE01-html/images/ic-paging-back-nor.svg" alt="">
        </div>
        <img src="/FE/FE01-html/images/pkJfplo35eZ6KPVd803O11.jpg" alt="" class="slideAdImg">
        <div class="slideBtn">
            <img src="/FE/FE01-html/images/ic-paging-next-nor.svg" alt="">
        </div>
    </div>
    <div class="weekdayTop">
        <div class="weekdayTopTop contentTop">
            <div class="copyAndCount">
                <div class="waitFreeWebtoonCopy sectionTitle">요일 연제 TOP</div>
                <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
            </div>
            <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
        </div>
        <div class="weekdayTopWeekInfo" Id="weekdayTopweekInfoId">
            <div class="monday" onclick="changeBorderColor(this),changeDayAndContents(this)">월</div>
            <div class="tuesday" onclick="changeBorderColor(this),changeDayAndContents(this)">화</div>
            <div class="wendesday" onclick="changeBorderColor(this),changeDayAndContents(this)">수</div>
            <div class="thursday" onclick="changeBorderColor(this),changeDayAndContents(this)">목</div>
            <div class="friday" onclick="changeBorderColor(this),changeDayAndContents(this)">금</div>
            <div class="saturday" onclick="changeBorderColor(this),changeDayAndContents(this)">토</div>
            <div class="sunday" onclick="changeBorderColor(this),changeDayAndContents(this)">일</div>
            <div class="theEnd" onclick="changeBorderColor(this),changeDayAndContents(this)">완결</div>
        </div>
        <div class="weekdayContentWrap" id="weekdayContentWrapId">
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
        </div>
    </div>
    <div class="expectedWebtoon">
        <div class="contentTop">
            <div class="copyAndCount">
                <div class="waitFreeWebtoonCopy sectionTitle">기다리면 무료 웹툰</div>
                <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
            </div>
            <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
        </div>
        <div class="expectToonContentWrap">
            <div class="event expectToonContentWRapper">
                <div class="eventSlide expectToonContent">
                    <div class="eventSlideInfo expectToonInfo">
                        <div class="eventTitle expectToonTitle">에스티오</div>
                        <div class="eventInfoWrap expectToonInfoWrap">
                            <div class="eventStatusWrap ">
                                <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt=""
                                    class="eventStatus expectStatus">
                            </div>
                            <img src="/FE/FE01-html/images/ico-bigthum-wait.svg"
                                class="clock expectToonClock"></img>
                            <div class="eventGenreInfo">웹툰</div>
                            <div class="eventSlash expectToonSlash">|</div>
                            <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt=""
                                class="readCountEvent readCountExpectToon">
                            <div class="eventFollow">31.3만명</div>
                        </div>
                    </div>
                </div>
                <div class="imgCopyWrap expectToonCopyWrap">
                    <div class="imgCopy">확인하러 가기</div>
                </div>
            </div>
            <div class="event expectToonContentWRapper">
                <div class="eventSlide expectToonContent">
                    <div class="eventSlideInfo expectToonInfo">
                        <div class="eventTitle expectToonTitle">에스티오</div>
                        <div class="eventInfoWrap expectToonInfoWrap">
                            <div class="eventStatusWrap ">
                                <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt=""
                                    class="eventStatus expectStatus">
                            </div>
                            <img src="/FE/FE01-html/images/ico-bigthum-wait.svg"
                                class="clock expectToonClock"></img>
                            <div class="eventGenreInfo">웹툰</div>
                            <div class="eventSlash expectToonSlash">|</div>
                            <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt=""
                                class="readCountEvent readCountExpectToon">
                            <div class="eventFollow">31.3만명</div>
                        </div>
                    </div>
                </div>
                <div class="imgCopyWrap expectToonCopyWrap">
                    <div class="imgCopy">확인하러 가기</div>
                </div>
            </div>
        </div>
    </div>
    <div class="genreTop">
        <div class="contentTop">
            <div class="copyAndCount">
                <div class="waitFreeWebtoonCopy sectionTitle">로맨스 TOP</div>
            </div>
            <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
        </div>
        <div class="toonContentWrap">
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
        </div>
    </div>
    <div class="genreTop">
        <div class="contentTop">
            <div class="copyAndCount">
                <div class="waitFreeWebtoonCopy sectionTitle">로판 TOP</div>
            </div>
            <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
        </div>
        <div class="toonContentWrap">
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
        </div>
    </div>
    <div class="genreTop">
        <div class="contentTop">
            <div class="copyAndCount">
                <div class="waitFreeWebtoonCopy sectionTitle">드라마 TOP</div>
            </div>
            <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
        </div>
        <div class="toonContentWrap">
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
        </div>
    </div>
    <div class="genreTop">
        <div class="contentTop">
            <div class="copyAndCount">
                <div class="waitFreeWebtoonCopy sectionTitle">BL/GL TOP</div>
            </div>
            <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
        </div>
        <div class="toonContentWrap">
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
        </div>
    </div>
    <div class="genreTop">
        <div class="contentTop">
            <div class="copyAndCount">
                <div class="waitFreeWebtoonCopy sectionTitle">소년 TOP</div>
            </div>
            <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
        </div>
        <div class="toonContentWrap">
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
        </div>
    </div>
    <div class="genreTop">
        <div class="contentTop">
            <div class="copyAndCount">
                <div class="waitFreeWebtoonCopy sectionTitle">액션 TOP</div>
            </div>
            <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
        </div>
        <div class="toonContentWrap">
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
            <div class="toonContent">
                <div class="toonContentTop">
                    <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                </div>
                <div class="contentLank">
                    <div class="contentLankInfo">1위</div>
                    <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                </div>
                <div class="contentTitle">웹툰 제목</div>
                <div class="contentInfo">
                    <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                </div>
            </div>
        </div>
    </div>
    <div class="dayRankingTop">
        <div class="contentTop dayRankingTopTop">
            <div class="copyAndCount">
                <div class="waitFreeWebtoonCopy sectionTitle">일간랭킹 TOP</div>
            </div>
            <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
        </div>
        <div class="dayRankingContentWrap">
            <div class="rankingNumWrap">
                <div class="rankingNum">1</div>
            </div>
            <div class="dayRankingImageWrap">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
                <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
            </div>
            <div class="dayRankingDataWrap">
                <div class="statusAndTitle">
                    <div class="dayRankingStatus">
                        <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                    </div>
                    <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
                </div>
                <div class="dayRankingInfo">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                    <span class="dayRankSlash">|</span>
                    <span class="dayRankwebtoonType">기다무웹툰</span>
                    <span class="dayRankSlash">|</span>
                    <span class="dayRankWebtoonType">로판</span>
                    <span class="creator">ASSAM,숭늉,지은향</span>
                </div>
                <div class="dayRankingUpdateDay">수 연재</div>
            </div>
        </div>
        <div class="dayRankingContentWrap">
            <div class="rankingNumWrap">
                <div class="rankingNum">2</div>
            </div>
            <div class="dayRankingImageWrap">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
                <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
            </div>
            <div class="dayRankingDataWrap">
                <div class="statusAndTitle">
                    <div class="dayRankingStatus">
                        <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                    </div>
                    <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
                </div>
                <div class="dayRankingInfo">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                    <span class="dayRankSlash">|</span>
                    <span class="dayRankwebtoonType">기다무웹툰</span>
                    <span class="dayRankSlash">|</span>
                    <span class="dayRankWebtoonType">로판</span>
                    <span class="creator">ASSAM,숭늉,지은향</span>
                </div>
                <div class="dayRankingUpdateDay">수 연재</div>
            </div>
        </div>
        <div class="dayRankingContentWrap">
            <div class="rankingNumWrap">
                <div class="rankingNum">3</div>
            </div>
            <div class="dayRankingImageWrap">
                <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
                <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
            </div>
            <div class="dayRankingDataWrap">
                <div class="statusAndTitle">
                    <div class="dayRankingStatus">
                        <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                    </div>
                    <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
                </div>
                <div class="dayRankingInfo">
                    <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                    <span class="contentFollow">28.8만명</span>
                    <span class="dayRankSlash">|</span>
                    <span class="dayRankwebtoonType">기다무웹툰</span>
                    <span class="dayRankSlash">|</span>
                    <span class="dayRankWebtoonType">로판</span>
                    <span class="creator">ASSAM,숭늉,지은향</span>
                </div>
                <div class="dayRankingUpdateDay">수 연재</div>
            </div>
        </div>
    </div>
  `,
  ],
  [
    "웹소설",
    `
      <div class="webtoonGenreBar">
          <div class="genreHome" onclick="changeTabsColor(this),  changeEventSlideContents(this)">홈
          </div>
          <div class="weekday" onclick="changeTabsColor(this),  changeEventSlideContents(this)">요일연재
          </div>
          <div class="webtoon" onclick="changeTabsColor(this),  changeEventSlideContents(this)">웹소설
          </div>
          <div class="boy" onclick="changeTabsColor(this),  changeEventSlideContents(this)">판타지
          </div>
          <div class="drama" onclick="changeTabsColor(this),  changeEventSlideContents(this)">현판
          </div>
          <div class="romance" onclick="changeTabsColor(this),  changeEventSlideContents(this)">로맨스
          </div>
          <div class="romanticFantasy" onclick="changeTabsColor(this),  changeEventSlideContents(this)">로판
          </div>
          <div class="action" onclick="changeTabsColor(this),  changeEventSlideContents(this)">무협
          </div>
          <div class="fantasyDrama" onclick="changeTabsColor(this),  changeEventSlideContents(this)">판드
          </div>
          <div class="bl" onclick="changeTabsColor(this),  changeEventSlideContents(this)">BL
          </div>
          <div class="paperback" onclick="changeTabsColor(this),  changeEventSlideContents(this)">단행본
          </div>

      </div>
      <div class="event">
          <div class="eventSlide" id="eventSlideId">
              <div class="eventSlideInfo">
                  <div class="slideMoveBtn">
                      <img src="/FE/FE01-html/images/previous button.svg" alt="">
                      <img src="/FE/FE01-html/images/next button.svg" alt="">
                  </div>
                  <div class="eventTitle">에스티오</div>
                  <div class="eventInfoWrap">
                      <div class="eventLeft">
                          <div class="eventStatusWrap">
                              <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt="" class="eventStatus">
                          </div>
                          <img src="/FE/FE01-html/images/ico-bigthum-wait.svg" class="clock"></img>
                          <div class="eventGenreInfo">웹툰</div>
                          <div class="eventSlash">|</div>
                          <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt="" class="readCountEvent">
                          <div class="eventFollow">31.3만명</div>
                      </div>
                      <div class="eventRight">
                          <div class="eventPageNum">1</div>
                          <div class="eventPageTotalNum">/3</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="imgCopyWrap">
              <div class="imgCopy">확인하러 가기</div>
          </div>
      </div>
      <div class="eventButtons">
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
              <div class="countNew">1위</div>
          </div>
      </div>
      <!-- <div class="waitForFreeWebtoon">
          <div class="waitFreeTop contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">기다리면 무료 웹툰</div>
                  <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="contentWrap">
              <div class="content">
                  <div class="contentImageWrap">
                      <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                      <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                          class="contentImageStatus waitFreeImageStatus">
                  </div>
                  <div class="contentDetailWrap">
                      <div class="status">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                          <div class="contantTitle">에스티오</div>
                      </div>

                      <div class="synopsis">날 부른게... 당신입니까?</div>
                      <div class="followAndCreator">
                          <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                          <div class="follow">30.8만명</div>
                          <div class="contentSlash">|</div>
                          <div class="creator">탱커,뿡빠, 공든탑</div>
                      </div>
                  </div>
              </div>
              <div class="content">
                  <div class="contentImageWrap">
                      <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                      <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                          class="contentImageStatus waitFreeImageStatus">
                  </div>
                  <div class="contentDetailWrap">
                      <div class="status">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                          <div class="contantTitle">에스티오</div>
                      </div>

                      <div class="synopsis">날 부른게... 당신입니까?</div>
                      <div class="followAndCreator">
                          <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                          <div class="follow">30.8만명</div>
                          <div class="contentSlash">|</div>
                          <div class="creator">탱커,뿡빠, 공든탑</div>
                      </div>
                  </div>
              </div>
              <div class="content">
                  <div class="contentImageWrap">
                      <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                      <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                          class="contentImageStatus waitFreeImageStatus">
                  </div>
                  <div class="contentDetailWrap">
                      <div class="status">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                          <div class="contantTitle">에스티오</div>
                      </div>

                      <div class="synopsis">날 부른게... 당신입니까?</div>
                      <div class="followAndCreator">
                          <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                          <div class="follow">30.8만명</div>
                          <div class="contentSlash">|</div>
                          <div class="creator">탱커,뿡빠, 공든탑</div>
                      </div>
                  </div>
              </div>
              <div class="content">
                  <div class="contentImageWrap">
                      <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                      <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                          class="contentImageStatus waitFreeImageStatus">
                  </div>
                  <div class="contentDetailWrap">
                      <div class="status">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                          <div class="contantTitle">에스티오</div>
                      </div>

                      <div class="synopsis">날 부른게... 당신입니까?</div>
                      <div class="followAndCreator">
                          <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                          <div class="follow">30.8만명</div>
                          <div class="contentSlash">|</div>
                          <div class="creator">탱커,뿡빠, 공든탑</div>
                      </div>
                  </div>
              </div>
          </div>
      </div> -->
      <div class="slideAd">
          <div class="slideBtn">
              <img src="/FE/FE01-html/images/ic-paging-back-nor.svg" alt="">
          </div>
          <img src="/FE/FE01-html/images/pkJfplo35eZ6KPVd803O11.jpg" alt="" class="slideAdImg">
          <div class="slideBtn">
              <img src="/FE/FE01-html/images/ic-paging-next-nor.svg" alt="">
          </div>
      </div>
      <div class="weekdayTop">
          <div class="weekdayTopTop contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">요일 연제 TOP</div>
                  <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="weekdayTopWeekInfo" Id="weekdayTopweekInfoId">
              <div class="monday" onclick="changeBorderColor(this),changeDayAndContents(this)">월</div>
              <div class="tuesday" onclick="changeBorderColor(this),changeDayAndContents(this)">화</div>
              <div class="wendesday" onclick="changeBorderColor(this),changeDayAndContents(this)">수</div>
              <div class="thursday" onclick="changeBorderColor(this),changeDayAndContents(this)">목</div>
              <div class="friday" onclick="changeBorderColor(this),changeDayAndContents(this)">금</div>
              <div class="saturday" onclick="changeBorderColor(this),changeDayAndContents(this)">토</div>
              <div class="sunday" onclick="changeBorderColor(this),changeDayAndContents(this)">일</div>
              <div class="theEnd" onclick="changeBorderColor(this),changeDayAndContents(this)">완결</div>
          </div>
          <div class="weekdayContentWrap" id="weekdayContentWrapId">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="expectedWebtoon">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">기다리면 무료 웹툰</div>
                  <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="expectToonContentWrap">
              <div class="event expectToonContentWRapper">
                  <div class="eventSlide expectToonContent">
                      <div class="eventSlideInfo expectToonInfo">
                          <div class="eventTitle expectToonTitle">에스티오</div>
                          <div class="eventInfoWrap expectToonInfoWrap">
                              <div class="eventStatusWrap ">
                                  <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt=""
                                      class="eventStatus expectStatus">
                              </div>
                              <img src="/FE/FE01-html/images/ico-bigthum-wait.svg"
                                  class="clock expectToonClock"></img>
                              <div class="eventGenreInfo">웹툰</div>
                              <div class="eventSlash expectToonSlash">|</div>
                              <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt=""
                                  class="readCountEvent readCountExpectToon">
                              <div class="eventFollow">31.3만명</div>
                          </div>
                      </div>
                  </div>
                  <div class="imgCopyWrap expectToonCopyWrap">
                      <div class="imgCopy">확인하러 가기</div>
                  </div>
              </div>
              <div class="event expectToonContentWRapper">
                  <div class="eventSlide expectToonContent">
                      <div class="eventSlideInfo expectToonInfo">
                          <div class="eventTitle expectToonTitle">에스티오</div>
                          <div class="eventInfoWrap expectToonInfoWrap">
                              <div class="eventStatusWrap ">
                                  <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt=""
                                      class="eventStatus expectStatus">
                              </div>
                              <img src="/FE/FE01-html/images/ico-bigthum-wait.svg"
                                  class="clock expectToonClock"></img>
                              <div class="eventGenreInfo">웹툰</div>
                              <div class="eventSlash expectToonSlash">|</div>
                              <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt=""
                                  class="readCountEvent readCountExpectToon">
                              <div class="eventFollow">31.3만명</div>
                          </div>
                      </div>
                  </div>
                  <div class="imgCopyWrap expectToonCopyWrap">
                      <div class="imgCopy">확인하러 가기</div>
                  </div>
              </div>
          </div>
      </div>
      <div class="genreTop">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">로맨스 TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="toonContentWrap">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="genreTop">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">로판 TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="toonContentWrap">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="genreTop">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">드라마 TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="toonContentWrap">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="genreTop">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">BL/GL TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="toonContentWrap">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="genreTop">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">소년 TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="toonContentWrap">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="genreTop">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">액션 TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="toonContentWrap">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="dayRankingTop">
          <div class="contentTop dayRankingTopTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">일간랭킹 TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="dayRankingContentWrap">
              <div class="rankingNumWrap">
                  <div class="rankingNum">1</div>
              </div>
              <div class="dayRankingImageWrap">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="dayRankingDataWrap">
                  <div class="statusAndTitle">
                      <div class="dayRankingStatus">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                      </div>
                      <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
                  </div>
                  <div class="dayRankingInfo">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                      <span class="dayRankSlash">|</span>
                      <span class="dayRankwebtoonType">기다무웹툰</span>
                      <span class="dayRankSlash">|</span>
                      <span class="dayRankWebtoonType">로판</span>
                      <span class="creator">ASSAM,숭늉,지은향</span>
                  </div>
                  <div class="dayRankingUpdateDay">수 연재</div>
              </div>
          </div>
          <div class="dayRankingContentWrap">
              <div class="rankingNumWrap">
                  <div class="rankingNum">2</div>
              </div>
              <div class="dayRankingImageWrap">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="dayRankingDataWrap">
                  <div class="statusAndTitle">
                      <div class="dayRankingStatus">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                      </div>
                      <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
                  </div>
                  <div class="dayRankingInfo">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                      <span class="dayRankSlash">|</span>
                      <span class="dayRankwebtoonType">기다무웹툰</span>
                      <span class="dayRankSlash">|</span>
                      <span class="dayRankWebtoonType">로판</span>
                      <span class="creator">ASSAM,숭늉,지은향</span>
                  </div>
                  <div class="dayRankingUpdateDay">수 연재</div>
              </div>
          </div>
          <div class="dayRankingContentWrap">
              <div class="rankingNumWrap">
                  <div class="rankingNum">3</div>
              </div>
              <div class="dayRankingImageWrap">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="dayRankingDataWrap">
                  <div class="statusAndTitle">
                      <div class="dayRankingStatus">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                      </div>
                      <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
                  </div>
                  <div class="dayRankingInfo">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                      <span class="dayRankSlash">|</span>
                      <span class="dayRankwebtoonType">기다무웹툰</span>
                      <span class="dayRankSlash">|</span>
                      <span class="dayRankWebtoonType">로판</span>
                      <span class="creator">ASSAM,숭늉,지은향</span>
                  </div>
                  <div class="dayRankingUpdateDay">수 연재</div>
              </div>
          </div>
      </div>
      `,
  ],
  [
    "영화",
    `
  <div id="showChange"></div>
  <div class="webtoonGenreBar">
      <div class="genreHome" onclick="changeTabsColor(this),  changeEventSlideContents(this)">홈
      </div>
      <div class="weekday" onclick="changeTabsColor(this),  changeEventSlideContents(this)">요일연재
      </div>
      <div class="webtoon" onclick="changeTabsColor(this),  changeEventSlideContents(this)">웹소설
      </div>
      <div class="boy" onclick="changeTabsColor(this),  changeEventSlideContents(this)">판타지
      </div>
      <div class="drama" onclick="changeTabsColor(this),  changeEventSlideContents(this)">현판
      </div>
      <div class="romance" onclick="changeTabsColor(this),  changeEventSlideContents(this)">로맨스
      </div>
      <div class="romanticFantasy" onclick="changeTabsColor(this),  changeEventSlideContents(this)">로판
      </div>
      <div class="action" onclick="changeTabsColor(this),  changeEventSlideContents(this)">무협
      </div>
      <div class="fantasyDrama" onclick="changeTabsColor(this),  changeEventSlideContents(this)">판드
      </div>
      <div class="bl" onclick="changeTabsColor(this),  changeEventSlideContents(this)">BL
      </div>
      <div class="paperback" onclick="changeTabsColor(this),  changeEventSlideContents(this)">단행본
      </div>

  </div>
  <div class="event">
      <div class="eventSlide" id="eventSlideId">
          <div class="eventSlideInfo">
              <div class="slideMoveBtn">
                  <img src="/FE/FE01-html/images/previous button.svg" alt="">
                  <img src="/FE/FE01-html/images/next button.svg" alt="">
              </div>
              <div class="eventTitle">에스티오</div>
              <div class="eventInfoWrap">
                  <div class="eventLeft">
                      <div class="eventStatusWrap">
                          <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt="" class="eventStatus">
                      </div>
                      <img src="/FE/FE01-html/images/ico-bigthum-wait.svg" class="clock"></img>
                      <div class="eventGenreInfo">웹툰</div>
                      <div class="eventSlash">|</div>
                      <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt="" class="readCountEvent">
                      <div class="eventFollow">31.3만명</div>
                  </div>
                  <div class="eventRight">
                      <div class="eventPageNum">1</div>
                      <div class="eventPageTotalNum">/3</div>
                  </div>
              </div>
          </div>
      </div>
      <div class="imgCopyWrap">
          <div class="imgCopy">확인하러 가기</div>
      </div>
  </div>
  <div class="eventButtons">
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
          <div class="countNew">1위</div>
      </div>
  </div>
  <!-- <div class="waitForFreeWebtoon">
      <div class="waitFreeTop contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">기다리면 무료 웹툰</div>
              <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="contentWrap">
          <div class="content">
              <div class="contentImageWrap">
                  <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                      class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="contentDetailWrap">
                  <div class="status">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                      <div class="contantTitle">에스티오</div>
                  </div>

                  <div class="synopsis">날 부른게... 당신입니까?</div>
                  <div class="followAndCreator">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                      <div class="follow">30.8만명</div>
                      <div class="contentSlash">|</div>
                      <div class="creator">탱커,뿡빠, 공든탑</div>
                  </div>
              </div>
          </div>
          <div class="content">
              <div class="contentImageWrap">
                  <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                      class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="contentDetailWrap">
                  <div class="status">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                      <div class="contantTitle">에스티오</div>
                  </div>

                  <div class="synopsis">날 부른게... 당신입니까?</div>
                  <div class="followAndCreator">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                      <div class="follow">30.8만명</div>
                      <div class="contentSlash">|</div>
                      <div class="creator">탱커,뿡빠, 공든탑</div>
                  </div>
              </div>
          </div>
          <div class="content">
              <div class="contentImageWrap">
                  <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                      class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="contentDetailWrap">
                  <div class="status">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                      <div class="contantTitle">에스티오</div>
                  </div>

                  <div class="synopsis">날 부른게... 당신입니까?</div>
                  <div class="followAndCreator">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                      <div class="follow">30.8만명</div>
                      <div class="contentSlash">|</div>
                      <div class="creator">탱커,뿡빠, 공든탑</div>
                  </div>
              </div>
          </div>
          <div class="content">
              <div class="contentImageWrap">
                  <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                      class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="contentDetailWrap">
                  <div class="status">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                      <div class="contantTitle">에스티오</div>
                  </div>

                  <div class="synopsis">날 부른게... 당신입니까?</div>
                  <div class="followAndCreator">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                      <div class="follow">30.8만명</div>
                      <div class="contentSlash">|</div>
                      <div class="creator">탱커,뿡빠, 공든탑</div>
                  </div>
              </div>
          </div>
      </div>
  </div> -->
  <div class="slideAd">
      <div class="slideBtn">
          <img src="/FE/FE01-html/images/ic-paging-back-nor.svg" alt="">
      </div>
      <img src="/FE/FE01-html/images/pkJfplo35eZ6KPVd803O11.jpg" alt="" class="slideAdImg">
      <div class="slideBtn">
          <img src="/FE/FE01-html/images/ic-paging-next-nor.svg" alt="">
      </div>
  </div>
  <div class="weekdayTop">
      <div class="weekdayTopTop contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">요일 연제 TOP</div>
              <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="weekdayTopWeekInfo" Id="weekdayTopweekInfoId">
          <div class="monday" onclick="changeBorderColor(this),changeDayAndContents(this)">월</div>
          <div class="tuesday" onclick="changeBorderColor(this),changeDayAndContents(this)">화</div>
          <div class="wendesday" onclick="changeBorderColor(this),changeDayAndContents(this)">수</div>
          <div class="thursday" onclick="changeBorderColor(this),changeDayAndContents(this)">목</div>
          <div class="friday" onclick="changeBorderColor(this),changeDayAndContents(this)">금</div>
          <div class="saturday" onclick="changeBorderColor(this),changeDayAndContents(this)">토</div>
          <div class="sunday" onclick="changeBorderColor(this),changeDayAndContents(this)">일</div>
          <div class="theEnd" onclick="changeBorderColor(this),changeDayAndContents(this)">완결</div>
      </div>
      <div class="weekdayContentWrap" id="weekdayContentWrapId">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="expectedWebtoon">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">기다리면 무료 웹툰</div>
              <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="expectToonContentWrap">
          <div class="event expectToonContentWRapper">
              <div class="eventSlide expectToonContent">
                  <div class="eventSlideInfo expectToonInfo">
                      <div class="eventTitle expectToonTitle">에스티오</div>
                      <div class="eventInfoWrap expectToonInfoWrap">
                          <div class="eventStatusWrap ">
                              <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt=""
                                  class="eventStatus expectStatus">
                          </div>
                          <img src="/FE/FE01-html/images/ico-bigthum-wait.svg"
                              class="clock expectToonClock"></img>
                          <div class="eventGenreInfo">웹툰</div>
                          <div class="eventSlash expectToonSlash">|</div>
                          <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt=""
                              class="readCountEvent readCountExpectToon">
                          <div class="eventFollow">31.3만명</div>
                      </div>
                  </div>
              </div>
              <div class="imgCopyWrap expectToonCopyWrap">
                  <div class="imgCopy">확인하러 가기</div>
              </div>
          </div>
          <div class="event expectToonContentWRapper">
              <div class="eventSlide expectToonContent">
                  <div class="eventSlideInfo expectToonInfo">
                      <div class="eventTitle expectToonTitle">에스티오</div>
                      <div class="eventInfoWrap expectToonInfoWrap">
                          <div class="eventStatusWrap ">
                              <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt=""
                                  class="eventStatus expectStatus">
                          </div>
                          <img src="/FE/FE01-html/images/ico-bigthum-wait.svg"
                              class="clock expectToonClock"></img>
                          <div class="eventGenreInfo">웹툰</div>
                          <div class="eventSlash expectToonSlash">|</div>
                          <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt=""
                              class="readCountEvent readCountExpectToon">
                          <div class="eventFollow">31.3만명</div>
                      </div>
                  </div>
              </div>
              <div class="imgCopyWrap expectToonCopyWrap">
                  <div class="imgCopy">확인하러 가기</div>
              </div>
          </div>
      </div>
  </div>
  <div class="genreTop">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">로맨스 TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="toonContentWrap">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="genreTop">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">로판 TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="toonContentWrap">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="genreTop">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">드라마 TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="toonContentWrap">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="genreTop">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">BL/GL TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="toonContentWrap">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="genreTop">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">소년 TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="toonContentWrap">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="genreTop">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">액션 TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="toonContentWrap">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="dayRankingTop">
      <div class="contentTop dayRankingTopTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">일간랭킹 TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="dayRankingContentWrap">
          <div class="rankingNumWrap">
              <div class="rankingNum">1</div>
          </div>
          <div class="dayRankingImageWrap">
              <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
              <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
          </div>
          <div class="dayRankingDataWrap">
              <div class="statusAndTitle">
                  <div class="dayRankingStatus">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                  </div>
                  <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
              </div>
              <div class="dayRankingInfo">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
                  <span class="dayRankSlash">|</span>
                  <span class="dayRankwebtoonType">기다무웹툰</span>
                  <span class="dayRankSlash">|</span>
                  <span class="dayRankWebtoonType">로판</span>
                  <span class="creator">ASSAM,숭늉,지은향</span>
              </div>
              <div class="dayRankingUpdateDay">수 연재</div>
          </div>
      </div>
      <div class="dayRankingContentWrap">
          <div class="rankingNumWrap">
              <div class="rankingNum">2</div>
          </div>
          <div class="dayRankingImageWrap">
              <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
              <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
          </div>
          <div class="dayRankingDataWrap">
              <div class="statusAndTitle">
                  <div class="dayRankingStatus">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                  </div>
                  <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
              </div>
              <div class="dayRankingInfo">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
                  <span class="dayRankSlash">|</span>
                  <span class="dayRankwebtoonType">기다무웹툰</span>
                  <span class="dayRankSlash">|</span>
                  <span class="dayRankWebtoonType">로판</span>
                  <span class="creator">ASSAM,숭늉,지은향</span>
              </div>
              <div class="dayRankingUpdateDay">수 연재</div>
          </div>
      </div>
      <div class="dayRankingContentWrap">
          <div class="rankingNumWrap">
              <div class="rankingNum">3</div>
          </div>
          <div class="dayRankingImageWrap">
              <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
              <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
          </div>
          <div class="dayRankingDataWrap">
              <div class="statusAndTitle">
                  <div class="dayRankingStatus">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                  </div>
                  <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
              </div>
              <div class="dayRankingInfo">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
                  <span class="dayRankSlash">|</span>
                  <span class="dayRankwebtoonType">기다무웹툰</span>
                  <span class="dayRankSlash">|</span>
                  <span class="dayRankWebtoonType">로판</span>
                  <span class="creator">ASSAM,숭늉,지은향</span>
              </div>
              <div class="dayRankingUpdateDay">수 연재</div>
          </div>
      </div>
  </div>
  `,
  ],
  [
    "방송",
    `
      <div id="showChange"></div>
      <div class="webtoonGenreBar">
          <div class="genreHome" onclick="changeTabsColor(this),  changeEventSlideContents(this)">홈
          </div>
          <div class="weekday" onclick="changeTabsColor(this),  changeEventSlideContents(this)">요일연재
          </div>
          <div class="webtoon" onclick="changeTabsColor(this),  changeEventSlideContents(this)">웹소설
          </div>
          <div class="boy" onclick="changeTabsColor(this),  changeEventSlideContents(this)">판타지
          </div>
          <div class="drama" onclick="changeTabsColor(this),  changeEventSlideContents(this)">현판
          </div>
          <div class="romance" onclick="changeTabsColor(this),  changeEventSlideContents(this)">로맨스
          </div>
          <div class="romanticFantasy" onclick="changeTabsColor(this),  changeEventSlideContents(this)">로판
          </div>
          <div class="action" onclick="changeTabsColor(this),  changeEventSlideContents(this)">무협
          </div>
          <div class="fantasyDrama" onclick="changeTabsColor(this),  changeEventSlideContents(this)">판드
          </div>
          <div class="bl" onclick="changeTabsColor(this),  changeEventSlideContents(this)">BL
          </div>
          <div class="paperback" onclick="changeTabsColor(this),  changeEventSlideContents(this)">단행본
          </div>
    
      </div>
      <div class="event">
          <div class="eventSlide" id="eventSlideId">
              <div class="eventSlideInfo">
                  <div class="slideMoveBtn">
                      <img src="/FE/FE01-html/images/previous button.svg" alt="">
                      <img src="/FE/FE01-html/images/next button.svg" alt="">
                  </div>
                  <div class="eventTitle">에스티오</div>
                  <div class="eventInfoWrap">
                      <div class="eventLeft">
                          <div class="eventStatusWrap">
                              <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt="" class="eventStatus">
                          </div>
                          <img src="/FE/FE01-html/images/ico-bigthum-wait.svg" class="clock"></img>
                          <div class="eventGenreInfo">웹툰</div>
                          <div class="eventSlash">|</div>
                          <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt="" class="readCountEvent">
                          <div class="eventFollow">31.3만명</div>
                      </div>
                      <div class="eventRight">
                          <div class="eventPageNum">1</div>
                          <div class="eventPageTotalNum">/3</div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="imgCopyWrap">
              <div class="imgCopy">확인하러 가기</div>
          </div>
      </div>
      <div class="eventButtons">
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
              <div class="countNew">1위</div>
          </div>
      </div>
      <!-- <div class="waitForFreeWebtoon">
          <div class="waitFreeTop contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">기다리면 무료 웹툰</div>
                  <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="contentWrap">
              <div class="content">
                  <div class="contentImageWrap">
                      <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                      <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                          class="contentImageStatus waitFreeImageStatus">
                  </div>
                  <div class="contentDetailWrap">
                      <div class="status">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                          <div class="contantTitle">에스티오</div>
                      </div>
    
                      <div class="synopsis">날 부른게... 당신입니까?</div>
                      <div class="followAndCreator">
                          <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                          <div class="follow">30.8만명</div>
                          <div class="contentSlash">|</div>
                          <div class="creator">탱커,뿡빠, 공든탑</div>
                      </div>
                  </div>
              </div>
              <div class="content">
                  <div class="contentImageWrap">
                      <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                      <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                          class="contentImageStatus waitFreeImageStatus">
                  </div>
                  <div class="contentDetailWrap">
                      <div class="status">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                          <div class="contantTitle">에스티오</div>
                      </div>
    
                      <div class="synopsis">날 부른게... 당신입니까?</div>
                      <div class="followAndCreator">
                          <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                          <div class="follow">30.8만명</div>
                          <div class="contentSlash">|</div>
                          <div class="creator">탱커,뿡빠, 공든탑</div>
                      </div>
                  </div>
              </div>
              <div class="content">
                  <div class="contentImageWrap">
                      <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                      <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                          class="contentImageStatus waitFreeImageStatus">
                  </div>
                  <div class="contentDetailWrap">
                      <div class="status">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                          <div class="contantTitle">에스티오</div>
                      </div>
    
                      <div class="synopsis">날 부른게... 당신입니까?</div>
                      <div class="followAndCreator">
                          <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                          <div class="follow">30.8만명</div>
                          <div class="contentSlash">|</div>
                          <div class="creator">탱커,뿡빠, 공든탑</div>
                      </div>
                  </div>
              </div>
              <div class="content">
                  <div class="contentImageWrap">
                      <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                      <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                          class="contentImageStatus waitFreeImageStatus">
                  </div>
                  <div class="contentDetailWrap">
                      <div class="status">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                          <div class="contantTitle">에스티오</div>
                      </div>
    
                      <div class="synopsis">날 부른게... 당신입니까?</div>
                      <div class="followAndCreator">
                          <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                          <div class="follow">30.8만명</div>
                          <div class="contentSlash">|</div>
                          <div class="creator">탱커,뿡빠, 공든탑</div>
                      </div>
                  </div>
              </div>
          </div>
      </div> -->
      <div class="slideAd">
          <div class="slideBtn">
              <img src="/FE/FE01-html/images/ic-paging-back-nor.svg" alt="">
          </div>
          <img src="/FE/FE01-html/images/pkJfplo35eZ6KPVd803O11.jpg" alt="" class="slideAdImg">
          <div class="slideBtn">
              <img src="/FE/FE01-html/images/ic-paging-next-nor.svg" alt="">
          </div>
      </div>
      <div class="weekdayTop">
          <div class="weekdayTopTop contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">요일 연제 TOP</div>
                  <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="weekdayTopWeekInfo" Id="weekdayTopweekInfoId">
              <div class="monday" onclick="changeBorderColor(this),changeDayAndContents(this)">월</div>
              <div class="tuesday" onclick="changeBorderColor(this),changeDayAndContents(this)">화</div>
              <div class="wendesday" onclick="changeBorderColor(this),changeDayAndContents(this)">수</div>
              <div class="thursday" onclick="changeBorderColor(this),changeDayAndContents(this)">목</div>
              <div class="friday" onclick="changeBorderColor(this),changeDayAndContents(this)">금</div>
              <div class="saturday" onclick="changeBorderColor(this),changeDayAndContents(this)">토</div>
              <div class="sunday" onclick="changeBorderColor(this),changeDayAndContents(this)">일</div>
              <div class="theEnd" onclick="changeBorderColor(this),changeDayAndContents(this)">완결</div>
          </div>
          <div class="weekdayContentWrap" id="weekdayContentWrapId">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="expectedWebtoon">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">기다리면 무료 웹툰</div>
                  <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="expectToonContentWrap">
              <div class="event expectToonContentWRapper">
                  <div class="eventSlide expectToonContent">
                      <div class="eventSlideInfo expectToonInfo">
                          <div class="eventTitle expectToonTitle">에스티오</div>
                          <div class="eventInfoWrap expectToonInfoWrap">
                              <div class="eventStatusWrap ">
                                  <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt=""
                                      class="eventStatus expectStatus">
                              </div>
                              <img src="/FE/FE01-html/images/ico-bigthum-wait.svg"
                                  class="clock expectToonClock"></img>
                              <div class="eventGenreInfo">웹툰</div>
                              <div class="eventSlash expectToonSlash">|</div>
                              <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt=""
                                  class="readCountEvent readCountExpectToon">
                              <div class="eventFollow">31.3만명</div>
                          </div>
                      </div>
                  </div>
                  <div class="imgCopyWrap expectToonCopyWrap">
                      <div class="imgCopy">확인하러 가기</div>
                  </div>
              </div>
              <div class="event expectToonContentWRapper">
                  <div class="eventSlide expectToonContent">
                      <div class="eventSlideInfo expectToonInfo">
                          <div class="eventTitle expectToonTitle">에스티오</div>
                          <div class="eventInfoWrap expectToonInfoWrap">
                              <div class="eventStatusWrap ">
                                  <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt=""
                                      class="eventStatus expectStatus">
                              </div>
                              <img src="/FE/FE01-html/images/ico-bigthum-wait.svg"
                                  class="clock expectToonClock"></img>
                              <div class="eventGenreInfo">웹툰</div>
                              <div class="eventSlash expectToonSlash">|</div>
                              <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt=""
                                  class="readCountEvent readCountExpectToon">
                              <div class="eventFollow">31.3만명</div>
                          </div>
                      </div>
                  </div>
                  <div class="imgCopyWrap expectToonCopyWrap">
                      <div class="imgCopy">확인하러 가기</div>
                  </div>
              </div>
          </div>
      </div>
      <div class="genreTop">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">로맨스 TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="toonContentWrap">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="genreTop">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">로판 TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="toonContentWrap">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="genreTop">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">드라마 TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="toonContentWrap">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="genreTop">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">BL/GL TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="toonContentWrap">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="genreTop">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">소년 TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="toonContentWrap">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="genreTop">
          <div class="contentTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">액션 TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="toonContentWrap">
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
              <div class="toonContent">
                  <div class="toonContentTop">
                      <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
                  </div>
                  <div class="contentLank">
                      <div class="contentLankInfo">1위</div>
                      <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
                  </div>
                  <div class="contentTitle">웹툰 제목</div>
                  <div class="contentInfo">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                  </div>
              </div>
          </div>
      </div>
      <div class="dayRankingTop">
          <div class="contentTop dayRankingTopTop">
              <div class="copyAndCount">
                  <div class="waitFreeWebtoonCopy sectionTitle">일간랭킹 TOP</div>
              </div>
              <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
          </div>
          <div class="dayRankingContentWrap">
              <div class="rankingNumWrap">
                  <div class="rankingNum">1</div>
              </div>
              <div class="dayRankingImageWrap">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="dayRankingDataWrap">
                  <div class="statusAndTitle">
                      <div class="dayRankingStatus">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                      </div>
                      <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
                  </div>
                  <div class="dayRankingInfo">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                      <span class="dayRankSlash">|</span>
                      <span class="dayRankwebtoonType">기다무웹툰</span>
                      <span class="dayRankSlash">|</span>
                      <span class="dayRankWebtoonType">로판</span>
                      <span class="creator">ASSAM,숭늉,지은향</span>
                  </div>
                  <div class="dayRankingUpdateDay">수 연재</div>
              </div>
          </div>
          <div class="dayRankingContentWrap">
              <div class="rankingNumWrap">
                  <div class="rankingNum">2</div>
              </div>
              <div class="dayRankingImageWrap">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="dayRankingDataWrap">
                  <div class="statusAndTitle">
                      <div class="dayRankingStatus">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                      </div>
                      <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
                  </div>
                  <div class="dayRankingInfo">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                      <span class="dayRankSlash">|</span>
                      <span class="dayRankwebtoonType">기다무웹툰</span>
                      <span class="dayRankSlash">|</span>
                      <span class="dayRankWebtoonType">로판</span>
                      <span class="creator">ASSAM,숭늉,지은향</span>
                  </div>
                  <div class="dayRankingUpdateDay">수 연재</div>
              </div>
          </div>
          <div class="dayRankingContentWrap">
              <div class="rankingNumWrap">
                  <div class="rankingNum">3</div>
              </div>
              <div class="dayRankingImageWrap">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="dayRankingDataWrap">
                  <div class="statusAndTitle">
                      <div class="dayRankingStatus">
                          <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                      </div>
                      <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
                  </div>
                  <div class="dayRankingInfo">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                      <span class="contentFollow">28.8만명</span>
                      <span class="dayRankSlash">|</span>
                      <span class="dayRankwebtoonType">기다무웹툰</span>
                      <span class="dayRankSlash">|</span>
                      <span class="dayRankWebtoonType">로판</span>
                      <span class="creator">ASSAM,숭늉,지은향</span>
                  </div>
                  <div class="dayRankingUpdateDay">수 연재</div>
              </div>
          </div>
      </div>
      `,
  ],
  [
    "책",
    `
  <div id="showChange"></div>
  <div class="webtoonGenreBar">
      <div class="genreHome" onclick="changeTabsColor(this),  changeEventSlideContents(this)">홈
      </div>
      <div class="weekday" onclick="changeTabsColor(this),  changeEventSlideContents(this)">요일연재
      </div>
      <div class="webtoon" onclick="changeTabsColor(this),  changeEventSlideContents(this)">웹소설
      </div>
      <div class="boy" onclick="changeTabsColor(this),  changeEventSlideContents(this)">판타지
      </div>
      <div class="drama" onclick="changeTabsColor(this),  changeEventSlideContents(this)">현판
      </div>
      <div class="romance" onclick="changeTabsColor(this),  changeEventSlideContents(this)">로맨스
      </div>
      <div class="romanticFantasy" onclick="changeTabsColor(this),  changeEventSlideContents(this)">로판
      </div>
      <div class="action" onclick="changeTabsColor(this),  changeEventSlideContents(this)">무협
      </div>
      <div class="fantasyDrama" onclick="changeTabsColor(this),  changeEventSlideContents(this)">판드
      </div>
      <div class="bl" onclick="changeTabsColor(this),  changeEventSlideContents(this)">BL
      </div>
      <div class="paperback" onclick="changeTabsColor(this),  changeEventSlideContents(this)">단행본
      </div>

  </div>
  <div class="event">
      <div class="eventSlide" id="eventSlideId">
          <div class="eventSlideInfo">
              <div class="slideMoveBtn">
                  <img src="/FE/FE01-html/images/previous button.svg" alt="">
                  <img src="/FE/FE01-html/images/next button.svg" alt="">
              </div>
              <div class="eventTitle">에스티오</div>
              <div class="eventInfoWrap">
                  <div class="eventLeft">
                      <div class="eventStatusWrap">
                          <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt="" class="eventStatus">
                      </div>
                      <img src="/FE/FE01-html/images/ico-bigthum-wait.svg" class="clock"></img>
                      <div class="eventGenreInfo">웹툰</div>
                      <div class="eventSlash">|</div>
                      <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt="" class="readCountEvent">
                      <div class="eventFollow">31.3만명</div>
                  </div>
                  <div class="eventRight">
                      <div class="eventPageNum">1</div>
                      <div class="eventPageTotalNum">/3</div>
                  </div>
              </div>
          </div>
      </div>
      <div class="imgCopyWrap">
          <div class="imgCopy">확인하러 가기</div>
      </div>
  </div>
  <div class="eventButtons">
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
          <div class="countNew">1위</div>
      </div>
  </div>
  <!-- <div class="waitForFreeWebtoon">
      <div class="waitFreeTop contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">기다리면 무료 웹툰</div>
              <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="contentWrap">
          <div class="content">
              <div class="contentImageWrap">
                  <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                      class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="contentDetailWrap">
                  <div class="status">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                      <div class="contantTitle">에스티오</div>
                  </div>

                  <div class="synopsis">날 부른게... 당신입니까?</div>
                  <div class="followAndCreator">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                      <div class="follow">30.8만명</div>
                      <div class="contentSlash">|</div>
                      <div class="creator">탱커,뿡빠, 공든탑</div>
                  </div>
              </div>
          </div>
          <div class="content">
              <div class="contentImageWrap">
                  <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                      class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="contentDetailWrap">
                  <div class="status">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                      <div class="contantTitle">에스티오</div>
                  </div>

                  <div class="synopsis">날 부른게... 당신입니까?</div>
                  <div class="followAndCreator">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                      <div class="follow">30.8만명</div>
                      <div class="contentSlash">|</div>
                      <div class="creator">탱커,뿡빠, 공든탑</div>
                  </div>
              </div>
          </div>
          <div class="content">
              <div class="contentImageWrap">
                  <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                      class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="contentDetailWrap">
                  <div class="status">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                      <div class="contantTitle">에스티오</div>
                  </div>

                  <div class="synopsis">날 부른게... 당신입니까?</div>
                  <div class="followAndCreator">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                      <div class="follow">30.8만명</div>
                      <div class="contentSlash">|</div>
                      <div class="creator">탱커,뿡빠, 공든탑</div>
                  </div>
              </div>
          </div>
          <div class="content">
              <div class="contentImageWrap">
                  <img src="/FE/FE01-html/images/웹툰 _ 더 라이브7타 _ 21-24.png" class="contentImage">
                  <img src="/FE/FE01-html/images/기다리면 무료.png" alt=""
                      class="contentImageStatus waitFreeImageStatus">
              </div>
              <div class="contentDetailWrap">
                  <div class="status">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="statusIcon">
                      <div class="contantTitle">에스티오</div>
                  </div>

                  <div class="synopsis">날 부른게... 당신입니까?</div>
                  <div class="followAndCreator">
                      <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="readCount">
                      <div class="follow">30.8만명</div>
                      <div class="contentSlash">|</div>
                      <div class="creator">탱커,뿡빠, 공든탑</div>
                  </div>
              </div>
          </div>
      </div>
  </div> -->
  <div class="slideAd">
      <div class="slideBtn">
          <img src="/FE/FE01-html/images/ic-paging-back-nor.svg" alt="">
      </div>
      <img src="/FE/FE01-html/images/pkJfplo35eZ6KPVd803O11.jpg" alt="" class="slideAdImg">
      <div class="slideBtn">
          <img src="/FE/FE01-html/images/ic-paging-next-nor.svg" alt="">
      </div>
  </div>
  <div class="weekdayTop">
      <div class="weekdayTopTop contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">요일 연제 TOP</div>
              <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="weekdayTopWeekInfo" Id="weekdayTopweekInfoId">
          <div class="monday" onclick="changeBorderColor(this),changeDayAndContents(this)">월</div>
          <div class="tuesday" onclick="changeBorderColor(this),changeDayAndContents(this)">화</div>
          <div class="wendesday" onclick="changeBorderColor(this),changeDayAndContents(this)">수</div>
          <div class="thursday" onclick="changeBorderColor(this),changeDayAndContents(this)">목</div>
          <div class="friday" onclick="changeBorderColor(this),changeDayAndContents(this)">금</div>
          <div class="saturday" onclick="changeBorderColor(this),changeDayAndContents(this)">토</div>
          <div class="sunday" onclick="changeBorderColor(this),changeDayAndContents(this)">일</div>
          <div class="theEnd" onclick="changeBorderColor(this),changeDayAndContents(this)">완결</div>
      </div>
      <div class="weekdayContentWrap" id="weekdayContentWrapId">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="expectedWebtoon">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">기다리면 무료 웹툰</div>
              <div class="countwaitFreeWebtoon sectionCount">(3,526)</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="expectToonContentWrap">
          <div class="event expectToonContentWRapper">
              <div class="eventSlide expectToonContent">
                  <div class="eventSlideInfo expectToonInfo">
                      <div class="eventTitle expectToonTitle">에스티오</div>
                      <div class="eventInfoWrap expectToonInfoWrap">
                          <div class="eventStatusWrap ">
                              <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt=""
                                  class="eventStatus expectStatus">
                          </div>
                          <img src="/FE/FE01-html/images/ico-bigthum-wait.svg"
                              class="clock expectToonClock"></img>
                          <div class="eventGenreInfo">웹툰</div>
                          <div class="eventSlash expectToonSlash">|</div>
                          <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt=""
                              class="readCountEvent readCountExpectToon">
                          <div class="eventFollow">31.3만명</div>
                      </div>
                  </div>
              </div>
              <div class="imgCopyWrap expectToonCopyWrap">
                  <div class="imgCopy">확인하러 가기</div>
              </div>
          </div>
          <div class="event expectToonContentWRapper">
              <div class="eventSlide expectToonContent">
                  <div class="eventSlideInfo expectToonInfo">
                      <div class="eventTitle expectToonTitle">에스티오</div>
                      <div class="eventInfoWrap expectToonInfoWrap">
                          <div class="eventStatusWrap ">
                              <img src="/FE/FE01-html/images/badge-bigthum-event.svg" alt=""
                                  class="eventStatus expectStatus">
                          </div>
                          <img src="/FE/FE01-html/images/ico-bigthum-wait.svg"
                              class="clock expectToonClock"></img>
                          <div class="eventGenreInfo">웹툰</div>
                          <div class="eventSlash expectToonSlash">|</div>
                          <img src="/FE/FE01-html/images/ico-bigthum-person.svg" alt=""
                              class="readCountEvent readCountExpectToon">
                          <div class="eventFollow">31.3만명</div>
                      </div>
                  </div>
              </div>
              <div class="imgCopyWrap expectToonCopyWrap">
                  <div class="imgCopy">확인하러 가기</div>
              </div>
          </div>
      </div>
  </div>
  <div class="genreTop">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">로맨스 TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="toonContentWrap">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="genreTop">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">로판 TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="toonContentWrap">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="genreTop">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">드라마 TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="toonContentWrap">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="genreTop">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">BL/GL TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="toonContentWrap">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="genreTop">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">소년 TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="toonContentWrap">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="genreTop">
      <div class="contentTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">액션 TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="toonContentWrap">
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
          <div class="toonContent">
              <div class="toonContentTop">
                  <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="contentImage">
              </div>
              <div class="contentLank">
                  <div class="contentLankInfo">1위</div>
                  <img src="/FE/FE01-html/images/bmbadge_waitfree.svg" class="contentClock"></img>
              </div>
              <div class="contentTitle">웹툰 제목</div>
              <div class="contentInfo">
                  <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="contentStatus">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
              </div>
          </div>
      </div>
  </div>
  <div class="dayRankingTop">
      <div class="contentTop dayRankingTopTop">
          <div class="copyAndCount">
              <div class="waitFreeWebtoonCopy sectionTitle">일간랭킹 TOP</div>
          </div>
          <a href="https://page.kakao.com/main?categoryUid=10&subCategoryUid=1001" class="moreLink">더보기 ></a>
      </div>
      <div class="dayRankingContentWrap">
          <div class="rankingNumWrap">
              <div class="rankingNum">1</div>
          </div>
          <div class="dayRankingImageWrap">
              <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
              <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
          </div>
          <div class="dayRankingDataWrap">
              <div class="statusAndTitle">
                  <div class="dayRankingStatus">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                  </div>
                  <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
              </div>
              <div class="dayRankingInfo">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
                  <span class="dayRankSlash">|</span>
                  <span class="dayRankwebtoonType">기다무웹툰</span>
                  <span class="dayRankSlash">|</span>
                  <span class="dayRankWebtoonType">로판</span>
                  <span class="creator">ASSAM,숭늉,지은향</span>
              </div>
              <div class="dayRankingUpdateDay">수 연재</div>
          </div>
      </div>
      <div class="dayRankingContentWrap">
          <div class="rankingNumWrap">
              <div class="rankingNum">2</div>
          </div>
          <div class="dayRankingImageWrap">
              <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
              <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
          </div>
          <div class="dayRankingDataWrap">
              <div class="statusAndTitle">
                  <div class="dayRankingStatus">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                  </div>
                  <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
              </div>
              <div class="dayRankingInfo">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
                  <span class="dayRankSlash">|</span>
                  <span class="dayRankwebtoonType">기다무웹툰</span>
                  <span class="dayRankSlash">|</span>
                  <span class="dayRankWebtoonType">로판</span>
                  <span class="creator">ASSAM,숭늉,지은향</span>
              </div>
              <div class="dayRankingUpdateDay">수 연재</div>
          </div>
      </div>
      <div class="dayRankingContentWrap">
          <div class="rankingNumWrap">
              <div class="rankingNum">3</div>
          </div>
          <div class="dayRankingImageWrap">
              <img src="/FE/FE01-html/images/궁귀검신.png" alt="" class="dayRankingImage">
              <img src="/FE/FE01-html/images/기다리면 무료.png" alt="" class="contentImageStatus waitFreeImageStatus">
          </div>
          <div class="dayRankingDataWrap">
              <div class="statusAndTitle">
                  <div class="dayRankingStatus">
                      <img src="/FE/FE01-html/images/새 작품.svg" alt="" class="dayRankingStatus">
                  </div>
                  <div class="dayRankingTitle">흑막을 버리는 데 실패했다</div>
              </div>
              <div class="dayRankingInfo">
                  <img src="/FE/FE01-html/images/icon_read_count.png" alt="" class="contentCount">
                  <span class="contentFollow">28.8만명</span>
                  <span class="dayRankSlash">|</span>
                  <span class="dayRankwebtoonType">기다무웹툰</span>
                  <span class="dayRankSlash">|</span>
                  <span class="dayRankWebtoonType">로판</span>
                  <span class="creator">ASSAM,숭늉,지은향</span>
              </div>
              <div class="dayRankingUpdateDay">수 연재</div>
          </div>
      </div>
  </div>
  `,
  ],
];
function changeTabsColor(e) {
  const Tabs = e.parentNode.childNodes;
  for (let i = 1; i < Tabs.length; i += 2) {
    const tab = Tabs[i];
    tab.style.borderBottom = "none";
    tab.style.color = "#999";
  }
  e.style.color = `black`;
}
function removeContents(tag) {
  while (tag.hasChildNodes()) {
    tag.removeChild(tag.firstChild);
  }
}
function changeBorderColor(e) {
  changeTabsColor(e);
  e.style.borderBottom = "3px solid #ffd200";
}
function changeDayAndContents(e) {
  changeBorderColor(e);
  const dayInfo = e.innerText;
  const weekdayContentWrap = document.querySelector("#weekdayContentWrapId");
  removeContents(weekdayContentWrap);
  weekdayContents.map((day) => {
    if (dayInfo === day[0]) {
      let temp = "";
      for (let i = 0; i < 10; i++) {
        temp += `${day[1]}`;
      }
      weekdayContentWrap.insertAdjacentHTML("afterbegin", temp);
    }
  });
}
function changeEventSlideContents(e) {
  const genre = e.innerText;
  const slide = document.querySelector("#eventSlideId");
  eventContents.map((content) => {
    if (genre === content[0]) {
      const imageUrl = content[1];
      slide.style.backgroundImage = `url('${imageUrl}')`;
    }
  });
}

function changeSectionContents(e) {
  const navGenre = e.innerText;
  const sections = document.querySelector("#sectionId");
  removeContents(sections);
  let temp;
  console.log(navGenre);
  sectionContents.map((section) => {
    if (navGenre === section[0]) {
      console.log(navGenre, section[0]);
      temp = section[1];
    }
  });
  sections.insertAdjacentHTML("afterbegin", temp);
  const change = document.querySelector("#showChange");
  change.innerText = `${navGenre}로 내용 바뀜`;
}
