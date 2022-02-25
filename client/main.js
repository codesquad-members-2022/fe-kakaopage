const CSSstyle = getComputedStyle(document.body);
const textcolor = CSSstyle.getPropertyValue('--text-color');
const darkgrey = CSSstyle.getPropertyValue('--dark-grey');
const accent = CSSstyle.getPropertyValue('--accent-color');

/*============ 1. 장르 선택 시 글씨 색 변경 ============= */
//1) 글씨 색 변경
const $$genrebar= document.querySelector(".genrebar");
const $genre__tab= document.querySelector(".genrebar__tab");
const $banner_image= document.querySelector(".banner__image")
let curGenre = $genre__tab;

function genreClickHandler(event) {
    let target= event.target;
    if(target!=curGenre){
        target.style.color = textcolor;
        curGenre.style.color = darkgrey;
    }
    if(target!=$genre__tab){
        document.querySelector(".daily").style.display ='none';
        document.querySelector(".webtoon").style.display ='block';
       if($genre__tab.innerText==='요일연재'||'웹툰'){
        $webtoon__days.style.display ='block';
       }
       else{
        $webtoon__days.style.display ='none';
       }
    }else{
        document.querySelector(".daily").style.display ='block';
        document.querySelector(".webtoon").style.display ='none';
        $webtoon__days.style.display ='none';
    }
    curGenre= target;
  }
$$genrebar.addEventListener('click',genreClickHandler);

/*====================== 2. 홈> 요일 연재 TOP =========================*/
//: 요일 글씨 색, 밑줄 변화
const $$days= document.querySelector(".days");
const $days= document.querySelector(".days__Mon");
const $c_img= document.querySelector(".c_img");
let curdays= $days;

function daysClickHandler(event) {
    let target= event.target;
    if(target.tagName!="BUTTON"){
        return;
    } //버튼 아래 밑줄 방지
    if(target!=curdays){
        target.style.color= textcolor;
        target.style.borderBottom= "4px solid #FCBC19";
        curdays.style.color= darkgrey;
        curdays.style.borderColor="#FFFFFF";
    }
    curdays= target;
  }

$$days.addEventListener('click',daysClickHandler);

/*=========================== 3. 웹툰> 요일연재 또는 웹툰 ==============================*/
//: 글자색 바꾸기
const $webtoon__days=document.querySelector(".webtoon__days")
$webtoon__days.addEventListener('click',daysClickHandler);

//=========================== 배너 =========================
const $banner__container=document.querySelector(".banner__container"),
$$banner=document.querySelectorAll(".banner__container li"),
bannerCount=$$banner.length;


function makeClone(){
    for(let i=0;i<bannerCount;i++){
        let cloneBanner=$$banner[i].cloneNode(true);
        $banner__container.append(cloneBanner)
    }
    for(let i=bannerCount-1;i>=0;i--){
        let cloneBanner=$$banner[i].cloneNode(true);
        $banner__container.prepend(cloneBanner)
    }
    setInitialPos();
    setTimeout(function(){
        $banner__container.style.transition="transform 0.5s"
    },100);
}

function setInitialPos(){
    const intialValue=-720*bannerCount;
    $banner__container.style.transform=`translateX(${intialValue}px)`
}

makeClone()
//배너 버튼
let curIdx=bannerCount;
let curSize=bannerCount*-720;
const $bannerButton=document.querySelectorAll(".banner__button");

function bannerClickButton(event) {
    let target= event.target;
    if(target.id==='next'){
        curSize-=720;
        $banner__container.style.transform=`translateX(${curSize}px)`
        curIdx+=1
    }

    if(target.id==='prev'){
        curSize+=720;
        $banner__container.style.transform=`translateX(${curSize}px)`
        curIdx-=1;
    }
    console.log(curIdx)
}
$bannerButton[curIdx].addEventListener('click',bannerClickButton)


