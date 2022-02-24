// 웹툰
const DATA_WEBTOON = {
  category: ['홈', '요일연재', '소년', '드라마', '로맨스', '로판', '액션무협', 'BL'],

  홈: {
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
      {
        title: '톱스타, 그 자체',
        caption: '다시 톱스타가 될 수 있을까?',
        tag: 'event',
        type: '웹툰',
        view: '5',
        path: '',
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

  요일연재: {
    mainBanner: [
      {
        title: '화산전생',
        caption: '나도 그들처럼 영웅이 되고 싶었다',
        tag: 'event',
        type: '웹툰',
        view: '183.2',
        path: '',
      },
      {
        title: '톱스타, 그 자체',
        caption: '다시 톱스타가 될 수 있을까?',
        tag: 'event',
        type: '웹툰',
        view: '5',
        path: '',
      },
    ],
  },

  소년: {
    mainBanner: [
      {
        title: '도굴왕',
        caption: '한시한편 + 무료증량 + 캐시까지?!',
        tag: 'event',
        type: '웹툰',
        view: '201',
        path: '',
      },
      {
        title: 'BJ대마도사',
        caption: '왜 게임 내 정보들이 보이는 거지?',
        tag: 'event',
        type: '웹툰',
        view: '26.1',
        path: '',
      },
    ],
    gridMenu: [['독점 신작'], ['이벤트로 달리자'], ['ㄷㄱㅇ이벤트🎉']],
  },

  드라마: {
    mainBanner: [
      {
        title: '미슐랭스타',
        caption: '최고의 셰프가 되는 건 나야!',
        tag: 'event',
        type: '웹툰',
        view: '59.1',
        path: '',
      },
      {
        title: '톱스타, 그 자체',
        caption: '다시 톱스타가 될 수 있을까?',
        tag: 'event',
        type: '웹툰',
        view: '5',
        path: '',
      },
    ],
    gridMenu: [['월간베스트#20'], ['#이벤트로 달리자'], ['완결까지#정주행']],
  },

  로맨스: {
    mainBanner: [
      {
        title: '화홍',
        caption: '엇갈린 사랑, 알 수 없는 마음',
        tag: 'up',
        type: '웹툰',
        view: '113.4',
        path: '',
      },
      {
        title: '별이 빈 소원',
        caption: '기다무 런칭기념, 캐시 이벤트!',
        tag: 'event',
        type: '웹툰',
        view: '12.7',
        path: '',
      },
    ],
    gridMenu: [['완결까지 정주행'], ['인기완결작'], ['기다무 플러스']],
  },

  로판: {
    mainBanner: [
      {
        title: '프린세스',
        caption: '기간한정, 1시간마다 무료!',
        tag: 'event',
        type: '웹툰',
        view: '30.7',
        path: '',
      },
      {
        title: '명랑자매백서',
        caption: '기간한정, 10화까지 무료!',
        tag: 'event',
        type: '웹툰',
        view: '12.8',
        path: '',
      },
    ],
    gridMenu: [['월간 베스트'], ['스테디셀러정주행'], ['기다무 플러스']],
  },

  액션무협: {
    mainBanner: [
      {
        title: '무림제왕의 은퇴생활',
        caption: '무림 맹주 같은 거, 너나 해!',
        tag: 'event',
        type: '웹툰',
        view: '9.8',
        path: '',
      },
      {
        title: '생사결: 여래의 복수',
        caption: '여래 현현! 다 무릎을 꿇어라!',
        tag: 'up',
        type: '웹툰',
        view: '58.1',
        path: '',
      },
    ],
    gridMenu: [['독점 신작🔥'], ['이벤트로 달리자'], ['기다무 플러스']],
  },

  BL: {
    mainBanner: [
      {
        title: '낯선 농담',
        caption: '또 시작해버렸다, 짝사랑',
        tag: 'event',
        type: '웹툰',
        view: '12.1',
        path: '',
      },
      {
        title: '일상다정사',
        caption: '내 형 말고, 나랑 사귀자',
        tag: 'up',
        type: '웹툰',
        view: '55.5',
        path: '',
      },
    ],
    gridMenu: [
      ['지난달의 BL'],
      ['인기 완결작'],
      ['기다무 플러스'],
      ['오늘도 선물'],
      ['BL 소설'],
      ['오늘의 이벤트'],
    ],
  },
};

// 웹소설
const DATA_WEBNOVEL = {
  category: ['홈', '요일연재', '판타지', '로맨스', '로판', '무협', '판드', 'BL'],
  홈: {},
  요일연재: {},
  판타지: {},
  로맨스: {},
  로판: {},
  무협: {},
  판드: {},
  BL: {},
};

// 영화
const DATA_MOVIE = {
  category: ['홈', '랭킹', '액션', '애니메이션', '장르전체'],
  홈: {},
  랭킹: {},
  액션: {},
  애니메이션: {},
  장르전체: {},
};

// 방송
const DATA_BROADCAST = {
  category: ['홈', '예능', '드라마', '애니메이션', '해외시리즈', '장르전체'],
  홈: {},
  예능: {},
  드라마: {},
  애니메이션: {},
  해외시리즈: {},
  장르전체: {},
};

// 책
const DATA_BOOK = {
  category: ['홈', '연재', '베스트셀러', '랭킹', '스릴러', '자기계발'],
  홈: {},
  연재: {},
  베스트셀러: {},
  랭킹: {},
  스릴러: {},
  자기계발: {},
};

export { DATA_WEBTOON, DATA_WEBNOVEL, DATA_MOVIE, DATA_BROADCAST, DATA_BOOK };
