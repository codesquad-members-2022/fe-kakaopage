const webtoonGenre = {
    '홈': {'genre': 'home', 'text': '홈'},
    '요일연재': {'genre': 'daily', 'text': '요일연재'},
    '웹툰': {'genre': 'webtoon', 'text': '웹툰'},
    '소년': {'genre': 'boy', 'text': '소년'},
    '드라마': {'genre': 'drama', 'text': '드라마'},
    '로맨스': {'genre': 'romance', 'text': '로맨스'},
    '로판': {'genre': 'rofan', 'text': '로판'},
    '액션무협': {'genre': 'action', 'text': '액션무협'},
    'BL': {'genre': 'BL', 'text': 'BL'},
}

const novelGenre = {
    '홈': {'genre': 'novel-home', 'text': '홈'},
    '요일연재': {'genre': 'novel-daily', 'text': '요일연재'},
    '웹소설': {'genre': 'novel-novel', 'text': '웹소설'},
    '판타지': {'genre': 'novel-fantasy', 'text': '판타지'},
    '현판': {'genre': 'novel-modern', 'text': '현판'},
    '로맨스': {'genre': 'novel-romance', 'text': '로맨스'},
    '로판': {'genre': 'novel-rofan', 'text': '로판'},
    '무협': {'genre': 'novel-action', 'text': '무협'},
    '판드': {'genre': 'novel-fand', 'text': '판드'},
    'BL': {'genre': 'novel-BL', 'text': 'BL'},
    '단행본': {'genre': 'novel-paper', 'text': '단행본'},
}

const movieGenre = {
    '홈': {'genre': 'movie-home', 'text': '홈'},
    '랭킹': {'genre': 'movie-ranking', 'text': '랭킹'},
    '로맨스': {'genre': 'movie-romance', 'text': '로맨스'},
    '액션': {'genre': 'movie-action', 'text': '액션'},
    '애니메이션': {'genre': 'movie-animation', 'text': '애니메이션'},
    '장르전체': {'genre': 'movie-all', 'text': '장르전체'},
}

const broadcastGenre = {
    '홈': {'genre': 'broadcast-home', 'text': '홈'},
    '예능': {'genre': 'broadcast-entertainment', 'text': '예능'},
    '드라마': {'genre': 'broadcast-drama', 'text': '드라마'},
    '애니메이션': {'genre': 'broadcast-animation', 'text': '애니메이션'},
    '해외시리즈': {'genre': 'broadcast-overseas', 'text': '해외시리즈'},
    '랭킹': {'genre': 'broadcast-ranking', 'text': '랭킹'},
    '장르전체': {'genre': 'broadcast-all', 'text': '장르전체'},
}

const bookGenre = {
    '홈': {'genre': 'book-home', 'text': '홈'},
    '연재': {'genre': 'book-series', 'text': '연재'},
    '베스트셀러': {'genre': 'book-best', 'text': '베스트셀러'},
    '랭킹': {'genre': 'book-ranking', 'text': '랭킹'},
    '스릴러': {'genre': 'book-thriller', 'text': '스릴러'},
    '자기계발': {'genre': 'book-selfdev', 'text': '자기계발'},
    '학습만화': {'genre': 'book-study', 'text': '학습만화'},
}

const genreTabData = {
    'webtoon': [webtoonGenre['홈'], webtoonGenre['요일연재'], webtoonGenre['웹툰'], webtoonGenre['소년'], webtoonGenre['드라마'], webtoonGenre['로맨스'], webtoonGenre['로판'], webtoonGenre['액션무협'], webtoonGenre['BL']],
    'novel': [novelGenre['홈'], ,novelGenre['요일연재'],novelGenre['웹소설'],novelGenre['판타지'],novelGenre['현판'],novelGenre['로맨스'],novelGenre['로판'],novelGenre['무협'],novelGenre['판드'],novelGenre['BL'],novelGenre['단행본']],
    'movie':[movieGenre['홈'],movieGenre['랭킹'],movieGenre['로맨스'],movieGenre['액션'],movieGenre['애니메이션'],movieGenre['장르전체']],
    'broadcast':[broadcastGenre['홈'],broadcastGenre['예능'],broadcastGenre['드라마'],broadcastGenre['애니메이션'],broadcastGenre['해외시리즈'],broadcastGenre['랭킹'],broadcastGenre['장르전체']],
    'book':[bookGenre['홈'],bookGenre['연재'],bookGenre['베스트셀러'],bookGenre['랭킹'],bookGenre['스릴러'],bookGenre['자기계발'],bookGenre['학습만화']]
}



export {genreTabData};