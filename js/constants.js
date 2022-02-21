/**
 * Documentaion
 * key : menu ( 1 ~ 9 )
 * value : 1: 홈, 2: 요일연재, 3: 웹툰, 4:소년, 5: 드라마, 6: 로맨스, 7: 로판, 8: 액션무협, 9: BL
 */
export const issueObj = {
  1: [
    "오늘 UP",
    "오늘 신작",
    "오리지널",
    "완결까지 정주행",
    "독립운동가 웹툰",
    "오늘 랭킹",
  ],
  2: [],
  3: [],
  4: ["독점 신작", "이벤트로 달리자", "ㄸㅂㅇㄹ ㄹㅂㅇ"],
  5: ["월간 베스트#20", "#이벤트로달리자", "완결까지#정주행"],
  6: ["완결까지 정주행", "인기완결작", "기다무플러스"],
  7: ["월간 베스트", "스테디셀러정주행", "기다무플러스"],
  8: ["독점 신작", "이벤트로 달리자", "기다무 플러스"],
  9: [
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
  romanceTop: { name: "romance", title: "로맨스 TOP", imageSize: "small", imageStatus: "garde"},
};
