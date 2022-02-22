import {webtoonItems} from './data_cover.js'
function makeWebtoonItems() {
    let result = '';
    const newData = webtoonItems;
    for (let i = 0; i < 5; i++) {
        result += `<li class="w__content">
        <div class="wc_Image">
            <img src=${newData[i].img_url} alt="${newData[i].img_alt}"/>
        </div>
        <div class="wc_Info">
            <div id="wc__title">${newData[i].title}</div>
            <div id="wc__des">${newData[i].des}</div>
            <div id="wc__detail">
                <span><img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt=""></span>
                <span>${newData[i].viewer}</span>
                <span>|</span>
                <span>${newData[i].writer}</span>
        </div>
    </div>
    </li>
    `
    }
    
    return result
    }
document.querySelector(".webtoon__contents").innerHTML += makeWebtoonItems();