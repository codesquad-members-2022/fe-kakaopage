import { $ } from './selector.js';

const imageBoxContainer = $(".image-box-container");
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
    },1000)
  }
  let nextImgCnt = transformRange/100 + 1;
  if (nextImgCnt >IMAGE_CNT) nextImgCnt = 1;
  imageBoxInfo.innerHTML = `${nextImgCnt} / ${IMAGE_CNT}`
  clearInterval(bannerTimer);
  bannerTimer = setInterval(()=>{
    nextImage();
  },3000);
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
    },1000);
  }
  let prevImgCnt = transformRange/100 - 1;
  if (prevImgCnt === 0) prevImgCnt = IMAGE_CNT;
  imageBoxInfo.innerHTML = `${prevImgCnt} / ${IMAGE_CNT}`
  clearInterval(bannerTimer);
  bannerTimer = setInterval(()=>{
    nextImage();
  },3000);
}


let bannerTimer = setInterval(()=>{
  nextImage();
},3000);


imageBoxContainer.addEventListener("click", (evt) => {
  if(evt.target.parentNode.className === "image-box__rightbutton") {nextImage()}
  else if (evt.target.parentNode.className === "image-box__leftbutton"){prevImage()};
})