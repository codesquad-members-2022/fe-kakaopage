import { createImageCard } from "../../../components/createImageCard.js";
import { weeklyWebtoonImageCardInfo } from "../../../data/imageCard-data.js";

const weeklyIdxChanger = {
  mon: 0,
  tue: 1,
  wed: 2,
  thu: 3,
  fri: 4,
  sat: 5,
  sun: 6,
};

const webtoonWeeklyMain = document.createElement("div");
webtoonWeeklyMain.className = "webtoon-weekly-main";
const webtoonWeeklyContent = document.createElement("div");
webtoonWeeklyContent.className = "webtoon-weekly-content";

const webtoonWeeklyNav = `<nav class="nav-box webtoon-weekly-content__nav">
<ul class="nav-box__list weekly-webtoon-ul">
  <li class="nav-box__text weekly-nav">월</li>
  <li class="nav-box__text weekly-nav">화</li>
  <li class="nav-box__text weekly-nav selected-text">수</li>
  <div
    class="circle webtoon-weekly-content__nav__circile-wed"
  ></div>
  <li class="nav-box__text weekly-nav">목</li>
  <li class="nav-box__text weekly-nav">금</li>
  <li class="nav-box__text weekly-nav">토</li>
  <li class="nav-box__text weekly-nav">일</li>
</ul>
</nav>`;

const webtoonWeeklyCommentNav = `
  <div class="nav-box">
    <div class="nav-box__list webtoon-weekly-content__menu">
      <div class="webtoon-weekly-content__menu__left">
        <span class="webtoon-weekly-content__menu__text selected-text">
          전체
        </span>
        <span class="webtoon-weekly-content__menu__text">|</span>
        <span class="webtoon-weekly-content__menu__text">웹툰</span>
        <span class="webtoon-weekly-content__menu__text">|</span>
        <div class="webtoon-weekly-content__menu__webtoonbox">
          <img src="./image/bmbadge_waitfree.svg" alt="" />
          <span class="webtoon-weekly-content__menu__text">웹툰</span>
        </div>
      </div>
      <div class="webtoon-weekly-content__menu__right">
        <div class="webtoon-weekly-content__menu__sortingbox">
          <span class="webtoon-weekly-content__menu__text">전체 (169)</span>
          <img src="./image/ico_sorting_arrow.svg" alt="ico_sorting_arrow" />
        </div>
      </div>
    </div>
  </div>
`;

const webtoonWeeklyWebtoon = document.createElement("div");
webtoonWeeklyWebtoon.className = "webtoon-weekly-content__webtoon-weekly";
const webtoonWeeklyAdvertise = `<img
class="webtoon-weekly__advertise"
src="./image/kakaopage_download_link.png"
alt=""
/>`;

// main 안에 content, advertise 순서대로 배치

webtoonWeeklyMain.appendChild(webtoonWeeklyContent);
webtoonWeeklyMain.insertAdjacentHTML("beforeend", webtoonWeeklyAdvertise);

// weeklycontent 안에는 어떻게 만들지??
// weeklycontent 안에 nav, nav-box, webtoonWeeklyWebtoon 배치
webtoonWeeklyContent.insertAdjacentHTML("beforeend", webtoonWeeklyNav);
webtoonWeeklyContent.insertAdjacentHTML("beforeend", webtoonWeeklyCommentNav);
webtoonWeeklyContent.appendChild(webtoonWeeklyWebtoon);

// webWeeklyWebtoon 밑에 이미지 카드 동적 생성해서 넣기 (요일 입력받아서 랜더해야지?)
// 요일 어떻게 입력받지?? 오늘의 요일을 찾을까?? 아니야 입력받은 요일대로 얘가 렌더하는 방향으로 진행하자
// 요일 입력 받기, create해줘야 하는 정보 입력받기 (월~일 전체 요일 있는거로) -> 걔를 필요 요일에 맞게 (월 : 0 ~ 방식) createimage(정보[요일]) 해줘서 태그 생성 -> 생성된 태그들을 전부 순서대로 webtoonWeeklyWebtoon 밑에 어펜드 해주기
// 마지막으로 제일 큰애를 html에 넣어주기 (webWeeklyMain 을 html main 안에 넣어주자)
const now = new Date();
let nowDay = now.getDay() - 1;
if (nowDay === -1) {
  nowDay = 6;
}

const createHTMLImageCard = (dayOfTheWeek) => {
  weeklyWebtoonImageCardInfo[dayOfTheWeek]["card"].forEach((imageCardInfo) => {
    webtoonWeeklyWebtoon.insertAdjacentHTML(
      "beforeend",
      createImageCard(imageCardInfo)
    );
  });

  return webtoonWeeklyMain;
};
// const renderWeekly = createHTMLImageCard(nowDay);
// console.log(renderWeekly);
createHTMLImageCard(nowDay);
export { webtoonWeeklyContent };
