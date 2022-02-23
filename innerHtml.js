//홈 > 웹툰
const $content= document.querySelector(".daily__contents").innerHTML;
const $daily__contents= document.querySelector(".daily__contents");

for(let i=0;i<9;i++){
    $daily__contents.innerHTML += $content;
}

//웹툰 > 웹툰
// const $w__content= document.querySelector(".webtoon__contents").innerHTML;
// const $webtoon__contents= document.querySelector(".webtoon__contents");

// for(let i=0;i<4;i++){
//     $webtoon__contents.innerHTML += $w__content;
// }
