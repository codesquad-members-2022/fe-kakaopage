const CardInfoRow = ({ title }) => {
  return `
    <li class="dateContent">
    <div class="contentRow">
      <div class="dateRank">1</div>
      <div class="contentImgBox">
        <span class="content-waitFreeIcon">
          <i class="fas fa-clock"></i>
        </span>
        <img
          src="./images/contents/흑막을버리는데실패했다.jpeg"
          alt="${title}"
        />
      </div>
      <div class="contentInfo">
        <div class="info__titleInfo">
          <span class="info__title-status">N</span>
          <span class="info__title-age info-age">15</span>
          <span class="info__title"
            >${title}</span
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
  </li>`;
};

export default CardInfoRow;
