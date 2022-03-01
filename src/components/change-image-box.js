import { $ } from './selector.js';
export const changeImageBoxInfo = (imageBoxInfo) => {
  const imageBoxComment = $(".image-box__comment");
  const imageBoxImgUrl = $(".image-box__upload_webtoon");
  const imageBoxTitle = $(".image-box__name");
  // imageBoxTitle.innerHTML = "지옥에서 돌아온 성좌님"
  const subscriber = $(".subscriber");
// subscriber.innerHTML = "46.7만명"

  imageBoxImgUrl.src = imageBoxInfo.url;
  imageBoxComment.innerHTML = imageBoxInfo.comment;
  imageBoxTitle.innerHTML = imageBoxInfo.title;
  subscriber.innerHTML = imageBoxInfo.subscriber;
}