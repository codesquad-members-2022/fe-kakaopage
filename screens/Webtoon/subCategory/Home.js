const Home = () => {
  return `<li class="mainBox main__mainBanner">
  <div class="banner__imgBox">
    <img src="./images/mainBanner/sambong.jpeg" />
    <div class="imgBox__info">
      <div class="infoTitle">
        <span>삼봉이발소</span>
      </div>
      <div class="infoBody">
        <span class="info-event">UP</span>
        <span class="info-category">
          <i class="fas fa-clock"></i> 웹툰
        </span>
        <span class="span-bar"> | </span>
        <span class="info-users">
          <i class="fas fa-user"></i> 12.5만명
        </span>
      </div>
    </div>
    <div class="imgBox__order">
      <span class="orderNum">1</span>
      <span class="orderBar">/</span>
      <span class="orderNum">3</span>
    </div>
  </div>
  <div class="banner__message">
    <span>삼봉이발소의 하일권이 돌아왔다.</span>
  </div>
</li>
<li class="mainBox main__navDetail">
  <div class="nav_detailBox">
    <div class="detailBox border-top-left">
      <span class="detailName">오늘 UP</span>
      <span class="detailNum">208</span>
    </div>
    <div class="detailBox">
      <span class="detailName">오늘 신작</span>
      <span class="detailNum">4</span>
    </div>
    <div class="detailBox border-top-right">
      <span class="detailName">오리지널</span>
      <span class="detailNum">2,328</span>
    </div>
  </div>
  <div class="nav_detailBox">
    <div class="detailBox border-bottom-left">
      <span class="detailName">완결까지 정주행</span>
    </div>
    <div class="detailBox">
      <span class="detailName">독립운동가 웹툰</span>
    </div>
    <div class="detailBox border-bottom-right">
      <span class="detailName">오늘 랭킹</span>
      <span class="detailNum">1위</span>
    </div>
  </div>
</li>
<li class="mainBox main__subBanner">
  <div class="arrow">
    <span><</span>
  </div>
  <img
    class="subImg"
    src="./images/subBanner/subOne.png"
    alt="8클래스 마법사의 회귀"
  />
  <div class="arrow">
    <span>></span>
  </div>
</li>
<li class="mainBox main__contents">
  <div class="contents">
    <div class="contents__header">
      <div class="contents__title">
        <span>요일 연재 TOP</span>
        <span class="titleNum">(1,618)</span>
      </div>
      <div class="contents__more">
        <span>더보기></span>
      </div>
    </div>
    <div class="contents__body">
      <ul class="contents__daysNav">
        <li data-days="mon" data-series-end="false">월</li>
        <li data-days="tue" data-series-end="false">화</li>
        <li data-days="wed" data-series-end="false">수</li>
        <li data-days="thu" data-series-end="false">목</li>
        <li data-days="fri" data-series-end="false">금</li>
        <li data-days="sat" data-series-end="false">토</li>
        <li data-days="sun" data-series-end="false">일</li>
        <li data-series-end="true">완결</li>
      </ul>
      <ul class="contentsCard">
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/도굴왕.png"
              alt="도굴왕"
            />
            <div class="imgInfo">
              <span class="rank">1위</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>도굴왕</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>200.8만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/빈껍데기.png"
              alt="빈껍데기 공작부인"
            />
            <div class="imgInfo">
              <span class="rank">2위</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>빈껍데기 공작부인</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>146.7만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/다정한그대를지키는방법.png"
              alt="다정한 그대를 지키는 방법"
            />
            <div class="imgInfo">
              <span class="rank">3위</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>다정한 그대를 지키는 방법</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>88.1만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/로열셰프.png"
              alt="로열 셰프 영애님"
            />
            <div class="imgInfo">
              <span class="rank">4위</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>로열 셰프 영애님</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>90.3만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/궁귀검신.png"
              alt="궁귀검신"
            />
            <div class="imgInfo">
              <span class="rank">5위</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>궁귀검신</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-age">15</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>50.7만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/악녀는두번산다.png"
              alt="악녀는 두 번 산다"
            />
            <div class="imgInfo">
              <span class="rank">✭ 10.0</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>악녀는 두 번 산다</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>104.6만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/용사의전여친.png"
              alt="용사의 전 여친입니다"
            />
            <div class="imgInfo">
              <span class="rank">✭ 10.0</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>용사의 전 여친입니다</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>77.9만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/던전리셋.png"
              alt="던전 리셋"
            />
            <div class="imgInfo">
              <span class="rank">✭ 9.9</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>던전 리셋</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>70.2만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/화타가된외과의사.png"
              alt="화타가 된 외과의사"
            />
            <div class="imgInfo">
              <span class="rank">✭ 9.8</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>화타가 된 외과의사</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>27.4만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/막내황녀님.png"
              alt="막내 황녀님"
            />
            <div class="imgInfo">
              <span class="rank">✭ 10.0</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>막내 황녀님</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>115.7만명</span>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</li>
<li class="mainBox main__contents">
  <div class="contents">
    <div class="contents__header">
      <div class="contents__title">
        <span>기대 신작 TOP</span>
      </div>
      <div class="contents__more">
        <span>더보기 ></span>
      </div>
    </div>
    <div class="contents__body">
      <ul class="contentsBigCard">
        <li class="bigCard">
          <div class="main__mainBanner">
            <div class="banner__imgBox">
              <img src="./images/contents/화산전생.png" />
              <div class="imgBox__info">
                <div class="infoTitle">
                  <span>화산전생</span>
                </div>
                <div class="infoBody">
                  <span class="info-event">이벤트</span>
                  <span class="info-category">
                    <i class="fas fa-clock"></i> 웹툰
                  </span>
                  <span class="span-bar"> | </span>
                  <span class="info-users">
                    <i class="fas fa-user"></i> 183.1만명
                  </span>
                </div>
              </div>
            </div>
            <div class="banner__message">
              <span>나도 그들처럼 영웅이 되고싶었다.</span>
            </div>
          </div>
        </li>
        <li class="bigCard">
          <div class="main__mainBanner">
            <div class="banner__imgBox">
              <img src="./images/contents/캐슬.jpeg" />
              <div class="imgBox__info">
                <div class="infoTitle">
                  <span>캐슬</span>
                </div>
                <div class="infoBody">
                  <span class="info-event">UP</span>
                  <span class="info-category">
                    <i class="fas fa-clock"></i> 웹툰
                  </span>
                  <span class="span-bar"> | </span>
                  <span class="info-users">
                    <i class="fas fa-user"></i> 124.5만명
                  </span>
                </div>
              </div>
            </div>
            <div class="banner__message">
              <span>복수의 칼을 갈아온 킬러</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</li>
<li class="mainBox main__contents">
  <div class="contents">
    <div class="contents__header">
      <div class="contents__title">
        <span>로맨스 TOP</span>
      </div>
      <div class="contents__more">
        <span>더보기></span>
      </div>
    </div>
    <div class="contents__body">
      <ul class="contentsCard">
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/익애봉황애사.png"
              alt="익애 ~봉황애사~"
            />
            <div class="imgInfo">
              <span class="rank">✭ 10.0</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>익애 ~봉황애사~</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>49.1만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/상사가나를덕질한다.png"
              alt="상사가 나를 덕질한다"
            />
            <div class="imgInfo">
              <span class="rank">✭ 9.8</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>상사가 나를 덕질한다</span>
          </div>
          <div class="card__info">
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>24만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/쓰라는글은안쓰고.png"
              alt="쓰라는 글은 안쓰고"
            />
            <div class="imgInfo">
              <span class="rank">✭ 9.9</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>쓰라는 글은 안쓰고</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>22.1만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/열세번째밤.png"
              alt="열세 번째 밤"
            />
            <div class="imgInfo">
              <span class="rank">✭ 9.8</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>열세 번째 밤</span>
          </div>
          <div class="card__info">
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>43.3만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/이봄을갖고싶다.png"
              alt="이 봄을 갖고싶다"
            />
            <div class="imgInfo">
              <span class="rank">✭ 9.6</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>이 봄을 갖고 싶다</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>67만명</span>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</li>
<li class="mainBox main__contents">
  <div class="contents">
    <div class="contents__header">
      <div class="contents__title">
        <span>드라마 TOP</span>
      </div>
      <div class="contents__more">
        <span>더보기></span>
      </div>
    </div>
    <div class="contents__body">
      <ul class="contentsCard">
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/에스티오.png"
              alt="에스티오"
            />
            <div class="imgInfo">
              <span class="rank">✭ 9.9</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>에스티오</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>30.8만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/인간시장.png"
              alt="인간시장"
            />
            <div class="imgInfo">
              <span class="rank">✭ 9.9</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>인간시장</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>21.7만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/로드오브머니.png"
              alt="로드 오브 머니"
            />
            <div class="imgInfo">
              <span class="rank">✭ 9.9</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>로드 오브 머니</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-age">15</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>48.7만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/돈빵.png"
              alt="돈빵"
            />
            <div class="imgInfo">
              <span class="rank">✭ 9.4</span>
              <span><i class="fas fa-clock"></i></span>
            </div>
          </div>
          <div class="card__title">
            <span>돈빵</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-age">15</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>7.5만명</span>
            </span>
          </div>
        </li>
        <li class="card">
          <div class="card__imgBox">
            <img
              class="cardImg"
              src="./images/contents/프로야구생존기.png"
              alt="프로야구생존기"
            />
            <div class="imgInfo">
              <span class="rank">✭ 9.9</span>
              <span>웹툰</span>
            </div>
          </div>
          <div class="card__title">
            <span>프로야구생존기</span>
          </div>
          <div class="card__info">
            <span class="info-status">UP</span>
            <span class="info-user">
              <i class="fas fa-user"></i>
              <span>17.7만명</span>
            </span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</li>
<li class="mainBox main__contents">
  <div class="contents">
    <div class="contents__header">
      <div class="contents__title">
        <span>일간 랭킹 TOP</span>
      </div>
      <div class="contents__more">
        <span>더보기></span>
      </div>
    </div>
    <div class="contents__body">
      <ul class="contents__date">
        <li class="dateContent">
          <div class="contentRow">
            <div class="dateRank">1</div>
            <div class="contentImgBox">
              <span class="content-waitFreeIcon">
                <i class="fas fa-clock"></i>
              </span>
              <img
                src="./images/contents/흑막을버리는데실패했다.jpeg"
                alt="흑막을 버리는 데 실패했다"
              />
            </div>
            <div class="contentInfo">
              <div class="info__titleInfo">
                <span class="info__title-status">N</span>
                <span class="info__title-age info-age">15</span>
                <span class="info__title"
                  >흑막을 버리는 데 실패했다</span
                >
              </div>
              <div class="infoBody">
                <i class="fas fa-user"></i>
                <span>28.1만명</span>
                <span class="span-bar">|</span>
                <span>기다무웹툰</span>
                <span class="span-bar">|</span>
                <span>로판</span>
                <span class="span-bar">|</span>
                <span>ASSAM,쓩늉,지은향</span>
              </div>
              <div class="info-footer">
                <span>수 연재</span>
              </div>
            </div>
          </div>
        </li>
        <li class="dateContent">
          <div class="contentRow">
            <div class="dateRank">2</div>
            <div class="contentImgBox">
              <span class="content-waitFreeIcon">
                <i class="fas fa-clock"></i>
              </span>
              <img
                src="./images/contents/이번생은가주가되겠습니다.jpeg"
                alt="이번 생은 가주가 되겠습니다"
              />
            </div>
            <div class="contentInfo">
              <div class="info__titleInfo">
                <span class="info__title"
                  >이번 생은 가주가 되겠습니다</span
                >
              </div>
              <div class="infoBody">
                <i class="fas fa-user"></i>
                <span>122.6만명</span>
                <span class="span-bar">|</span>
                <span>기다무웹툰</span>
                <span class="span-bar">|</span>
                <span>로판</span>
                <span class="span-bar">|</span>
                <span>앤드스튜디오,몬,앤트스튜디오,김로아</span>
              </div>
              <div class="info-footer">
                <span>월 연재</span>
              </div>
            </div>
          </div>
        </li>
        <li class="dateContent">
          <div class="contentRow">
            <div class="dateRank">3</div>
            <div class="contentImgBox">
              <span class="content-waitFreeIcon">
                <i class="fas fa-clock"></i>
              </span>
              <img
                src="./images/contents/남주를주웠더니남편이생겨버렸다.jpeg"
                alt="남주를 주웠더니 남편이 생겨버렸다"
              />
            </div>
            <div class="contentInfo">
              <div class="info__titleInfo">
                <span class="info__title"
                  >남주를 주웠더니 남편이 생겨버렸다</span
                >
              </div>
              <div class="infoBody">
                <i class="fas fa-user"></i>
                <span>50.7만명</span>
                <span class="span-bar">|</span>
                <span>기다무웹툰</span>
                <span class="span-bar">|</span>
                <span>로판</span>
                <span class="span-bar">|</span>
                <span>마리씨,서촌,초암</span>
              </div>
              <div class="info-footer">
                <span>월 연재</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</li>
<li class="mainBox main__contents">
  <div class="contents">
    <div class="contents__header">
      <div class="contents__title">
        <span>추천 이벤트</span>
      </div>
      <div class="contents__more">
        <span>더보기></span>
      </div>
    </div>
    <div class="contents__body main__mainBanner">
      <div class="banner__imgBox">
        <img src="./images/contents/필부필부.png" alt="필부필부" />
        <div class="imgBox__order">
          <span class="orderArrow"><</span>
          <span class="orderNum">1</span>
          <span class="orderBar">/</span>
          <span class="orderNum">8</span>
          <span class="orderArrow">></span>
        </div>
      </div>
    </div>
  </div>
</li>`;
};

export default Home;
