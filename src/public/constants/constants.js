/**
 * Documentaion
 * key : menu ( 1 ~ 9 )
 * value : 0: 홈, 1: 요일연재, 2: 웹툰, 3: 소년, 4: 드라마, 5: 로맨스, 6: 로판, 7: 액션무협, 8: BL
 */

export const categoryObj = {
  '홈': 1,
  '요일연재': 2,
  '웹툰': 3,
  '소년': 4,
  '드라마': 5,
  '로맨스': 6,
  '로판': 7,
  '액션무협': 8,
  'BL': 9
}

export const naviRemoteObj = {
  1: {},
  2: {},
  3: {},
  4: [
    {'issue': 'ISSUE'},
    {'recommend': '오늘의 추천'},
    {'advertise': '배너'},
    {'popularity': '지금 뜨는 인기작'},
    {'exclusive': '독점연재'},
    {'gift': '오늘의 추천'},
    {'dailyRanking': '일간 랭킹 TOP'}
  ],
  5: [
    {'issue': 'ISSUE'},
    {'recommend': '오늘의 추천'},
    {'advertise': '배너'},
    {'popularity': '지금 뜨는 인기작'},
    {'exclusive': '독점연재'},
    {'gift': '오늘의 추천'},
    {'dailyRanking': '일간 랭킹 TOP'}
  ],
  6: [
    {'issue': 'ISSUE'},
    {'recommend': '오늘의 추천'},
    {'advertise': '배너'},
    {'popularity': '지금 뜨는 인기작'},
    {'exclusive': '독점연재'},
    {'gift': '오늘의 추천'},
    {'dailyRanking': '일간 랭킹 TOP'}
  ],
  7: [
    {'issue': 'ISSUE'},
    {'recommend': '오늘의 추천'},
    {'advertise': '배너'},
    {'popularity': '지금 뜨는 인기작'},
    {'exclusive': '독점연재'},
    {'gift': '오늘의 추천'},
    {'dailyRanking': '일간 랭킹 TOP'}
  ],
  8: [
    {'issue': 'ISSUE'},
    {'recommend': '오늘의 추천'},
    {'advertise': '배너'},
    {'popularity': '지금 뜨는 인기작'},
    {'exclusive': '독점연재'},
    {'gift': '오늘의 추천'},
    {'dailyRanking': '일간 랭킹 TOP'}
  ],
  9: [
    {'issue': 'ISSUE'},
    {'recommend': '오늘의 추천'},
    {'advertise': '배너'},
    {'popularity': '지금 뜨는 인기작'},
    {'exclusive': '독점연재'},
    {'gift': '오늘의 추천'},
    {'dailyRanking': '일간 랭킹 TOP'}
  ],
}

export const rowListTitleObj = {
  weeks: {name: "weeks", imageSize:"small", imageStatus: 'grade' },
  recommendation: { name: "recommend", title: "오늘의 추천", imageSize: "large", imageStatus: "clock" },
  romanceTop: { name: "romance", title: "로맨스 TOP", imageSize: "small", imageStatus: "grade"},
  nobilityTop: { name: "nobility", title: "로판 TOP", imageSize: "small", imageStatus: "grade"},
  dramaTop: { name: "drama", title: "드라마 TOP", imageSize: "small", imageStatus: "grade"},
  boyTop: { name: "boy", title: "소년 TOP", imageSize: "small", imageStatus: "grade"},
  dailyRankingTop: { name: "dailyRanking", title: "일간 랭킹 TOP", imageSize: "small", imageStatus: "clock"},
  webtoons: { name: "webtoons", title: "웹툰", imageSize: "mid", imageStatus: ""},
  todayGift: { name: "gift", title: "오늘의 선물🎁", imageSize: "mid", imageStatus: "clock"},
  popularity: { name: "popularity", title: "지금 뜨는 인기작", imageSize: "mid", imageStatus: "clock"},
  exclusive: { name: "exclusive", title: "[ORIGINAL] 믿고보는 독.점.연.재", imageSize: "large", imageStatus: "clock"}
};