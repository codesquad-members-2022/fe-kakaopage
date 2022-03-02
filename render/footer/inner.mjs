import { $ } from "../../util/util.mjs";

const renderFooter = () => {
  $(".footer").innerHTML += /* html */ `
    <div class="footer__inner">
      <div class="fnb">
        <ul class="fnb__inner">
          <li class="fnb__li">
            <a href="#">회사소개</a>
          </li>
          <li class="fnb__li">
            <a href="#"> • 이용약관</a>
          </li>
          <li class="fnb__li">
            <a href="#"> • 개인정보처리방침</a>
          </li>
          <li class="fnb__li">
            <a href="#"> • 청소년보호정책</a>
          </li>
          <li class="fnb__li">
            <a href="#"> • 공지사함</a>
          </li>
        </ul>
        <div class="fnb__inner">
          <details>
            <summary>(주)카카오엔터테인먼트 사업자 정보</summary>
          </details>
          <div class="seperator">|</div>
          <a href="#"> 사업자 정보 확인 </a>
        </div>
        <div class="fnb__inner">
          <p>ⓒ Kakao Entertainment Corp.</p>
        </div>
      </div>
      <div class="flex-blank"></div>
      <div class="copyright">
        <img
          src="https://static-page.kakao.com/static/common/okMark.png?861290e3393cbb3c93e6d3056d6905af"
          alt="저작권 이미지"
        />
        <p>저작권 ok</p>
      </div>
    </div>
  `;
};

export { renderFooter };
