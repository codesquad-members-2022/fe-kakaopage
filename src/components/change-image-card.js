export const changeImageCardInfo = (inputImageCardInfo) => {
  const imageCard = document.querySelectorAll(".image-card");
  let imageCardUrl;
  let imageCardRank;
  let imageCardComment;
  let imageCardTitle;

  for (let n = 0; n < imageCard.length; n++) {
    let imageCardInfo = [];
    for (let i = 0; i < imageCard[n].childNodes.length; i++) {
      if (imageCard[n].childNodes[i].className === "image-card__img")
        imageCardUrl = imageCard[n].childNodes[i];
      // imageCardUrl.src = "주소";
      else if (
        imageCard[n].childNodes[i].className === "image-card__area__content"
      ) {
        imageCardRank = imageCard[n].childNodes[i].children[0];
        //imageCardRank.innerHTML = "바꾸고싶은거" (별표 표시 있으면 걔도 포함해줘야함)
      } else if (
        imageCard[n].childNodes[i].className === "image-card__comment"
      ) {
        imageCardComment = imageCard[n].childNodes[i];
        imageCardTitle = imageCardComment.children[0];
        // imageCardComment.children[0].innerHTML = 파일명
        for (let node of imageCardComment.children[1].children)
          imageCardInfo.push(node);
        //  imageCardComment.children[1].children : [new, update, years, icon, subscriber ]
        // node.className = "새로 받은 녀석의 클래스 네임"
        // 마지막 녀석은 구독자 수로 넣어줘야함 주의
      }
    }
    // console.log(inputImageCardInfo[n]);
    imageCardUrl.src = inputImageCardInfo[n]["url"];
    imageCardRank.innerHTML = inputImageCardInfo[n]["rank"];
    imageCardTitle.innerHTML = inputImageCardInfo[n]["title"];

    for (let j = 0; j < imageCardInfo.length; j++) {
      imageCardInfo[j].className = inputImageCardInfo[n]["info"][j];
    }
    // console.log(imageCardInfo[4]);
    imageCardInfo[4].innerHTML = inputImageCardInfo[n]["subscriber"];
  }
};
