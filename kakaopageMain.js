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

function changeBorderColor(e) {
  const Tabs = e.parentNode.childNodes;
  for (let i = 1; i < Tabs.length; i += 2) {
    const tab = Tabs[i];
    tab.style.borderBottom = "none";
  }
  e.style.borderBottom = "3px solid #ffd200";
}
function changeDayAndContents(e) {
  const dayInfo = e.innerText;
  const weekdayContentWrap = document.querySelector("#weekdayContentWrapId");
  while (weekdayContentWrap.hasChildNodes()) {
    weekdayContentWrap.removeChild(weekdayContentWrap.firstChild);
  }
  weekdayContents.map((day) => {
    if (dayInfo === day[0]) {
      console.log(`${dayInfo}, ${day[0]}`);
      let temp = "";
      for (let i = 0; i < 10; i++) {
        temp += `${day[1]}`;
      }

      weekdayContentWrap.insertAdjacentHTML("afterbegin", temp);
    }
  });
}
