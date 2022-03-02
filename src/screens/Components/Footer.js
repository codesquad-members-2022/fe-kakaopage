import Component from "../Component.js";
import { createExtendsRelation } from "../../utils.js";

function Footer(infoObject) {
  Component.call(this, infoObject);
}

createExtendsRelation(Footer, Component);

Footer.prototype.template = function () {
  return `
    <div class="footerLeft">
        <div class="footerBox">
            <span>회사소개</span>
            <span class="span-dot"> ・ </span>
            <span>이용약관</span>
            <span class="span-dot"> ・ </span>
            <span>개인정보처리방침</span>
            <span class="span-dot"> ・ </span>
            <span>청소년보호정책</span>
            <span class="span-dot"> ・ </span>
            <span>공지사항</span>
        </div>
        <div class="footerBox">
            <details>
            <summary>(주)카카오엔터테인먼트 사업자 정보</summary>
            <ul>
                <li>
                <span>대표자:이진수, 김성수 </span>
                <span class="span-bar">|</span>
                <span>호스팅서비스사업자: (주)카카오엔터테인먼트</span>
                </li>
                <li>
                <span>사업자 등록번호: 220-88-02594 </span>
                <span class="span-bar">|</span>
                <span> 통신판매업신고: 2018-성남분당B-0004</span>
                </li>
                <li>
                <span>대표전화 : 1644-4755</span>
                <span class="span-bar"> | </span>
                <span>이메일:contact@kakaopage.com</span>
                </li>
                <li>
                <span>주소 : 경기도 성남시 분당구 판교역로 221</span>
                </li>
            </ul>
            </details>
            <span class="span-bar">|</span>
            <span>사업자 정보 확인</span>
        </div>
        <div class="footerBox">
            <span>© Kakao Entertainment Corp.</span>
        </div>
        </div>
        <div class="footerRight">
        <img
            src="https://static-page.kakao.com/static/common/okMark.png?861290e3393cbb3c93e6d3056d6905af"
            alt="저작권ok"
        />
        <span>저작권 ok</span>
    </div>
  `;
};

export default Footer;
