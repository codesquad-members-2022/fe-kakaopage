import { getRandomString } from "../../js/utils.js";

// TODO: status로 아이콘 구분해서 랜더링
export function createBanner({
  size,
  title,
  status,
  type,
  views,
  progress,
  ad,
}) {
  return `
  <style>${getStyle(size)}</style>
  <div class="${banner}">
    <div class="banner__list">
      <div class="picture-large picture1"></div>
      <div class="banner__btn-prev"></div>
      <div class="banner__btn-next"></div>
      <div class="banner-info col">
        <div class="banner__title">${title}</div>
        <div class="banner-category row">
          <div class="banner__info-container row">
            <div class="banner__icon"></div>
            <div class="banner__icon2"></div>
            <div class="banner__category">${type}</div>
            <div class="banner__block-icon"></div>
            <div class="banner__views-icon"></div>
            <div class="banner__views">${views}만명</div>
          </div>
        </div>
      </div>
    </div>
    <div class="banner__ad">
      <div class="banner__ad-text">${ad}</div>
    </div>
  </div>`;
}

let banner;

function getStyle(size) {
  banner = getRandomString({ length: 6 });
  return `
.${banner} {
  margin: 10px auto;
  width: 720px;
  height: 480px;
}

.banner__icon {
  background-image: url("https://static-page.kakao.com/static/pc/badge-bigthum-new.svg?ffdef148078f601fa45da8b0ab56d834");
  background-size: cover;
  width: 55px;
  height: 22px;
  margin-top: 3px;
}

.banner__icon2 {
  background-image: url("https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858");
  background-size: cover;
  width: 18px;
  height: 20px;
  margin: 4px 5px 0 5px;
}

.banner__category {
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
}

.banner__block-icon {
  width: 2px;
  height: 16px;
  background-image: url("https://static-page.kakao.com/static/common/line_top_banner.png?343ab907f94da6068f627f916b4b35ea");
  background-size: cover;
  margin: 7px 3px 0 3px;
}

.banner__views-icon {
  width: 16px;
  height: 20px;
  background-image: url("https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e");
  background-size: cover;
  margin: 4px 5px 0 5px;
}

.banner__views {
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
}

.banner__title {
  position: relative;
  bottom: 160px;
  left: 10px;
  font-size: 28px;
  color: #ffffff;
  font-weight: bold;
}

.banner__list {
  margin: 0;
  padding: 0;
  height: 440px;
}

.picture-large {
  width: 720px;
  height: 440px;
}

.picture1 {
  background-image: url("https://dn-img-page.kakao.com/download/resource?kid=ZF6kg/hzp2ht81QB/x0EaN7cBvWM5ut2s1WJnQK");
  background-size: cover;
}

.banner__btn-prev {
  width: 40px;
  height: 40px;
  position: relative;
  bottom: 230px;
  left: 20px;
  background-image: url("https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg?85bef3b447d17ee7cbefa349c973fe56");
  background-size: cover;
  cursor: pointer;
}

.banner__btn-next {
  width: 40px;
  height: 40px;
  position: relative;
  bottom: 270px;
  left: 660px;
  background-image: url("https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg?cf6a870397c04c13add6c27f1f735d93");
  background-size: cover;
  cursor: pointer;
}

.banner__ad {
  background-color: #ffd200;
  height: 40px;
}

.banner__info-container {
  position: relative;
  bottom: 155px;
  left: 10px;
  height: fit-content;
}

.banner__ad-text {
  text-align: center;
  padding-top: 6px;
  font-size: 18px;
  color: #222222;
}
`;
}
