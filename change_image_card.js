const Thu_imageCardInfo = [
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=rOfMN/hyEdeEtJFz/63XlMqYRjhokso828Ki6k0&filename=th2",
    rank : "1위",
    title : "나 혼자만 레벨업",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update hidden","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "417.4만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=biG4Nt/hzb7sXLBzm/Spy2JkLBLu3zUwNl9TaznK&filename=th2",
    rank : "2위",
    title : "궁귀 검신",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update hidden","image-card__comment__info-years","image-card__comment__info-icon"],
    subscriber : "51.3만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=kFPM3/hyATqBz2Kr/QT3iI8g7kR0R4YSdv0WWtK&filename=th2",
    rank : "3위",
    title : "샬롯에게는 다섯 명의 제자가 있다",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "108.5만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=bcSC27/hyCRfdqzwh/7zTlZUHyj50iUEd4kqJfyK&filename=th2",
    rank : "4위",
    title : "루시아",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "85.4만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=JKbkM/hzhOksSPjb/Zk4kiHai3IGS77dRy1iO1K&filename=th2",
    rank : "5위",
    title : "악당의 아빠를 꼬셔라",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "33.4만명"
  },
  {
    url: "https://dn-img-page.kakao.com/download/resource?kid=b7H7Jx/hzmU3lmHWf/PYTUMe8KmuFYbvLETjjfOk&filename=th2",
    rank : ' <img src="./image/badge-thumbnail-star.svg" alt="" /> 9.7',
    title : "재앙급 영웅님이 귀환하셨다",
    info : ["image-card__comment__info-new hidden","image-card__comment__info-update","image-card__comment__info-years hidden","image-card__comment__info-icon"],
    subscriber : "17.4만명"
  }
]

const changeImageCardInfo = (inputImageCardInfo) => {
  const test = document.querySelectorAll(".image-card");
  let imageCardUrl;
  let imageCardRank;
  let imageCardComment;
  let imageCardTitle;
  let imageCardInfo = [];
  for (let n = 0 ; n<test.length ; n++){
    for (let i = 0 ; i<test[n].childNodes.length ; i++){
      if (test[n].childNodes[i].className === "image-card__img") imageCardUrl = test[n].childNodes[i];
      // imageCardUrl.src = "주소";
      else if (test[n].childNodes[i].className === "image-card__area__content"){
        imageCardRank = test[n].childNodes[i].children[0];
        //imageCardRank.innerHTML = "바꾸고싶은거" (별표 표시 있으면 걔도 포함해줘야함)
      }
      else if (test[n].childNodes[i].className === "image-card__comment") {
        imageCardComment = test[n].childNodes[i];
        imageCardTitle = imageCardComment.children[0];
        // imageCardComment.children[0].innerHTML = 파일명
        for (let node of imageCardComment.children[1].children) imageCardInfo.push(node);
        //  imageCardComment.children[1].children : [new, update, years, icon, subscriber ]
        // node.className = "새로 받은 녀석의 클래스 네임"
        // 마지막 녀석은 구독자 수로 넣어줘야함 주의
      }
    }
    console.log(inputImageCardInfo[n]);
    imageCardUrl.src = inputImageCardInfo[n]["url"];
    imageCardRank.innerHTML = inputImageCardInfo[n]["rank"];
    imageCardTitle.innerHTML = inputImageCardInfo[n]["title"];
    for (let j = 0 ; j<4 ; j++){
      console.log(inputImageCardInfo[n][j]);
      imageCardInfo[j].className = inputImageCardInfo[n]["info"][j];
    }
    imageCardInfo[4].innerHTML = inputImageCardInfo[n]["subscriber"];
  }
}