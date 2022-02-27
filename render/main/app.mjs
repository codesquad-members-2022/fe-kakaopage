import { $ } from "../../util/util.mjs";

const renderByApplication = () => {
  $(".main__inner").innerHTML += /* html */ `
  <div class="by-application">
  <img
    style="width: 70%"
    src="https://static-page.kakao.com/static/pc/appDownload.png?ec8ae2e191ce28a0a4eaa59d5577fa8b"
    alt=""
  />
</div>             
  `;
};

export { renderByApplication };
