export const changeImageCardInfo = (inputImageCardInfo) => {
  const imageCard = document.querySelectorAll(".image-card");
  let imageCardUrl;
  let imageCardRank;
  let imageCardComment;
  let imageCardTitle;

  for (let n = 0; n < imageCard.length; n++) {
    let imageCardInfo = [];
    imageCardUrl = imageCard[n].querySelector(".image-card__img");
    imageCardRank = imageCard[n]
      .querySelector(".image-card__area__content")
      .querySelector(".image-card__rank");
    imageCardComment = imageCard[n].querySelector(".image-card__comment");
    // 이미지 카드 레이아웃이 이미지 url 아래 제목과 그 밑에 부가설명으로 이루어져 있기 때문에, 부가 설명의 갯수가 달라지거나 클래스 명이 달라질 수 있어서 children을 사용하였음
    // imageCardComment.children[1].children 대신 imageCardComment.querySelector(".image-card__comment__info").children로 사용해도 무관하지만 레이아웃 형태가 더 잘 보이는 것 같아서 지금 형태 사용
    imageCardTitle = imageCardComment.children[0];
    for (let node of imageCardComment.children[1].children) {
      imageCardInfo.push(node);
    }
    imageCardUrl.src = inputImageCardInfo[n]["url"];
    imageCardRank.innerHTML = inputImageCardInfo[n]["rank"];
    imageCardTitle.innerHTML = inputImageCardInfo[n]["title"];
    inputImageCardInfo[n]["info"].forEach(
      (name, idx) => (imageCardInfo[idx].className = name)
    );
    imageCardInfo[imageCardInfo.length - 1].innerHTML =
      inputImageCardInfo[n]["subscriber"];
  }
};
