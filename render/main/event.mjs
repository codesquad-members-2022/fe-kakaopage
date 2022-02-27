import { $ } from "../../util/util.mjs";

const renderMainEvent = () => {
  $(".main__inner").innerHTML += /* html */ `
  <div class="main__event">
    <a class="arrowImg" href="#">
      <img
        src="https://static-page.kakao.com/static/pc/ic-paging-back-nor.svg?2c964bb7a6b07a7941252b32ea13f03c"
        alt="<"
      />
    </a>
    <a class="event__banner" href="#">
      <img
        style="width: 100%"
        src="//dn-img-page.kakao.com/download/resource?kid=bEngPM/hzhOgRLRNt/vmLyWbIeBrt9Vfi57beF61"
      />
    </a>
    <a class="arrowImg" href="#">
      <img
        src="https://static-page.kakao.com/static/pc/ic-paging-next-nor.svg?b76f34a1b77e59514735b92464295b7c"
        alt=">"
      />
    </a>
  </div>`;
};

export { renderMainEvent };
