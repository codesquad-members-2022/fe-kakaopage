import { dummy } from "./sources.js";


export function transformBannerMain(widthRem) {
    const bannerMain = document.querySelector(".banner-main")
    // const imgNum = dummy.slideBannerMainImg.length;
    const imgNum = 5;
    const maxWidth = widthRem * (imgNum+1);
    bannerMain.style.width = `${maxWidth}rem`

    let xPos = 0;

    let lastChild = bannerMain.lastElementChild;
    let clonedLast = lastChild.cloneNode(true);
    bannerMain.insertBefore(clonedLast, bannerMain.firstElementChild);

    bannerMain.style.transform = `translateX(${widthRem*(-1)}rem)`

    xPos -= widthRem *2;
    const timeout = () => setTimeout(() => {
        if(xPos === maxWidth*(-1)) {
            bannerMain.style.transition = '0ms'
            xPos = 0;
            bannerMain.style.transform = `translateX(${xPos}rem)`
            xPos -= widthRem;

            clearTimeout(timeout)
            timeout();
        } else {
            bannerMain.style.transition = 'ease-in-out 1s';
            bannerMain.style.transform = `translateX(${xPos}rem)`
            xPos -= widthRem;
            timeout();
        }
    }, 2000)

    timeout();
}