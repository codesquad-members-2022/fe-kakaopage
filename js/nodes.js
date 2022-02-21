export const nodes = {
    category: function (datas) {
        let tag = `<div
        class="category bg-white margin-top-default padding-default"
    ><div class="category-links-wrap group-flex">`;
        tag += datas.reduce(
            (prev, cur) =>
                prev +
                `<a href="" class="group-flex flex-center"
        ><span>${cur.title}</span
        >${
            cur.badge
                ? `<span class="badge group-flex flex-center">${cur.badge}</span>`
                : ``
        }</a
    >`,
            ""
        );
        tag += `</div>
        </div>`;
        return tag;
    },
    "slide-banner": `<div
    class="slide-banner group-flex bg-white margin-top-default"
>
    <div class="arrow group-flex flex-center">
        <img src="./images/paging_back.svg" alt="이전" />
    </div>
    
    <div class="arrow group-flex flex-center">
        <img src="./images/paging_next.svg" alt="다음" />
    </div>
</div>`,
    "weekday-serial-best": `<div
    class="weekday-serial-best bg-white margin-top-default padding-default"
>
    <div class="section-header group-flex">
        <div class="group-flex">
            <h3>요일 연재 TOP</h3>
            <span class="count group-flex flex-center">(갯수)</span>
        </div>
        <div>
            <span class="detail">더보기 ></span>
        </div>
    </div>

    <ol class="week-list group-flex">
        <li>월</li>
        <li>화</li>
        <li class="active">수</li>
        <li>목</li>
        <li>금</li>
        <li>토</li>
        <li>일</li>
        <li>완결</li>
    </ol>

    <ol class="webtoon-card-wrap group-flex">
        
    </ol>
</div>`,
    "new-best": `<div
    class="new-best bg-white margin-top-default padding-default"
>
    <div class="section-header group-flex">
        <h3>기대신작 TOP</h3>
        <span class="detail">더보기></span>
    </div>

    <div class="new-best-img-wrap group-flex">
        
    </div>
</div>`,
    "genre-best": `<div
    class="genre-best margin-top-default bg-white padding-default"
>
    <div class="section-header group-flex">
        <h3>로맨스 TOP</h3>
        <span class="detail">더보기 ></span>
    </div>

    <ol class="webtoon-card-wrap group-flex">
        
    </ol>
</div>`,
    "daily-best": `<div
    class="daily-best bg-white margin-top-default padding-default"
>
    <div class="section-header group-flex">
        <h3>일간 랭킹 TOP</h3>
        <span class="detail">더보기 ></span>
    </div>

    <ol>
        
    </ol>
</div>`,
    "recommend-best": `<div
    class="recommend-event bg-white margin-top-default padding-default"
>
    <div class="section-header group-flex">
        <h3>추천 이벤트</h3>
        <span class="detail">더보기 ></span>
    </div>

    <div class="img-wrap">
        
    </div>
</div>`,
    "weekday-serial": `<div class="weekday-serial bg-white margin-top-default">
                        <ul class="week-day-menu group-flex bg-white">
                            <li class="active"><a href="">월</a></li>
                            <li><a href="">화</a></li>
                            <li><a href="">수</a></li>
                            <li><a href="">목</a></li>
                            <li><a href="">금</a></li>
                            <li><a href="">토</a></li>
                            <li><a href="">일</a></li>
                            <li><a href="">완결</a></li>
                        </ul>

                            <ol class="webtoon-card-wrap group-flex padding-default"></ol>
                            </div>`,
};
