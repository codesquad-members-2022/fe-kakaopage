export const footerInfo = () => {
  // 이런 정적인 것도 json에 넣어야 할까?

  const kakaoAppBanner =
    "https://static-page.kakao.com/static/pc/appDownload.png?ec8ae2e191ce28a0a4eaa59d5577fa8b";
  const rightImg =
    "https://static-page.kakao.com/static/common/okMark.png?861290e3393cbb3c93e6d3056d6905af";

  const template = `
  <div class="view-kakao-app">
    <img class=view-kakao-app__img src=${kakaoAppBanner}>
  </div>     
  <div class="corp-right">
    <div class="corp-right_letter">
      <ul class="corp-right_letter__info-1">
        <li class="corp-right_letter__info-1__1">회사소개</li>
        <li class="corp-right_letter__info-1__2">• 이용약관</li>
        <li class="corp-right_letter__info-1__3">• 개인정보처리방침</li>
        <li class="corp-right_letter__info-1__4">청소년보호정책</li>
        <li class="corp-right_letter__info-1__5">• 공지사항</li>
      </ul>
      <span class="corp-right_letter__info-2"
        >(주)카카오엔터테인먼트 사업자 정보 | 사업자 정보 확인
      </span>
      <span class="corp-right_letter__info-3"
        >ⓒ Kakao Entertainment Corp.</span
      >
    </div>
    <div class="corp-right_right">
      <img class=corp-right_right__img src=${rightImg}>
      <span class="corp-right_right__letter">저작권 ok</span>
    </div>
  </div>`;
  return template;
};
