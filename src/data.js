const getPageData = (page) => {
    const jsonUrl = {
        '홈': '/src/data/home.json',
        '웹툰': '/src/data/webtoon.json',
        '웹소설': '/src/data/webFiction.json',
        '영화': '/src/data/movie.json',
        '방송': '/src/data/tv.json',
        '책': '/src/data/book.json'
    }
    return jsonUrl[page];
}

export { getPageData };