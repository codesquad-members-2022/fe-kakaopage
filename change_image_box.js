const imageBoxComment = document.querySelector(".image-box__comment");
const imageBoxImgUrl = document.querySelector(".image-box__upload_webtoon");
const imageBoxTitle = document.querySelector(".image-box__name");
// imageBoxTitle.innerHTML = "지옥에서 돌아온 성좌님"
const subscriber = document.querySelector(".subscriber");
// subscriber.innerHTML = "46.7만명"


const Thu_imageBoxInfo ={
  url : "https://dn-img-page.kakao.com/download/resource?kid=vY9EO/hzhOm4DsAe/ooN3xLPLUZPU6Uid2Matlk",
  title : "지옥에서 돌아온 성좌님",
  comment : "인간 최초의 성좌가 되는 길 !",
  subscriber : "46.7만"
}

const changeImageBoxInfo = (imageBoxInfo,imageBoxComment,imageBoxImgUrl,imageBoxTitle,subscriber) => {
  imageBoxImgUrl.src = imageBoxInfo.url;
  imageBoxComment.innerHTML = imageBoxInfo.comment;
  imageBoxTitle.innerHTML = imageBoxInfo.title;
  subscriber.innerHTML = imageBoxInfo.subscriber;
}