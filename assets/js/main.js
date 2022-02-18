import {topBanner} from "./data.js";

const gnb = document.querySelector(".gnb ul");
const lnb = document.querySelector(".lnb ul");
const dayNav = document.querySelector(".day_nav ul");

gnb.addEventListener("click", (e) => {
    const eventTarget = e.target;
    toActivateNav(eventTarget, gnb);
})

lnb.addEventListener("click", (e) => {
    const eventTarget = e.target;
    const targetLnb = eventTarget.closest('li').getAttribute('data-lnb');
    toActivateNav(eventTarget, lnb);
    changeTopBanner(targetLnb);
})

dayNav.addEventListener("click", (e) => {
    const eventTarget = e.target;
    toActivateNav(eventTarget, dayNav);
})

function toActivateNav(target, nav) {
    const clickTarget = target.closest('li');
    const currentActive = nav.querySelector('.active');
    currentActive.classList.remove('active');
    clickTarget.classList.add('active');
}

function changeTopBanner(targetLnb) {
    const banner = document.querySelector('.top_banner');
    
    const targetBannerData = topBanner[targetLnb];
    let itemHtml = '';

    targetBannerData.forEach(data => {
        
        itemHtml += `
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
    });


    banner.querySelector('.slider_items').innerHTML = itemHtml;
}

(function() {
    lnb.querySelector('li:first-child').click();
}())