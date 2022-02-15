import { $, addImg, addTag, setProperty } from "./dom-lib.js";

class Main {
  constructor() {
    this.setJumbotron();
    this.setAdBanner();
    this.setDayTop();

    this.addEvent();
  }

  addEvent() {
    $("body").addEventListener("click", this.eventHandler.bind(this));
  }

  eventHandler(e) {
    console.log("target:>>", e.target);
    console.log("this :>> ", this);
    const action = e.target.dataset.action;
    if (action) this[action]();
  }

  home() {
    console.log("안녕");
  }

  setJumbotron() {
    addImg(
      "toon-jumbotron",
      "toon-jumbotron__image",
      "https://dn-img-page.kakao.com/download/resource?kid=eE8AF/hzp2i7G9gu/QXwcMEEbvq1YKFRXDbGR3K"
    );

    // jumbotron 버튼
    addImg(
      "toon-jumbotron_left",
      "toon-jumbotron_left__image",
      "https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg?85bef3b447d17ee7cbefa349c973fe56"
    );

    addImg(
      "toon-jumbotron_right",
      "toon-jumbotron_right__image",
      "https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg?cf6a870397c04c13add6c27f1f735d93"
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
  setAdBanner() {
    // 광고 배너-1
    addImg(
      "toon-ad-banner-1_banner",
      "toon-ad-banner-1_banner__image",
      "//dn-img-page.kakao.com/download/resource?kid=cOMNfP/hzp2fXqtDJ/Tswxss4NFzkbDtL6gdvBSK"
    );

    addImg(
      "toon-ad-banner-1_left",
      "toon-ad-banner-1_left__image",
      "https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg?85bef3b447d17ee7cbefa349c973fe56"
    );

    addImg(
      "toon-ad-banner-1_right",
      "toon-ad-banner-1_right__image",
      "https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg?cf6a870397c04c13add6c27f1f735d93"
    );
  }

  setDayTop() {
    // 요일 연재 TOP

    const today_top = [
      {
        imageURL:
          "//dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
        box_name: "1위",
        title: "이번 생은 가주가 되겠습니다",
        tag: "new-image",
        hit: "122.7만명",
      },
      {
        imageURL:
          "//dn-img-page.kakao.com/download/resource?kid=bhaZNx/hzhOgKHpz7/xbaDBtEqubGcBNaJ6pdta1&filename=th2",
        title: "이번 생은 가주가 되겠습니다",
        box_name: "2위",
        tag: "up-image",
        hit: "122.7만명",
      },
      {
        imageURL:
          "//dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
        title: "이번 생은 가주가 되겠습니다",
        box_name: "3위",
        tag: "",
        hit: "122.7만명",
      },
      {
        imageURL:
          "//dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
        title: "이번 생은 가주가 되겠습니다",
        box_name: "4위",
        tag: "",
        hit: "122.7만명",
      },
      {
        imageURL:
          "//dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
        title: "이번 생은 가주가 되겠습니다",
        box_name: "5위",
        tag: "",
        hit: "122.7만명",
      },
      {
        imageURL:
          "//dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
        title: "이번 생은 가주가 되겠습니다",
        box_name: "★ 10.0",
        tag: "",
        hit: "122.7만명",
      },
      {
        imageURL:
          "//dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
        title: "이번 생은 가주가 되겠습니다",
        box_name: "★ 9.8",
        tag: "",
        hit: "122.7만명",
      },
      {
        imageURL:
          "//dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
        title: "이번 생은 가주가 되겠습니다",
        box_name: "★ 9.6",
        tag: "",
        hit: "122.7만명",
      },
      {
        imageURL:
          "//dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
        title: "이번 생은 가주가 되겠습니다",
        box_name: "★ 9.9",
        tag: "",
        hit: "122.7만명",
      },
      {
        imageURL:
          "//dn-img-page.kakao.com/download/resource?kid=dpadT7/hzhOgqBSHA/HpZA6H7vPawsODuGIQaQO0&filename=th2",
        title: "이번 생은 가주가 되겠습니다",
        box_name: "★ 9.9",
        tag: "",
        hit: "122.7만명",
      },
    ];

    // 요일 연재 TOP 창 렌더
    // 호이말대로 이거 html부분을 좀 빼서
    // 그냥 innerText로 필요한 태그에만 돔조작으로 값 집어넣어도 될듯?
    today_top.forEach((v) => {
      const $toon_daytop_frame = `
        <div class="toon-daytop_frame">
            <div class="toon-daytop_frame_box">
                <img src=${v.imageURL} class="toon-daytop_frame__image"/>
                <div class="toon-daytop_frame_box__rank flex-center">${v.box_name}
                <img alt="timer-image" class="timer-image" /></div>
            </div>
            <div class="toon-daytop_frame__title text-ellipsis" >${v.title}</div>
            <div class="toon-daytop_frame__detail flex-center">
              <img class="${v.tag}" alt="${v.tag}" /><img
                class="man-image"
                alt=""
              />${v.hit}
            </div>
        </div>`;

      $(".toon-daytop_album").insertAdjacentHTML(
        "beforeend",
        $toon_daytop_frame
      );
    });

    // icon들.. 이것도 함수로 쉽게 넣어보자
    const $timer_images = document.querySelectorAll(".timer-image");
    $timer_images.forEach(
      (v) =>
        (v.src =
          "https://static-page.kakao.com/static/common/bmbadge_waitfree.svg?53cf25c84253dee8d32e66da7524dbaf")
    );
    const $man_images = document.querySelectorAll(".man-image");
    $man_images.forEach(
      (v) =>
        (v.src =
          "https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871")
    );
    const $new_images = document.querySelectorAll(".new-image");
    $new_images.forEach(
      (v) =>
        (v.src =
          "https://static-page.kakao.com/static/common/icon_new.svg?4ae84a0f972e30119fb6fcfbb2f59bf9")
    );
    const $up_images = document.querySelectorAll(".up-image");
    $up_images.forEach(
      (v) =>
        (v.src =
          "https://static-page.kakao.com/static/common/icon_up.svg?51cfaf512283ca0e1eaca53414e35a3f")
    );
  }
}

export default Main;
