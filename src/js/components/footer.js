const footer = () => {
  return `
  <div class="footer__inner">
    <div class="footer__download-app-link"><a href="#"><strong>카카오페이지</strong> 앱으로 보기</a></div>

    <ul class="footer__links">
      <li><a href="https://www.kakaoent.com/">회사소개</a></li>
      <li><a href="#"> • 이용약관</a></li>
      <li><a href="#"> • 개인정보처리방침</a></li>
      <li><a href="#"> • 청소년보호정책</a></li>
      <li><a href="#"> • 공지사항</a></li>
    </ul>

    <details class="footer__company-info-wrap">
      <summary class="footer__company-info-summary">
        (주)카카오엔터테인먼트 사업자 정보 |<a target="blank" href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2208802594"> 사업자 정보 확인</a>
      </summary>
      <p class="footer__company-info-line">대표자: 이진수, 김성수 | 호스팅서비스사업자: (주)카카오엔터테인먼트</p>
      <p class="footer__company-info-line">사업자 등록 번호 : 220-88-02594 | 통신판매업신고 : 2018-성남분당B-0004</p>
      <p class="footer__company-info-line">대표전화 : 1644-4755 | 이메일 : contact@kakaopage.com</p>
      <p class="footer__company-info-line">주소 : 경기도 성남시 분당구 판교역로 221</p>
    </details>

    <p class="footer__copyright">ⓒ Kakao Entertainment Corp.</p>
    <div class="footer__ok-mark"><img src="static/icon/okMark.png" alt="" /><p>저작권 ok</p></div>
  </div>
  `;
};

export { footer };
