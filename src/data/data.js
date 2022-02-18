const webtoonData = {
  // 웹툰 탭의 서브 카테고리
  category: ['홈', '요일연재', '소년', '드라마', '로맨스', '로판', '액션무협', 'BL'],

  // 0: 홈
  0: {
    mainBanner: [
      {
        title: '도사강호',
        caption: '시각이 다르면 무공도 다르다',
        tag: 'up',
        type: '웹툰',
        view: '30.5',
        path: 'static/thumb/main_toon_0_1.png',
      },
      {
        title: '내가 죽였다',
        caption: '누가 아군이고, 누가 적인가',
        tag: 'event',
        type: '웹툰',
        view: '20.4',
        path: 'static/thumb/main_toon_0_2.png',
      },
    ],
    gridMenu: [
      ['오늘 UP', '195'],
      ['오늘 신작', '3'],
      ['오리지널', '2,335'],
      ['완결까지 정주행'],
      ['독립운동가 웹툰'],
      ['오늘 랭킹', '1위'],
    ],
    promotionBanner: ['promo_toon_0_1.png', 'promo_toon_0_2.png'],
  },

  // 1: 요일연재
  1: {},

  // 2: 소년
  2: {},

  // 3: 드라마
  3: {},

  // 4: 로맨스
  4: {},

  // 5: 로판
  5: {},

  // 6: 액션무협
  6: {},

  // 7. BL
  7: {},
};

export { webtoonData };
