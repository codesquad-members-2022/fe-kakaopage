import {topItems} from '/client/data/topData.js'
export const maketopItems= function() {
    let result = '';
    const newData = topItems;
    for (let i = 0; i < 5; i++) {
        result += `<div class="content">
        <img class="c_img" src="${newData[i].img_url}"; alt="">
        <div class="c_rank">${newData[i].rank}</div>
        <div class="c_title">${newData[i].title}</div>
        <div class="c_follower">
            <img src="https://static-page.kakao.com/static/common/icon_read_count.png?817b1f83aa0dd8de232a68ac82efd871" alt="">
            <span>${newData[i].viewer}</span>
        </div>
    </div>
    `
    }
    
    return result
    }
