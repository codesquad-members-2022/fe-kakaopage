import { dummy } from "./sources.js";


export function transformBannerMain(widthRem){
    const bannerMain = document.querySelector(".banner-main")
    const imgNum = dummy.slideBannerMainImg.length;
    const maxWidth = widthRem * imgNum;
    bannerMain.style.width = `${maxWidth}rem`

    let xPos = 0;

    bannerMain.style.transform = `translateX(${xPos}rem)`
    xPos -= widthRem;

    setInterval( () => {
        if(xPos === maxWidth*(-1)) xPos = 0;
        bannerMain.style.transform = `translateX(${xPos}rem)`
        xPos -= widthRem;
    }, 2500)
}