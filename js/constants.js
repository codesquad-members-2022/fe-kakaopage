/**
 * Documentaion
 * key : menu ( 1 ~ 9 )
 * value : 0: 홈, 1: 요일연재, 2: 웹툰, 3: 소년, 4: 드라마, 5: 로맨스, 6: 로판, 7: 액션무협, 8: BL
 */
export const issueObj = {
  0: [
    "오늘 UP",
    "오늘 신작",
    "오리지널",
    "완결까지 정주행",
    "독립운동가 웹툰",
    "오늘 랭킹",
  ],
  1: [],
  2: [],
  3: ["독점 신작", "이벤트로 달리자", "ㄸㅂㅇㄹ ㄹㅂㅇ"],
  4: ["월간 베스트#20", "#이벤트로달리자", "완결까지#정주행"],
  5: ["완결까지 정주행", "인기완결작", "기다무플러스"],
  6: ["월간 베스트", "스테디셀러정주행", "기다무플러스"],
  7: ["독점 신작", "이벤트로 달리자", "기다무 플러스"],
  8: [
    "지난달의 BL",
    "인기 완결작",
    "기다무 플러스",
    "오늘도 선물",
    "BL 소설",
    "오늘의 이벤트",
  ],
};

export const rowListTitleObj = {
  weeks: {name: "weeks", imageSize:"small", imageStatus: 'grade' },
  recommendation: { name: "recommend", title: "오늘의 추천", imageSize: "large", imageStatus: "clock" },
  romanceTop: { name: "romance", title: "로맨스 TOP", imageSize: "small", imageStatus: "grade"},
  nobilityTop: { name: "nobility", title: "로판 TOP", imageSize: "small", imageStatus: "grade"},
  dramaTop: { name: "drama", title: "드라마 TOP", imageSize: "small", imageStatus: "grade"}
};
