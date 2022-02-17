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
function changeTabsColor(e) {
  const Tabs = e.parentNode.childNodes;
  for (let i = 1; i < Tabs.length; i += 2) {
    const tab = Tabs[i];
    tab.style.borderBottom = "none";
    tab.style.color = "#999";
  }
  e.style.color = `black`;
}

function changeBorderColor(e) {
  changeTabsColor(e);
  e.style.borderBottom = "3px solid #ffd200";
}
function changeDayAndContents(e) {
  changeBorderColor(e);
  const dayInfo = e.innerText;
  const weekdayContentWrap = document.querySelector("#weekdayContentWrapId");
  while (weekdayContentWrap.hasChildNodes()) {
    weekdayContentWrap.removeChild(weekdayContentWrap.firstChild);
  }
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
      slide.style.backgroundImage = `url('${imageUrl}')`; // 안된다...
    }
  });
}
