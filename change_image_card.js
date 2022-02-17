export const changeImageCardInfo = (inputImageCardInfo) => {
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