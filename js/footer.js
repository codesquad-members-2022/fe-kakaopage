import { addTag, setProperty } from "./dom-lib.js";
class Footer {
  constructor(params) {
    this.setViewApp();
    this.setCorpRight();
  }

  setViewApp() {
    addTag(".view-kakao-app", "img", "view-kakao-app__img");
    setProperty(
      ".view-kakao-app__img",
      "src",
      "https://static-page.kakao.com/static/pc/appDownload.png?ec8ae2e191ce28a0a4eaa59d5577fa8b"
    );
  }

  setCorpRight() {
    addTag(".corp-right_right", "img", "corp-right_right__img", true);
    setProperty(
      ".corp-right_right__img",
      "src",
      "https://static-page.kakao.com/static/common/okMark.png?861290e3393cbb3c93e6d3056d6905af"
    );
  }
}

export default Footer;
