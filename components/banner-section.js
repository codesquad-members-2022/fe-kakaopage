function createBannerSection() {
    const section = document.createElement('section');
    section.className = 'banner-section';
    section.innerHTML = `
    <button class="banner-button banner-button-left"></button>
    <div class="banner-wrapper">
        <div class="img-wrapper">
            <img src="https://dn-img-page.kakao.com/download/resource?kid=gBbTf/hzmU1BFb5i/UC3fjQFhwcIVKiC1BYSBVK" alt="광고배너">
        </div>
    </div>
    <button class="banner-button banner-button-right"></button>
    `
    return section;
}

export { createBannerSection };