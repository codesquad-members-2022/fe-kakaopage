export const changeImageBoxInfo = (imageBoxInfo) => {
  const imageBoxComment = document.querySelector(".image-box__comment");
  const imageBoxImgUrl = document.querySelector(".image-box__upload_webtoon");
  const imageBoxTitle = document.querySelector(".image-box__name");
  // imageBoxTitle.innerHTML = "지옥에서 돌아온 성좌님"
  const subscriber = document.querySelector(".subscriber");
// subscriber.innerHTML = "46.7만명"

  imageBoxImgUrl.src = imageBoxInfo.url;
  imageBoxComment.innerHTML = imageBoxInfo.comment;
  imageBoxTitle.innerHTML = imageBoxInfo.title;
  subscriber.innerHTML = imageBoxInfo.subscriber;
}