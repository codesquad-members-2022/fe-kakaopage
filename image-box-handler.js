const imageBoxContainer = document.querySelector(".image-box-container");
const containerBox = imageBoxContainer.querySelector(".image-box-container__box");
const imageBoxInfo = imageBoxContainer.querySelector(".image-box__page-info");
const lastIdx = containerBox.childElementCount*100 - 100;
const IMAGE_CNT = lastIdx/100 -1;
const TRANSLATE_RANGE = 100;

const nextImage = () =>{
  let classArray = containerBox.className.split(" ");
  let transformRange = Number(classArray[1].split("-")[1]);
  containerBox.className = `image-box-container__box translateX-${transformRange+TRANSLATE_RANGE} transition-ease-in-out-sec`;
  classArray = containerBox.className.split(" ");
  if (classArray[1] === `translateX-${lastIdx}`){
    setTimeout(() => {
      containerBox.className = `image-box-container__box translateX-${TRANSLATE_RANGE}`;
    transformRange = 0;
    },900)
  }
  let nextImgCnt = transformRange/100 + 1;
  if (nextImgCnt >IMAGE_CNT) nextImgCnt = 1;
  imageBoxInfo.innerHTML = `${nextImgCnt} / ${IMAGE_CNT}`
}

const prevImage = () =>{
  let classArray = containerBox.className.split(" ");
  let transformRange = Number(classArray[1].split("-")[1]);
  containerBox.className = `image-box-container__box translateX-${transformRange-TRANSLATE_RANGE} transition-ease-in-out-sec`;
  classArray = containerBox.className.split(" ");
  if (classArray[1] === `translateX-${0}`){
    setTimeout(() => {
      transformRange = lastIdx-TRANSLATE_RANGE;
      containerBox.className = `image-box-container__box translateX-${transformRange}`;
    },900);
  }
  let prevImgCnt = transformRange/100 - 1;
  if (prevImgCnt === 0) prevImgCnt = IMAGE_CNT;
  imageBoxInfo.innerHTML = `${prevImgCnt} / ${IMAGE_CNT}`
}


imageBoxContainer.addEventListener("click", (evt) => {
  if(evt.target.parentNode.className === "image-box__rightbutton") {nextImage()}
  else if (evt.target.parentNode.className === "image-box__leftbutton"){prevImage()};
})