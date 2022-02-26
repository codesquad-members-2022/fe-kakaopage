import {bannerData} from '/client/data/bannerData.js'
export const slideBanner=function() {
    let result = '';
    const newData = bannerData;
    for (let i = 0; i < 3; i++) {
        result += `<li class="banner__content">
        <img src=${newData[i].img_url} class="banner__image"/>
        <div class="banner__button">
            <button type="button"><img id ="prev" src="https://static-page.kakao.com/static/pc/ic-banner-paging-back-nor.svg?85bef3b447d17ee7cbefa349c973fe56" alt=""></button>
            <button type="button"><img id ="next" src="https://static-page.kakao.com/static/pc/ic-banner-paging-next-nor.svg?cf6a870397c04c13add6c27f1f735d93" alt=""></button>
        </div>

        <div class="underbtn">
            <div class="banner__info">
                <div>${newData[i].title}</div>
                <span><img src="${newData[i].event} alt=""></span>
                <span>웹툰</span>
                <span>|</span>
                <span><img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt=""></span>
                <span>${newData[i].fans}</span>
            </div>
            <div>${i+1}/3</div>
        </div>
        <div class="comment">${newData[i].comment}</div>
    </li>
    `
    }
    
    return result
    }

