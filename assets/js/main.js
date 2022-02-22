import {topBanner, webtoonData} from "./data.js";

function clickMenu() {
    const gnb = document.querySelector(".gnb ul");
    const lnb = document.querySelector(".lnb ul");
    const dayNav = document.querySelector(".day_nav ul");
    const topBannerDefault = "home";
    const dayNavDefault = "mon";

    
    gnb.addEventListener("click", (e) => {
        if(e.target.closest('li').classList.contains('active')) return
        toActivateNav(e.target, gnb);
    })
    
    lnb.addEventListener("click", (e) => {
        if(e.target.closest('li').classList.contains('active')) return
        toActivateNav(e.target, lnb);
        const targetLnb = e.target.closest('li').getAttribute('data-lnb');
        changeTopBanner(targetLnb);
    })
    
    dayNav.addEventListener("click", (e) => {
        if(e.target.closest('li').classList.contains('active')) return
        toActivateNav(e.target, dayNav);
        const targetDay = e.target.closest('li').getAttribute('data-day');
        createWebtoonDayContents(targetDay)

    })

    changeTopBanner(topBannerDefault);
    createWebtoonDayContents(dayNavDefault)
}

function toActivateNav(target, nav) {
    const clickTarget = target.closest('li');
    const currentActive = nav.querySelector('.active');
    currentActive.classList.remove('active');
    clickTarget.classList.add('active');
}

function changeTopBanner(targetLnb) {
    const banner = document.querySelector('.top_banner');
    const targetBannerData = topBanner[targetLnb];
    const itemHtml = targetBannerData.map(data => creatTopBannerHtml(data));
    banner.querySelector('.slider_items').innerHTML = itemHtml.join('');

    initSlider(banner);
}

function creatTopBannerHtml(data) {
    return `
        <div class="item item_type1">
            <div class="img">
                <img src="${data.image}" alt="${data.title}">
            </div>
            <div class="txt">
                <div class="info_box">
                    <h3 class="ttl">${data.title}</h3>
                    <div class="info">
                        <span class="badge">
                            <img src="${data.badge.src}" alt="${data.badge.name}">
                        </span>
                        <span class="info_txt cat">${data.category}</span>
                        <span class="info_txt viewer">${data.viewer}명</span>
                    </div>
                </div>
                <p class="desc">${data.description}</p>
            </div>
        </div>`;
}

function getBadge(data) {
    let badge = '';
    for(let key in data.badge) {
        if(data.badge[key]) {
            switch (key) {
                case 'up' :
                    badge += '<img src="./assets/images/ico/badge_up_blue.svg" alt="up">'
                    break;
                case 'new' :
                    badge += '<img src="./assets/images/ico/badge_new_red.svg" alt="새작품"></img>'
                    break;
                case 'age15' :
                    badge += '<img src="./assets/images/ico/badge_15.png" alt="15세 작품">'
                    break;
            }
        }
    }
    return badge
}

function createItemType3Horizontal(data) {
    const webtoonBadge = getBadge(data)
    return `<li class="item item_type3 flex horizontal ${data.class || ''}">
        <a href="#!">
            <div class="img">
                <img src="${data.image}" alt="${data.title}">
            </div>
            <div class="txt">
                <div class="item_ttl_box">
                    <div class="badge">
                        ${webtoonBadge}
                    </div>
                    <h4 class="item_ttl text_ellipsis">${data.title}</h4>
                </div>
                <p class="info_txt item_desc text_ellipsis">${data.description}</p>
                <div class="info">
                    <span class="info_txt viewer">${data.viewer}</span>
                    <span class="info_txt text_ellipsis">${data.writer}</span>
                </div>
            </div>
        </a>
    </li>`
}

function createWebtoonDayContents(targetDay) {
    const items = webtoonData.map(data => {
        if(data.week === targetDay || targetDay === "all") {
            return createItemType3Horizontal(data);
        }
    })
    document.querySelector('.day_contents .item_list').innerHTML = items.join('');
}

function initSlider(sWrapper) {
    const sliderWrapper = sWrapper;
    const sliderBox = sliderWrapper.querySelector('.slider_items');
    const sliderPager = sliderWrapper.querySelector('.slider_pager');
    const sliderItem = sliderBox.querySelectorAll('.item');
    const firstItem = sliderBox.firstElementChild;
    const lastItem = sliderBox.lastElementChild;
    const cloneFirst = firstItem.cloneNode(true);
    const cloneLast = lastItem.cloneNode(true);
    cloneFirst.classList.add('clone');
    cloneLast.classList.add('clone');
    sliderBox.appendChild(cloneFirst);
    sliderBox.prepend(cloneLast);
    const itemWidth = 100;
    let currentIdx = 0;
    let index = 0;
    sliderPager.innerText = `${currentIdx + 1} / ${sliderItem.length}`;

    setInitPos(sliderBox, itemWidth);
    setTimeout(() => {
        sliderBox.classList.add('animate')
    }, 0)

    sliderWrapper.addEventListener('click', (e) => {
        const target = e.target;
        const prevBtn = sliderWrapper.querySelector('.prev');
        const nextBtn = sliderWrapper.querySelector('.next');
    
        switch (target) {
            case prevBtn:
                index = currentIdx - 1;
                moveSlide(sliderBox, itemWidth, index);
                currentIdx -= 1;
                break;
            case nextBtn:
                index = currentIdx + 1;
                moveSlide(sliderBox, itemWidth, index)
                currentIdx += 1;
                break;
            default :
                break;
        }
        sliderPager.innerText = `${currentIdx + 1} / ${sliderItem.length}`;
    })
}

function setInitPos(sliderBox, itemWidth) {
    const initTranslateValue = `-${itemWidth}%` 
    sliderBox.style.transform = `translateX(${initTranslateValue})`
}

function moveSlide(sliderBox, itemWidth, idx) {
    const translateValue = -idx * itemWidth;
    sliderBox.style.marginLeft = `${translateValue}%`
}

(function() {
    clickMenu();
}())