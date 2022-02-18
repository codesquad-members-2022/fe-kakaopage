const RecommendEvent = () => {
  return `<li class="mainBox main__contents">
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

export default RecommendEvent;
