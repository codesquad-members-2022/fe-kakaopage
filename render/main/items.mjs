const makeCardTypeZero = (data) => {
  let items = "";
  data.forEach((val) => {
    items += `
      <a class="itemBox" href="#">
        <div class="item">
          <img class="itemImg" src="${val.img}" />
          <div class="daily__rankingBox">
            <div class="daily__ranking">${val.info}</div>
            <div class="flex-blank"></div>
            <img
              style="width: 16px"
              src="https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf"
              alt="기다무"
            />
          </div>
        </div>
        <div class="item__title">${val.title}</div>
        <div class="item__views">
          <img
            style="width: 19px"
            src="https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f"
          /><img
            style="width: 11px"
            src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
          />${val.user}
        </div>
      </a>
    `;
  });
  return `
  <div class="items">
    ${items}
  </div>
  `;
};

const makeCardTypeOne = (data) => {
  return `
  <a class="expectedNew__top" href="#">
    <img
      src="${data.img}"
    />
    <div style="font-size: 16px" class="carousel__script">
      ${data.title}
    </div>
  </a>
  `;
};

const makeCardTypeTwo = (data) => {
  let items = "";
  data.forEach((val, ind) => {
    items += `
    <li class="dailyRankingTop__li">
      <a class="dailyRankingTop__link" href="#">
        <div class="dailyRanking">${ind + 1}</div>
        <div class="dailyRankingImgBox">
          <div class="dailyRankingImg">
            <img
              src="https://static-page.kakao.com/static/common/badge_time.png?4f8e2321988f4826b438a4ab2509e82a "
              style="width: 26px"
            />
          </div>
          <div style="display: flex">
            <img
              style="width: 84px"
              src="${val.img}"
            />
          </div>
        </div>
        <div class="dailyRankingDescription">
          <div class="dailyRankingTitle">${val.title}</div>
          <div class="dailyRankingInfo">
            <img
              src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871"
            />
            ${val.info}
            <p style="padding-top: 1rem">${val.day}</p>
          </div>
        </div>
      </a>
    </li>
    `;
  });
  return `
  <ul class="dailyRankingTop">
  ${items}
  </ul>
  `;
};

const makeCardTypeThree = (data) => {
  return `
    <img
    class="recommand__event"
    src="${data.img}"
    alt=""
  />
  `;
};

const makeCarousel = (data) => {
  let items = "";
  data.forEach((val) => {
    items += /* html */ `
    <div class="carousel__card">
      <img class="carousel__img" src="//dn-img-page.kakao.com/download/resource?kid=mNfwc/hzb7spege4/7ecXCccjHbpBOTc04piG10" alt="메인 이미지">
      <div class="carousel__items">
        <div class="carousel__title">막장드라마의 제왕</div>
        <img class="carousel__info" src="https://static-page.kakao.com/static/pc/badge-bigthum-event.svg?2c00fc6eb18517e8f006adfaf464530b" alt="이벤트">
        <img class="carousel__info" src="https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858" alt="기다무">
        <span class="carousel__info">
          웹툰 | 
          <img src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e" alt="조회수">28.8만명
        </span>
      </div>
      <div class="carousel__script">진정한 막장의 끝을 보여주겠다!</div>
    </div>
    `;
  });
  return /* html */ `
  <div class="carousel__inner">
    ${items}
  </div>
  <img class="carousel__left" src="https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg?85bef3b447d17ee7cbefa349c973fe56" alt="<">
  <img class="carousel__right" src="https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg?cf6a870397c04c13add6c27f1f735d93" alt=">" />
  <div class="carousel__countBox">
    <span class="carousel__counts">1</span>
    <span>/</span>
    <span class="carousel__total">3</span>
  </div>
  `;
};

export {
  makeCardTypeZero,
  makeCardTypeOne,
  makeCardTypeTwo,
  makeCardTypeThree,
};
