import { $ } from "./dom.js";

const coverImg = {
    img: {
        홈: "./images/img_cover.png",
        요일연재:
            "http://dn-img-page.kakao.com/download/resource?kid=cl0NGc/hzacezTSJp/rNn75CBqttbKDY0Cgpierk",
        웹툰: "http://dn-img-page.kakao.com/download/resource?kid=bk7A6r/hzhOmqqVvd/3GO9mPkES4m1GdjxnAqhW0",
        소년: "http://dn-img-page.kakao.com/download/resource?kid=crcdq/hzb7xD95BW/CrwhRk7eAC9dtQV5Oi3Crk",
        드라마: "http://dn-img-page.kakao.com/download/resource?kid=bTBWMG/hzp2ifulZF/YkpvjY3a5Dl89wX9RtnxDk",
        로맨스: "http://dn-img-page.kakao.com/download/resource?kid=gVCvh/hzhOgRNPsz/a3PU9dhXVYCsbBncuWU9tK",
        로판: "http://dn-img-page.kakao.com/download/resource?kid=lZEeK/hzp2gIFRTI/SzC5Z3nFktXKSjBj9l0ZUk",
        액션무협:
            "http://dn-img-page.kakao.com/download/resource?kid=b1G6sz/hzp2e5hBDs/rZxJLKfnt79jknCnuLJ83k",
        BL: "http://dn-img-page.kakao.com/download/resource?kid=bDvkGC/hzacbW2cAQ/ZS1Z5mX4Mpk9yN6A82B8q0",
    },
    title: {
        홈: "웹툰-홈",
        요일연재: "웹툰-요일연재",
        웹툰: "웹툰-웹툰",
        소년: "웹툰-소년",
        드라마: "웹툰-드라마",
        로맨스: "웹툰-로맨스",
        로판: "웹툰-로판",
        액션무협: "웹툰-액션무협",
        BL: "웹툰-BL",
    },
};

const changeCoverImgSection = (subMenu) => {
    const coverImgSection = $(".cover-image");
    const imgSrc = coverImg.img[subMenu];
    const title = coverImg.title[subMenu];

    coverImgSection.querySelector("img").src = imgSrc;
    coverImgSection.querySelector(".title").innerText = title;
};

const toggleClass = (curEl, className) => {
    const parentNode = curEl.parentNode;
    Array.from(parentNode.children).forEach((el) =>
        el.classList.remove(className)
    );
    curEl.classList.add(className);
};

const createElements = () => {};

const preventDefaults = () => {
    document.querySelectorAll("a").forEach((anchor) => {
        anchor.addEventListener("click", (e) => e.preventDefault());
    });
};

const bindSubMenuEvents = () => {
    // TODO:콜백함수 따로 빼기
    $(".sub-menu").addEventListener("click", (e) => {
        const curEl = e.target.parentNode;
        const targetPage = e.target.innerText;
        toggleClass(curEl, "active");
        changeCoverImgSection(targetPage);
    });
};

const bindEventListener = () => {
    bindSubMenuEvents();
};

const init = () => {
    preventDefaults();
    bindEventListener();
};

init();
