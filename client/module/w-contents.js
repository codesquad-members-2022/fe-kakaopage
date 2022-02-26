import {webtoonItems} from '/client/data/webtoonData.js'
export const makeWebtoonItems= function() {
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
                <span><img src="https://static-page.kakao.com/static/pc/ico-bigthum-person.svg?100328455b1454b0ffff555caf02e71e" alt=""></span>
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
