const MainBanner = () => {
  return `<li class="mainBox main__mainBanner">
    <div class="banner__imgBox">
      <img src="./images/mainBanner/sambong.jpeg" />
      <div class="imgBox__info">
        <div class="infoTitle">
          <span></span>
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
  </li>`;
};

export default MainBanner;
