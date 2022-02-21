import { $ } from "./dom.js";
import { nodes } from "./nodes.js";
import { romanceTop } from "./genreItems.js";

// FIXME:파일분리
const webtoonMenu = {
    홈: [
        "category",
        // "slide-banner",
        // "weekday-serial-best",
        // "new-best",
        // "genre-best",
        // "daily-best",
        // "recommend-best",
    ],
    요일연재: ["weekday-serial"],
    // FIXME:무의미한 임시 값, 수정필요
    웹툰: 3,
    소년: 4,
    드라마: 5,
    로맨스: 6,
    로판: 7,
    액션무협: 8,
    BL: 9,
};

const datas = {
    category: [
        { title: "오늘 UP", badge: "200" },
        { title: "오늘 신작", badge: "4" },
        { title: "오리지널", badge: "2,332" },
        { title: "완결까지 정주행" },
        { title: "독립운동가 웹툰" },
        { title: "오늘 랭킹" },
    ],
};

// FIXME:파일분리
const coverImg = {
    img: {
        홈: "./images/img_cover.png",
        요일연재:
            "//dn-img-page.kakao.com/download/resource?kid=cl0NGc/hzacezTSJp/rNn75CBqttbKDY0Cgpierk",
        웹툰: "//dn-img-page.kakao.com/download/resource?kid=bk7A6r/hzhOmqqVvd/3GO9mPkES4m1GdjxnAqhW0",
        소년: "//dn-img-page.kakao.com/download/resource?kid=crcdq/hzb7xD95BW/CrwhRk7eAC9dtQV5Oi3Crk",
        드라마: "//dn-img-page.kakao.com/download/resource?kid=bTBWMG/hzp2ifulZF/YkpvjY3a5Dl89wX9RtnxDk",
        로맨스: "//dn-img-page.kakao.com/download/resource?kid=gVCvh/hzhOgRNPsz/a3PU9dhXVYCsbBncuWU9tK",
        로판: "//dn-img-page.kakao.com/download/resource?kid=lZEeK/hzp2gIFRTI/SzC5Z3nFktXKSjBj9l0ZUk",
        액션무협:
            "//dn-img-page.kakao.com/download/resource?kid=b1G6sz/hzp2e5hBDs/rZxJLKfnt79jknCnuLJ83k",
        BL: "//dn-img-page.kakao.com/download/resource?kid=bDvkGC/hzacbW2cAQ/ZS1Z5mX4Mpk9yN6A82B8q0",
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

// FIXME:테스트중: 홈 클릭시(로 가정하고), 로맨스TOP 정보를 genreItems.js에서 가져와서 화면에 표시
const createGenreItems = () => {
    // FIXME: 홈(.genre-best 존재)에서만 적용하기 위한 라인
    if (!$(".genre-best")) return;

    const parentNode = $(".genre-best").querySelector("ol.webtoon-card-wrap");
    let romanceTopChildren = "";
    romanceTop.forEach((curItem) => {
        romanceTopChildren += `<li class="webtoon-card">
        <div class="thumbnail-wrap">
            <img
                src="${curItem.img}"
                alt="${curItem.title}"
                class="thumbnail"
            />
            <div class="group-flex rank-info">
                <div>
                    <span>★</span>
                    <span>${curItem.score}</span>
                </div>
                <img
                    src="./images/bmbadge_waitfree.svg"
                    alt="기다리면 무료 아이콘"
                />
            </div>
        </div>
        <p class="title">${curItem.title}</p>
        <div class="reader-info">
            <span>UP</span>
            <span>아이콘</span>
            <span>인원수</span>
        </div>
    </li>`;
    });
    parentNode.insertAdjacentHTML("afterbegin", romanceTopChildren);
};

const changeCoverImg = (subMenu) => {
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

const getElements = (targetPage) => {
    const nodeNames = webtoonMenu[targetPage];
    let tag = "";

    for (let i = 0; i < nodeNames.length; i++) {
        const curNodeName = nodeNames[i];
        tag += nodes[curNodeName](datas[curNodeName]);
    }
    /* const nodeNames = webtoonMenu[targetPage];
    let tag = "";
    for (let i = 0; i < nodeNames.length; i++) {
        tag += nodes[nodeNames[i]];
    }
    return tag; */
    return tag;
};

const preventDefaults = () => {
    $("body").addEventListener("click", (e) => e.preventDefault());
};

const clearMainContents = () => {
    $(".contents-wrap").innerHTML = "";
};

const bindSubMenuEvent = () => {
    // TODO: 콜백함수 따로 빼기
    // TODO: 서브메뉴 외 다른 메뉴에도 적용되도록
    $(".sub-menu").addEventListener("click", ({ target }) => {
        const curEl = target.parentNode;
        const targetPage = target.innerText;

        // 서브메뉴 active 클래스 토글
        toggleClass(curEl, "active");
        // 커버이미지란 변경
        changeCoverImg(targetPage);
        // 메인컨텐츠 비우기
        clearMainContents();

        // 필요한 노드들 추가하기(부모)
        /* $(".contents-wrap").insertAdjacentHTML(
            "afterbegin",
            getElements(targetPage)
        ); */

        $(".contents-wrap").innerHTML = getElements(targetPage);

        if (targetPage === "홈") {
            //TODO: 추가한 노드들에 자식노드 추가
            // FIXME: 로맨스TOP만 추가 테스트
            // 테스트중: .genre-best가 만들어지면, createGenreItems()를 실행
            /* createGenreItems(); */
        }
    });
};

const toggleWeekDayMenu = (target) => {
    const curEl = target.parentNode;
    toggleClass(curEl, "active");
};

const bindEventListener = () => {
    bindSubMenuEvent();

    $(".contents-wrap").addEventListener("click", ({ target }) => {
        if ($(".week-day-menu")?.contains(target)) {
            toggleWeekDayMenu(target);
        }
    });
};

const init = () => {
    preventDefaults();
    bindEventListener();
};

init();
