async function getWebtoonData() {
    const res = await fetch(`https://korea-webtoon-api.herokuapp.com/kakao-page/week`, {
        method: 'GET'
    }),
    json = await res.json();
    console.log(json);
    return json;
}

getWebtoonData();