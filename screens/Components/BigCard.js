/**
 * use in MainBanner, BigCardList
 */

const BigCard = ({ title }) => {
  return `            <li class="bigCard">
    <div class="main__mainBanner">
      <div class="banner__imgBox">
        <img src="./images/contents/캐슬.jpeg" alt=${title} />
        <div class="imgBox__info">
          <div class="infoTitle">
            <span>${title}</span>
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
  </li>`;
};

export default BigCard;
