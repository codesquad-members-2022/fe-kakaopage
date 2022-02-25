import {topBanner, webtoonData} from "./data.js";
import {initSlider, initSliderHandler} from "./slider.js"

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
    const bannerSlider = banner.querySelector('.slider_items');
    const targetBannerData = topBanner[targetLnb];
    const itemHtml = targetBannerData.map(data => creatTopBannerHtml(data));
    bannerSlider.innerHTML = itemHtml.join('');
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
    let badgeSrc = '';
    Object.entries(data.badge).forEach(([key, value]) => {
        if(value) {
            switch (key) {
                case 'up' : 
                    badgeSrc = 'badge_up_blue.svg'
                    badge += creatBadgeHtml(key, badgeSrc);
                    break;
                case 'new' :
                    badgeSrc = 'badge_new_red.svg'
                    badge += creatBadgeHtml(key, badgeSrc);
                    break;
                case 'age15' :
                    badgeSrc = 'badge_15.png'
                    badge += creatBadgeHtml(key, badgeSrc);
                    break;
            }
        }
    })
    return badge
}

function creatBadgeHtml(badgeName, src) {
    return `<img src="./assets/images/ico/${src}" alt="${badgeName}">`
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

(function(){
    clickMenu();
    const bannerSlider = document.querySelector('.top_banner');
    initSliderHandler(bannerSlider);
}())