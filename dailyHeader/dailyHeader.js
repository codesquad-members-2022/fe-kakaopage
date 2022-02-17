
export const dailyHeader =  ()=>{
    return `
      <ul class="dailyHeader">
        <li>월</li>
        <li>화</li>
        <li>수</li>
        <li>목</li>
        <li>금</li>
        <li>토</li>
        <li>일</li>
        <li>완결</li>
    </ul>
      <div class="dailyCategory">
            <ul class="category">
                <li>전체</li>
                <div class="separator"></div>
                <li>웹툰</li>
                <div class="separator"></div>
                <li><img src="https://static-page.kakao.com/static/common/ico_wait-off.svg?cb16228c070950e8b1bb33d712ac8b7a"/>웹툰</li>
            </ul>
            <div class="total"></div>
        </div>
    `;
}