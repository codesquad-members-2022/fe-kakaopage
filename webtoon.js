export const webtoonCard = (data) =>{return`<li>
    <div class="webtoon_image" style="background-image:url(${data.image})"></div>
    <div class="webtoon_rank">
        <span class="webtoon_rank_emit">${data.rank}</span>
        <span><img src="img/wait-off.svg" width="15px" height="15px" alt="timeicon"></span>
    </div>
    <div class="webtoon_info">
        <p class="webtoon_title">${data.title}</p>
        <div class="webtoon_pop">
            <span><img src="img/people.png" width="10px" height="10px" alt="peopleicon"></span>
            <span class="read_count">${data.view}</span>
        </div>
    </div>
    </li>`}

