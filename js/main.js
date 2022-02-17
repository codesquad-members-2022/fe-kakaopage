import { $, getTag, addImg } from "./domLibrary1.js";
const imagePath = "/image/main";

class Main {
  constructor() {
    this.setJumbotron();
  }

  setJumbotron() {
    addImg(
      "toon-jumbotron",
      "toon-jumbotron__image",
      "https://dn-img-page.kakao.com/download/resource?kid=eE8AF/hzp2i7G9gu/QXwcMEEbvq1YKFRXDbGR3K"
    );

    // jumbotron 안 데이터
    addImg(
      "toon-jumbotron__tag",
      "toon-jumbotron__tag__image",
      "https://static-page.kakao.com/static/pc/badge-bigthum-new.svg?ffdef148078f601fa45da8b0ab56d834",
      true
    );

    addImg(
      "toon-jumbotron__category",
      "toon-jumbotron__category__image",
      "https://static-page.kakao.com/static/pc/ico-bigthum-wait.svg?aeb2837e99c7d1055cbc3444433f4858",
      true
    );

    addImg(
      "toon-jumbotron__view",
      "toon-jumbotron__view__image",
      "https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e",
      true
    );
  }
}

export default Main;
